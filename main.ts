enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walk_left,
    action,
    action_earthquake,
    idle,
    idle_game
}
enum JacDacMessage {
    hello = 49337,
    message1 = 49434
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
e e e e e e e e e e e e e e e e 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
e e e e e e e e e e e e e e e e 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
e e e e e e e e e e e e e e e e 
`
}
jacdac.onReceivedMessage(JacDacMessage.hello, function () {
    mySprite22 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite22.setPosition(70, 98)
})
function direct (num: number, mySprite2: Sprite) {
    sprites.setDataNumber(mySprite2, "direct", num)
}
function moveable (mySprite2: Sprite, bool: boolean) {
    sprites.setDataBoolean(mySprite2, "moveable", bool)
}
function moveset (mySprite2: Sprite, num: number) {
    sprites.setDataNumber(mySprite2, "moveset", num)
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        sprites.setDataBoolean(value2, "moveable", false)
        animation.setAction(value2, ActionKind.action)
        pause(1000)
        sprites.setDataBoolean(value2, "moveable", true)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hello") {
        mySprite22 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`, SpriteKind.Player)
        mySprite22.setPosition(70, 98)
    } else if (receivedString == "hangouts") {
        for (let value3 of sprites.allOfKind(SpriteKind.Player)) {
            if (value3.x > 80 && value3.x < 111) {
                if (value3.vx == 0) {
                    if (Math.percentChance(15)) {
                        value3.destroy()
                        radio.sendString("hello")
                    }
                }
            }
        }
    }
})
controller.onGesture(ControllerGesture.Shake, function () {
    for (let value4 of sprites.allOfKind(SpriteKind.Player)) {
        sprites.setDataBoolean(value4, "moveable", false)
        animation.setAction(mySprite2, ActionKind.action_earthquake)
        pause(5000)
        sprites.setDataBoolean(value4, "moveable", true)
    }
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    if (start == 1) {
        direct(1, sprite)
        moveable(sprite, true)
        moveset(sprite, 1)
        animation.attachAnimation(sprite, anim_walk_right)
        animation.attachAnimation(sprite, anim_walk_left)
        animation.attachAnimation(sprite, anim_action_greet)
        animation.attachAnimation(sprite, anim_idle_sleep)
        animation.attachAnimation(sprite, anim_idle_gameboy)
    }
})
let mySprite22: Sprite = null
let start = 0
let anim_idle_gameboy: animation.Animation = null
let anim_idle_sleep: animation.Animation = null
let anim_action_greet: animation.Animation = null
let anim_walk_left: animation.Animation = null
let anim_walk_right: animation.Animation = null
let mySprite2: Sprite = null
if (controller.lightLevel() < 20) {
    scene.setBackgroundColor(15)
} else {
    scene.setBackgroundColor(9)
}
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . 1 . . . . . . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 b b b b b b b b b b b b b b b b b b b b b b b b b b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . 1 . . . 1 . . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . 1 . . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . 1 . . . 1 . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . 1 . . . . e 4 . . . . . . 1 . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . 1 . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . 1 . . . . . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . 1 . e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . 1 . . 1 e 4 . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 9 9 1 1 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e 1 . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 8 9 9 1 1 1 9 9 8 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . 1 . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 9 9 1 1 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . 1 . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 8 9 9 1 1 1 9 9 8 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e 1 . . 1 . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 9 9 1 1 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . 1 . . . . . . 1 . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 8 9 9 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . 1 . . . . . . . . 4 e . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 9 9 1 1 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . 1 . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 8 9 9 1 1 1 9 9 8 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . . 1 . . 1 . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 9 9 1 1 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . . . . . . 1 . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 8 9 9 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . . . . . . . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d d 8 8 9 9 1 1 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . 1 . . . 1 . . . . . 4 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 8 8 8 8 9 9 1 1 1 9 9 8 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . . . . . . 1 . . . . 4 e d d d d d d d d d d 6 6 d d d d d d d d d d d d d d d d d d d d d d d c e e e 4 c c c c c c c c c c c c c c c c c c c c c c c c c c d e e e c d d d d 8 8 8 9 9 1 1 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 . . . . . . . . . . . . . 4 e . . . . . . . . . 1 . . . 4 e d d d d d d d d d d 6 6 d d d 2 2 2 2 d d d d d d d d d d d d d d d d c e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e c d d d d d 8 8 8 9 9 1 1 1 9 9 8 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e d d d d d d c c c c 6 6 d d d 2 4 4 2 d d d d d 5 5 d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d 8 8 9 9 1 1 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d d d d c a a c 6 6 4 4 4 2 4 4 2 b b b b b 5 5 d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d d 8 8 9 9 1 1 1 9 9 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 8 8 8 d c a a 3 6 6 4 7 4 2 4 4 2 c 6 6 6 c 5 5 d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 9 9 8 d c a 3 3 6 6 4 7 4 2 4 4 2 c 6 6 6 c 5 5 d d d d d d d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e 5 5 1 e e e c d d d d d d d d d d 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 9 9 8 d c 3 3 3 6 6 4 7 4 2 4 4 2 c 6 6 6 c 5 5 d d d d d d d d d c e e e d d d d d d d d d d d d d d d d d d d d d d d d 5 5 5 5 1 e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 9 9 8 d 3 3 3 c 6 6 4 7 4 2 4 4 2 b f c c b 5 5 d d d d d d d d d c e e e 4 b b b b b b b b b b b b b b b b b b b b b b b 4 5 5 5 5 e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 9 9 8 3 3 3 a c 6 6 4 7 4 2 4 4 2 f f f b 2 5 5 d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e 4 5 5 5 5 e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 9 9 8 3 3 a a c 6 6 4 7 4 2 4 4 2 b f b 2 b 5 5 d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e 4 5 5 e e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 8 8 8 3 c a a c 6 6 4 4 4 2 2 2 2 b b b b d 5 5 d d d d d d d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 1 b d d d d d d 1 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d d d d d d d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d 8 8 d 2 2 d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d b 8 d b 2 d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e 4 e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e e e e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d c c d c c d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e 4 e c c c c c c c c c c e d e e 4 e c c c c c c c c c c e d e e 4 e e e e e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e e e e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d d d d d d d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e 4 e c e e e 5 4 e e e c e d e e 4 e c e e e 5 4 e e e c e d e e 4 e e c c c c c c c c c c c c e e d e e 4 e e c c c c c c c c c c c c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d d d d 1 1 b d d d d d d d d 1 1 1 b b b d d d d d d d d d d d d d d d d d d d d d d d d d 
c e e 4 e c c c c c c c c c c e d e e 4 e c c c c c c c c c c e d e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d 
c e e 4 e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e d e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e c 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 3 3 3 3 3 3 3 c d d d d d d d d d d d d d d d d d d d 
c e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e c e e e e e e e e e e e e e e e e e e e e c f f f f f f f c d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e 1 5 e e e e c e e d e e 4 e e c e e e e 1 5 e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e c e e e e e e e e e e e e e e e e e e c f f f f f f f c d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e 5 4 e e e e c e e d e e 4 e e c e e e e 5 4 e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c c c c c c c c c c c c c c c c c c c c c c c c c c d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d f f f f d d f f f f d f f f f d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d c c c c d d f c c f d c c c c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c e e e e e e e e e e c e e d e e 4 e e c e e e e e e e e e e c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e c c c c c c c c c c c c e e d e e 4 e e c c c c c c c c c c c c e e d e c d d d c e e e 4 c e e e e e e e e e e e e e e e e e e e e e e e e b d e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e e e e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e e e e e d e c d d d c e e e 4 c c c c c c c c c c c c c c c c c c c c c c c c c c d e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 e e e e e e e e e e e e e e e e d e e 4 e e e e e e e e e e e e e e e e d e c d d d c e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e c d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d d d c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e c d c e e c d d f c c f d c e e c d d d f c c f d d d d d d d d d d d d d d d d d d d d d d d 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d d c c d d d d f f d d d c c d d d d d f f d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`, SpriteKind.Player)
anim_walk_right = animation.createAnimation(ActionKind.Walking, 250)
anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . f 9 f 9 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 1 1 1 f f . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 1 1 1 f f . . . . . . . . . . . . 
. . . . . . . . . . . f f 9 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 1 f f 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 9 f 1 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . . 
`)
anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 f 1 f 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 f 1 f 1 1 f . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . . . . f 9 9 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . f 1 f 9 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . . . . . f 1 f f 9 1 1 1 1 f f . . . . . . . . . . . 
. . . . . . . . . . . f f f 9 1 1 1 f 9 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f 1 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f f . . . . f f . . . . . . . . . . . 
`)
anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . f 9 f 9 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 1 1 1 f f . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 1 1 1 f f . . . . . . . . . . . . 
. . . . . . . . . . . f f 9 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 1 f f 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 9 f 1 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . . 
`)
anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 f 1 f 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 f 1 f 1 1 f . . . . . . . . . 
. . . . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 1 1 f . . . . . . . . . 
. . . . . . . . . . . . f 9 9 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . f 1 f 9 1 1 1 1 f 1 f . . . . . . . . . . 
. . . . . . . . . . f 1 f f 9 f f 1 1 f f f . . . . . . . . . . 
. . . . . . . . . . . f . f f 9 9 f 1 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 1 f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite2, anim_walk_right)
anim_walk_left = animation.createAnimation(ActionKind.walk_left, 250)
anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 f 9 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . 
`)
anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f f 1 f . . . . . . . . . 
. . . . . . . . . . . f 9 9 f 1 1 1 9 f f f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . f f . . . . f f . . . . . . . . . . . . 
`)
anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 f 9 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . 
`)
anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . f f f 1 1 f f 9 f f . f . . . . . . . . . 
. . . . . . . . . . . . . f 1 f 9 9 f f . f . . . . . . . . . . 
. . . . . . . . . . . . . . f f 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite2, anim_walk_left)
anim_action_greet = animation.createAnimation(ActionKind.action, 200)
anim_action_greet.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . f f . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . f 1 1 9 f . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . f f f . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_action_greet.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . . . f f . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . f 1 1 9 f . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . f f f . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite2, anim_action_greet)
let anim_action_earthquake = animation.createAnimation(ActionKind.action_earthquake, 100)
for (let index = 0; index < 16; index++) {
    anim_action_earthquake.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . 
. . . . . . . . . . . . f 1 f 1 1 1 f 1 1 9 f . . . . . . . . . 
. . . . . . . . . . . . f 1 1 f 1 f 1 1 1 9 f . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 1 9 f . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f f . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 f f 1 1 9 9 f 1 f . . . . . . . 
. . . . . . . . . . . . f 1 1 1 f f 1 9 9 f 1 f . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f f f f . . . . . . . . . 
. . . . . . . . . . f 1 1 1 f 1 1 1 1 9 f f . . . . . . . . . . 
. . . . . . . . . . . f f f f 1 1 1 1 9 f . . . . . . . . . . . 
. . . . . . . . . . . . . . f 1 f f 1 9 f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . 
`)
    anim_action_earthquake.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 9 9 1 1 1 1 1 f 1 f . . . . . . . . . . . . 
. . . . . . . . . f 9 1 f 1 1 1 f 1 1 f . . . . . . . . . . . . 
. . . . . . . . . f 9 1 1 f 1 1 1 f 1 f . . . . . . . . . . . . 
. . . . . . . . . f 9 1 f 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . f 9 1 1 f f 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 f f 1 1 1 f f f . . . . . . . . . . . 
. . . . . . . . . f 1 f f f f f f f f f 1 f . . . . . . . . . . 
. . . . . . . . f 1 f . f 1 1 1 1 9 f 1 f 1 f . . . . . . . . . 
. . . . . . . . . f . . f 1 1 1 1 9 f f . f . . . . . . . . . . 
. . . . . . . . . . . . f 1 f f f 9 f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . 
`)
}
animation.attachAnimation(mySprite2, anim_action_earthquake)
anim_idle_sleep = animation.createAnimation(ActionKind.idle, 200)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 f f 1 f f 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 f f 1 f f 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
for (let index = 0; index < 64; index++) {
    for (let index = 0; index < 4; index++) {
        anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . f f f f f f f . . . 2 4 4 4 2 . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . 2 2 2 4 2 . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . 2 4 2 . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . 2 4 4 4 2 . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f 2 2 2 2 2 2 . . . . 
. . . . . . . . . . f 1 f f 1 f f 1 1 1 9 f 4 2 . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f 2 2 . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
    }
    for (let index = 0; index < 4; index++) {
        anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . 2 2 2 2 . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . 2 4 4 2 . . . . . 
. . . . . . . . . . f 1 f f 1 f f 1 1 1 9 f . 2 2 4 2 . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . 2 2 2 2 . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
    }
}
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
anim_idle_sleep.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite2, anim_idle_sleep)
anim_idle_gameboy = animation.createAnimation(ActionKind.idle_game, 5000)
anim_idle_gameboy.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . f f f f f f 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . f b b b c f 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . f f b f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . f 1 f 9 1 1 f 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . f 1 f 9 1 1 f 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . f f f 9 1 f f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . f f f f f f f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite2, anim_idle_gameboy)
mySprite2.setPosition(70, 98)
pause(1000)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 f 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 f 1 f 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(700)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . f f . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . f 1 1 9 f . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . f f f . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(200)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . . . f f . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . f 1 1 9 f . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . f f f . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(200)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . f f . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . f 1 1 9 f . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . f f f . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(200)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . . . f f . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . f 1 9 f . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . f 1 1 9 f . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . f f f . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(200)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 f 1 1 1 f 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 f 1 f 9 f . . . f f . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . f 1 9 f . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . f 1 1 9 f . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . f f f . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
pause(200)
mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
start = 1
for (let value5 of sprites.allOfKind(SpriteKind.Player)) {
    direct(1, value5)
    moveable(value5, true)
    moveset(value5, 1)
}
game.onUpdate(function () {
    if (controller.lightLevel() < 20) {
        scene.setBackgroundColor(15)
    } else {
        scene.setBackgroundColor(9)
    }
    for (let value6 of sprites.allOfKind(SpriteKind.Player)) {
        if (value6.vx > 0) {
            sprites.setDataNumber(value6, "direct", 1)
        }
        if (value6.vx < 0) {
            sprites.setDataNumber(value6, "direct", 0)
        }
        if (sprites.readDataBoolean(value6, "moveable") == true) {
            if (value6.vx != 0) {
                if (sprites.readDataNumber(value6, "direct") == 1) {
                    animation.setAction(value6, ActionKind.Walking)
                } else {
                    animation.setAction(value6, ActionKind.walk_left)
                }
            } else {
                if (sprites.readDataNumber(value6, "direct") == 1) {
                    value6.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 f . . . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 f 1 f 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 1 1 1 1 1 f . . . . . . . . . . 
. . . . . . . . . . . f 9 9 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . f 9 f 9 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 1 1 1 f f . . . . . . . . . . . . 
. . . . . . . . . . f 1 f 9 1 f f 1 f f . . . . . . . . . . . . 
. . . . . . . . . . . f f 9 f . f 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f . . f f . . . . . . . . . . . . . . 
`)
                } else {
                    value6.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 f 1 f 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 1 9 f . . . . . . . . . . 
. . . . . . . . . . f 1 1 1 1 1 1 1 1 9 9 f . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 1 9 9 f . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 1 1 1 9 f 9 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 1 1 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . f f 1 f f 1 9 f 1 f . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f . f 9 f f . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . f f . . . . . . . . . . . . 
`)
                }
            }
        } else {
            value6.vx = 0
        }
    }
    radio.sendString("hangouts")
    jacdac.sendMessage(JacDacMessage.message1)
})
forever(function () {
    pause(30000)
    for (let value8 of sprites.allOfKind(SpriteKind.Player)) {
        if (sprites.readDataBoolean(value8, "moveable") == true) {
            if (Math.percentChance(25)) {
                if (Math.percentChance(50)) {
                    sprites.setDataBoolean(value8, "moveable", false)
                    animation.setAction(value8, ActionKind.idle)
                    pause(20000)
                    sprites.setDataBoolean(value8, "moveable", true)
                } else {
                    sprites.setDataBoolean(value8, "moveable", false)
                    animation.setAction(value8, ActionKind.idle_game)
                    pause(10000)
                    sprites.setDataBoolean(value8, "moveable", true)
                }
            }
        }
    }
})
forever(function () {
    pause(1000)
    for (let value7 of sprites.allOfKind(SpriteKind.Player)) {
        if (sprites.readDataBoolean(value7, "moveable") == true) {
            sprites.setDataNumber(value7, "moveset", randint(0, 2))
            if (sprites.readDataNumber(value7, "moveset") == 1) {
                value7.vx = 25
            }
            if (sprites.readDataNumber(value7, "moveset") == 2) {
                value7.vx = -25
            }
            pause(randint(100, 2000))
            value7.vx = 0
        }
    }
})
