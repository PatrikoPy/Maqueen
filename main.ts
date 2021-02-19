maqueen.IR_callbackUser(function (message) {
    if (message == 67 || message == 24) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    }
    if (message == 9 || message == 28) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 13) {
        speed = 255
    }
    if (message == 25) {
        speed = 125
    }
    if (message == 22) {
        speed = 25
    }
    if (message == 21) {
        speed = Math.constrain(speed + 25, 0, 255)
    }
    if (message == 7) {
        speed = Math.constrain(speed - 25, 0, 255)
    }
    if (message == 12) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed * 0.25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    }
    if (message == 94) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed * 0.25)
    }
    if (message == 66) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed * 0.25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    }
    if (message == 74) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed * 0.25)
    }
    if (message == 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    }
    if (message == 90) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    }
    if (message == 82) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    }
})
let speed = 0
speed = 100
basic.forever(function () {
	
})
