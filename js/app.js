//Get result element
const resultText = document.getElementById("spanResult")

//Get buttons
const btnAC = document.getElementById("btnAC")
const btnChange = document.getElementById("btnChange")
const btnPercent = document.getElementById("btnPercent")
const btnDivision = document.getElementById("btnDivision")

const btnSeven = document.getElementById("btnSeven")
const btnEight = document.getElementById("btnEight")
const btnNine = document.getElementById("btnNine")
const btnMultiplication = document.getElementById("btnMultiplication")

const btnFour = document.getElementById("btnFour")
const btnFive = document.getElementById("btnFive")
const btnSix = document.getElementById("btnSix")
const btnSubtraction = document.getElementById("btnSubtraction")

const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")
const btnThree = document.getElementById("btnThree")
const btnAddition = document.getElementById("btnAddition")

const btnZero = document.getElementById("btnZero")
const btnPoint = document.getElementById("btnPoint")
const btnCalc = document.getElementById("btnCalc")

let result = "0"
let temp;

function clearResult() {
    console.log("clearResult")
}

function clickbtnOne() {
    addNumber("1")
}

function clickbtnTwo() {
    addNumber("2")
}

function clickbtnThree() {
    addNumber("3")
}

function clickbtnFour() {
    addNumber("4")
}

function clickbtnFive() {
    addNumber("5")
}

function clickbtnSix() {
    addNumber("6")
}

function clickbtnSeven() {
    addNumber("7")
}

function clickbtnEight() {
    addNumber("8")
}

function clickbtnNine() {
    addNumber("9")
}

function clickbtnZero() {
    addNumber("0")
}

function addNumber(Number) {
    if (result.length < 9) {
        if (result[0] == "0") {
            result = Number
            updateResultText()
        }
        else {
            result += Number
            updateResultText()
        }
    }
}

function updateResultText() {
    resultText.innerHTML = result
    if (result.length > 1 || result[0] != "0") {
        btnAC.innerHTML = "C"
    }
}

updateResultText()


btnAC.addEventListener("click", clearResult)
btnOne.addEventListener("click", clickbtnOne)
btnTwo.addEventListener("click", clickbtnTwo)
btnThree.addEventListener("click", clickbtnThree)
btnFour.addEventListener("click", clickbtnFour)
btnFive.addEventListener("click", clickbtnFive)
btnSix.addEventListener("click", clickbtnSix)
btnSeven.addEventListener("click", clickbtnSeven)
btnEight.addEventListener("click", clickbtnEight)
btnNine.addEventListener("click", clickbtnNine)
btnZero.addEventListener("click", clickbtnZero)
