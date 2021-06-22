controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`forestBatAttackLeft`,
    100,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`level 2`)
forever(function () {
    scene.setBackgroundImage(assets.image`level 1`)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
})
