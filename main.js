var loadLevel = function (game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        // 将 p 传入
        var b = Block(game, p)
        // 设置 block 坐标
        blocks.push(b)
    }
    return blocks
}

// var blocks = []
var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (event.key === 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡
            window.blocks = loadLevel(game, Number(k))
        }
    })

    // 控制小球速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var value = Number(event.target.value)
        if (value === 0) {
            value = 1
        }
        window.fps = value
    })
}

var __main = function () {
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        block2: 'img/block2.png',
        paddle: 'img/paddle.png',
        'bg-start': 'img/bg-start.png',
        'bg-end': 'img/bg-end.png',
    }

    var game = Game.instance(30, images, function (g) {
        var scene = SceneTitle.new(g)
        // var scene = GameScene(g)
        g.runWithScene(scene)
    })

    // 将 debug 相关的写到一起
    enableDebugMode(game, true)
}

__main()