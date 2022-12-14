var Ball = function (game) {
    var o = game.imageByName('ball')
    o.x = 140
    o.y = 434
    o.speedX = 5
    o.speedY = -5
    o.fired = false

    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        let height = game.canvas.height
        let width = game.canvas.width
        if (o.fired) {
            if (o.x < 0 || o.x >= width - o.w) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y >= height - o.h) {
                o.speedY *= -1
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.反弹 = function () {
        o.speedY *= -1
    }
    o.hasPoint = function (x, y) {
        var xIn = (x >= o.x && x<= (o.x + o.w))
        var yIn = (y >= o.y && y<= (o.y + o.h))
        return xIn && yIn
    }

    return o
}
