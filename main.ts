namespace SpriteKind {
    export const 厨师 = SpriteKind.create()
    export const 蘑菇类型 = SpriteKind.create()
    export const 鸡腿类型 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.鸡腿类型, function (sprite, otherSprite) {
    otherSprite.destroy()
    鸡腿 += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.厨师, function (sprite, otherSprite) {
    if (蘑菇 < 3) {
        otherSprite.sayText("蘑菇还不够呢", 1000, false)
    } else {
        if (鸡腿 == 1) {
            otherSprite.sayText("哇，有肉!", 1000, true)
            pause(1000)
            game.splash("得到了小鸡炖蘑菇")
        } else {
            otherSprite.sayText("看我的手艺", 1000, true)
            pause(1000)
            game.splash("得到了没有味道的蘑菇汤")
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.蘑菇类型, function (sprite, otherSprite) {
    otherSprite.destroy()
    蘑菇 += 1
})
let 蘑菇 = 0
let 鸡腿 = 0
let mushroomSprite: Sprite = null
tiles.setTilemap(tilemap`级别1`)
let xiaoming = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(xiaoming, tiles.getTileLocation(8, 5))
let chefSprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.厨师)
scene.cameraFollowSprite(chefSprite)
tiles.placeOnTile(chefSprite, tiles.getTileLocation(7, 2))
chefSprite.sayText("我们来野餐吧", 1000, true)
pause(1000)
chefSprite.sayText("你去找点吃的", 1000, true)
pause(1000)
controller.moveSprite(xiaoming)
scene.cameraFollowSprite(xiaoming)
for (let index = 0; index < 3; index++) {
    mushroomSprite = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c c 1 1 1 3 3 3 3 1 1 3 c c . 
        c c d 1 1 1 3 3 3 3 3 3 3 b c c 
        c b d d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        c b b b b d d 1 1 3 b d d d b c 
        . c b b b b d d b b b b b b c . 
        . . c c b b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . . b 1 1 b . . . . . . 
        . . . . . . b 1 1 b b . . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, SpriteKind.蘑菇类型)
    tiles.placeOnRandomTile(mushroomSprite, sprites.castle.tilePath5)
}
mushroomSprite = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.鸡腿类型)
tiles.placeOnRandomTile(mushroomSprite, sprites.castle.tileGrass1)
