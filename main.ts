controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`level 2`)
forever(function () {
    scene.setBackgroundImage(assets.image`level 1`)
    mySprite = sprites.create(img`
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        ......................d......................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        .............................................................................
        `, SpriteKind.Player)
})
