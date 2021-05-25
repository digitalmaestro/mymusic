let twinkleSong: number[] = []
let marrySong: number[] = []
function twinkleSongNotes () {
    twinkleSong = [262, 262, 392, 392, 440, 440, 392, 0, 349, 349, 330, 330, 294, 294, 262, 0, 392, 392, 349, 349, 330, 330, 262, 0, 392, 392, 349, 349, 330, 330, 262, 0, 262, 262, 392, 392, 440, 440, 392, 0, 349, 349, 330, 330, 294, 294, 262]
}
function marySongNotes () {
    marrySong = [330, 294, 262, 294, 330, 330, 330, 294, 294, 294, 330, 392, 392, 330, 294, 262, 294, 330, 330, 330, 330, 294, 294, 330, 294, 262]
}
// pressing button A will play Mary had a little lamb
input.onButtonPressed(Button.A, function () {
    marySongNotes()
    for (let index = 0; index <= marrySong.length - 1; index++) {
        music.playTone(marrySong[index], music.beat(BeatFraction.Whole))
    }
})
// pressing button A will play Mary had a little lamb
input.onButtonPressed(Button.B, function () {
    twinkleSongNotes()
    for (let index2 = 0; index2 <= twinkleSong.length - 1; index2++) {
        music.playTone(twinkleSong[index2], music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
