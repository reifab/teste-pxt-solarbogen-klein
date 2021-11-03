input.onButtonPressed(Button.A, function () {
    sonnenbogen.disableSun()
})
input.onButtonPressed(Button.AB, function () {
    sonnenbogen.setBrightnessOfTheSun(100)
})
input.onButtonPressed(Button.B, function () {
    sonnenbogen.enableSun()
})
sonnenbogen.init(DigitalPin.P0, 20, 255)
sonnenbogen.moveSunAutomatically(32)
