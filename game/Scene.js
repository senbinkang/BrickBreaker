class GameScene {
    constructor(game) {
        this.game = game
    }
    static new(game) {
        // 此处 this 指的是 调用的这个类
        // 我们是用 SceneTitle 调用的这个类
        // 所以 this 就是 SceneTitle
        return new this(game)
    }
    draw() {

    }
    update() {

    }
}