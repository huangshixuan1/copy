function backbackback海道 () {
    pwm = 0
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        gogo宜得利()
    }
    if (receivedNumber == 2) {
        backbackback海道()
    }
    if (receivedNumber == 4) {
        left旅遊啪啪造()
    }
    if (receivedNumber == 6) {
        rightnow過年要破產()
    }
})
KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
    backbackback海道()
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    rightnow過年要破產()
})
function left旅遊啪啪造 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 30
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    pwm
    )
}
function rightnow過年要破產 () {
    pwm += 30
    if (pwm >= 255) {
        pwm = 255
    }
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    pwm - 30
    )
}
function gogo宜得利 () {
    pwm = 0
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    left旅遊啪啪造()
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
    gogo宜得利()
})
let pwm = 0
radio.setGroup(1)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 0) {
        radio.sendNumber(4)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 0) {
        radio.sendNumber(6)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) < 0) {
        radio.sendNumber(2)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 0) {
        radio.sendNumber(8)
    }
})
