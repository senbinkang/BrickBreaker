class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function () {
            if (game.scene instanceof Scene || game.scene instanceof SceneTitle) {
                return
            }

            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        let game = this.game
        var bgEnd = BgEnd(game)
        game.drawImage(bgEnd)

        // draw labels
        // this.game.context.fillStyle = 'red'
        // this.game.context.fillText('游戏结束，按 r 返回标题界面', 100, 200)
    }
}