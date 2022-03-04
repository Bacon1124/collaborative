controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    whac()
})
function whac () {
    splat = sprites.create(img`
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . b d d b . . . . . . . b b . 
        . b d d d b . . . . . . b d d b 
        . b d d b . . . . b b . b d d b 
        . b b b . . . . . b b . . b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b d d d d d d b b b . . 
        . b d c c c b b b b c c d d b . 
        b d d c b . . . . . b c c d d b 
        c d d b b . . . . . . b c d d c 
        c b d d d b b . . . . b d d c c 
        . c c b d d d d b . c c c c c c 
        . . . c c c c c c . . . . . . . 
        `, SpriteKind.Player)
    if (!(splat.overlapsWith(mole))) {
        splat.destroy()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
let splat: Sprite = null
let statusbar: StatusBarSprite = null
let mole: Sprite = null
let hammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
controller.moveSprite(hammer)
mole = sprites.create(img`
    . . c c c c . . 
    . c e e e e c . 
    c e e e e e e c 
    c e f e e f e c 
    c e e e e e e c 
    c e e 4 4 e e c 
    c e e 4 4 e e c 
    c e e e e e e c 
    `, SpriteKind.Enemy)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setColor(2, 1)
statusbar.attachToSprite(mole)
while (!(statusbar.value == 0)) {
    mole.setPosition(randint(1, 160), randint(80, 120))
}
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
