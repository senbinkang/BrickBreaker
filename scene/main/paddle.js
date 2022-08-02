var Paddle = function (game) {
    var o = game.imageByName('paddle')
    // 上方 o 得到下方格式的对象
    o.x = 100
    o.y = 450
    o.speed = 15

    o.move = function (x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)
    }
    o.moveRight = function () {
        o.move(o.x + o.speed)
    }

    o.collide = function (b) {
        return rectIntersects(o, b) || rectIntersects(b, o)
    }

    return o
}
