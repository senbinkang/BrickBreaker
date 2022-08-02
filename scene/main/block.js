var Block = function (game, position) {
    // position 是 [0, 0] 格式
    // 参数要写全，不然别人不懂什么意思
    // 但用的时候要简写
    var p = position
    let imgName = p[2] ? 'block2' : 'block'
    var o = game.imageByName(imgName)
    o.x = p[0]
    o.y = p[1]
    o.alive = true
    // 给砖块增加性命
    o.lifes = p[2] || 1

    o.kill = function () {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }

    return o
}
