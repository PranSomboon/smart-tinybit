function Dace () {
    while (true) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
            break;
        }
    }
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
    basic.pause(500)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.pause(5000)
}
input.onGesture(Gesture.Shake, function () {
    Dace()
})
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P16, DigitalPin.P15)
let strip = neopixel.create(DigitalPin.P12, 1, NeoPixelMode.RGB)
