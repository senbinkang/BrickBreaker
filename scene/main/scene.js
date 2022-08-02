class Scene {
    constructor(game) {
        this.game = game
        this.paddle = Paddle(game)
        this.ball = Ball(game)

        this.score = 0
        // 用 loadLevel 载入关卡
        window.blocks = loadLevel(game, 3)

        this.registerAction(game)
        this.bindEvents()
    }

    registerAction(game) {
        let self = this
        game.registerAction('a', function () {
            self.paddle.moveLeft()
        })
        game.registerAction('d', function () {
            self.paddle.moveRight()
        })
        game.registerAction('f', function () {
            self.ball.fire()
        })
    }

    draw() {
        let game = this.game
        let paddle = this.paddle
        let ball = this.ball
        // draw 背景
        game.context.fillStyle = '#554'
        game.context.fillRect(0, 0, 400, 500)

        game.drawImage(paddle)
        game.drawImage(ball)
        // draw blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }

        // draw labels
        game.context.fillStyle = '#fff'
        game.context.fillText('分数:' + this.score, 10, 490)
        game.context.fillText('按 f 发射子弹', 180, 490)
        game.context.fillText('fps:' + window.fps, 360, 490)
    }

    update() {
        if (window.paused) {
            return
        }
        let game = this.game
        let ball = this.ball
        let paddle = this.paddle

        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到游戏结束的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
        // 判断 paddle 和 ball 相撞
        if (paddle.collide(ball)) {
            ball.反弹()
        }
        // 判断 ball 和 block 相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                // log('block 相撞')
                block.kill()
                ball.反弹()
                // 当球碰到砖块时，更新分数
                this.score += 100
            }
        }
    }

    bindEvents() {
        let game = this.game
        let ball = this.ball

        // mouse event
        this.enableDrag = false
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log('down x, y', x, y)
            // 检查是否选中了 ball
            if (ball.hasPoint(x, y)) {
                // 设置拖拽变量
                this.enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (this.enableDrag) {
                log('move x, y', x, y)
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            log('up x, y', x, y)
            this.enableDrag = false
        })
    }
}