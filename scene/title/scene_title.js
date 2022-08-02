class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            if (game.scene instanceof Scene || game.scene instanceof SceneEnd) {
                return
            }

            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        let game = this.game
        var bgSrart = BgSrart(game)
        game.drawImage(bgSrart)

        // draw labels
        // this.game.context.fillText('按 k 开始游戏', 100, 100)
        // game.drawImage(paddle)
    }
}