input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    1023
    )
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
