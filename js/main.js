// DOM Manipulator file
document.addEventListener('DOMContentLoaded', init)

function init () {
  var basic_cal = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)
  function onKeyUp (event) {
    // console.log(event)
    if (checkKeyCode(event.keyCode)) {
      // check if we're clicking enter
      if (event.keyCode !== 13 && event.keyCode !== 8) {
        display.value += event.key
      } else {
        var displayValue = display.value
        whichFunction(displayValue)
      }
    } if (event.keyCode === 67) {
      clearScreen()
    } if (event.keyCode === 8) {
      deleteNum()
    }
  }
  function clearScreen () {
    display.value = ''
  }
  function deleteNum () {
    var number = display.value.substr(0, display.value.length - 1)
    display.value = (number)
  }
  function whichFunction (displayValue) {
    if (displayValue.includes('+')) {
      calculateAdd(displayValue)
    } else if (displayValue.includes('-')) {
      calculateMinus(displayValue)
    } else if (displayValue.includes('/')) {
      calculateDivide(displayValue)
    } else if (displayValue.includes('*')) {
      calculateMultiply(displayValue)
    }
  }

  function calculateAdd (str) {
    var splitStr = str.split('+')
    var firstNum = parseInt(splitStr[0])
    var secondtNum = parseInt(splitStr[1])
    var result = basic_cal.add(firstNum, secondtNum)

    displayResult(result)
  }
  function calculateMinus (str) {
    var splitStr = str.split('-')
    var firstNum = parseInt(splitStr[0])
    var secondtNum = parseInt(splitStr[1])
    var result = basic_cal.minus(firstNum, secondtNum)

    displayResult(result)
  }
  function calculateDivide (str) {
    var splitStr = str.split('/')
    var firstNum = parseInt(splitStr[0])
    var secondtNum = parseInt(splitStr[1])
    var result = basic_cal.division(firstNum, secondtNum)

    displayResult(result)
  }
  function calculateMultiply (str) {
    var splitStr = str.split('*')
    var firstNum = parseInt(splitStr[0])
    var secondtNum = parseInt(splitStr[1])
    var result = basic_cal.multiply(firstNum, secondtNum)

    displayResult(result)
  }

  function displayResult (str) {
    display.value = str
  }

// if key event is 1 to 0
// extend this to '+' symbol
// extend this to 'enter' symbol
  function checkKeyCode (keycode) {
    if (keycode >= 48 && keycode <= 57) {
      return true
    }

    if (keycode === 187 || keycode === 13 || keycode === 191 || keycode === 189 || keycode === 67 || keycode === 8) {
      return true
    }

    return false
  }
}
