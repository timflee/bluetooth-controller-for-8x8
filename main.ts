input.onButtonPressed(Button.A, function () {
    if (currentMode == 0) {
        radio.sendString("smile")
    } else {
        if (currentMode == 1) {
            currentBrightness_ = Math.max(currentBrightness_ - 20, 0)
            radio.sendValue("bright", currentBrightness_)
        } else {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (currentMode == 0) {
        radio.sendString("clear")
    } else {
        if (currentMode == 1) {
            currentBrightness_ = defaultBrightness_
            radio.sendValue("bright", currentBrightness_)
        } else {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (currentMode == 0) {
        radio.sendString("sad")
    } else {
        if (currentMode == 1) {
            currentBrightness_ = Math.min(currentBrightness_ + 20, 100)
            radio.sendValue("bright", currentBrightness_)
        } else {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    currentMode = (currentMode + 1) % 2
    basic.showNumber(currentMode)
})
let currentBrightness_ = 0
let defaultBrightness_ = 0
let currentMode = 0
radio.setGroup(1)
let modeList = ["Face", "Brightness"]
currentMode = 0
defaultBrightness_ = 20
currentBrightness_ = defaultBrightness_
radio.sendValue("bright", currentBrightness_)
basic.showNumber(currentMode)
basic.forever(function () {
	
})
