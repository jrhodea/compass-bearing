input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() < 45) {
        basic.showString("N")
    } else if (input.compassHeading() < 135) {
        basic.showString("E")
    } else if (input.compassHeading() < 220) {
        basic.showString("S")
    } else if (input.compassHeading() < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
