let numberOfRealRandom = 2

const stack = {
    "4c": 1, "2h": 2, "7d": 3, "3c": 4, "4h": 5,
    "6d": 6, "As": 7, "5h": 8, "9s": 9, "2s": 10,
    "Qh": 11, "3d": 12, "Qc": 13, "8h": 14, "6s": 15,
    "5s": 16, "9h": 17, "Kc": 18, "2d": 19, "Jh": 20,
    "3s": 21, "8s": 22, "6h": 23, "10c": 24, "5d": 25,
    "Kd": 26, "2c": 27, "3h": 28, "8d": 29, "5c": 30,
    "Ks": 31, "Jd": 32, "8c": 33, "10s": 34, "Kh": 35,
    "Jc": 36, "7s": 37, "10h": 38, "Ad": 39, "4s": 40,
    "7h": 41, "4d": 42, "Ac": 43, "9c": 44, "Js": 45,
    "Qd": 46, "7c": 47, "Qs": 48, "10d": 49, "6c": 50,
    "Ah": 51, "9d": 52
}

// Create stylesheet
document.head.innerHTML += `
    <style>
        .popup {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .4);
            text-align: center;
            position: fixed;
            top: 0;
            z-index: 10;
        }
        .content {
            position: absolute;
            width: 85%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.25rem;
        }
        .button {
            background-color: #fff;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: 4px;
            color: #363636;
            cursor: pointer;
            justify-content: center;
            padding-bottom: calc(.5em - 1px);
            padding-left: 1em;
            padding-right: 1em;
            padding-top: calc(.5em - 1px);
            text-align: center;
            white-space: nowrap;
        }
        .is-primary {
            background-color: #00d1b2;
            border-color: transparent;
            color: #fff;
        }
        .is-info {
            background-color: #3e8ed0;
            border-color: transparent;
            color: #fff;
        }
        .is-rounded {
            border-radius: 9999px;
            padding-left: calc(1em + .25em);
            padding-right: calc(1em + .25em);
        }
        .hidden {
            display: none;
        }
        .setmode{
            width: 80%;
            font-size: 16px;
        }
        .values {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            grid-gap: 10px;
        }
        .values > .button {
            font-size: 16px;
            background-color: #ebfffc;
            color: #00947e;
            border: 1px #00d1b2 solid;
        }
        .values > .button:last-child {
            grid-column: 2/4;
        }
        button {
            outline: 0;
        }
        .suits {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 10px;
        }
        .suits > .button {
            font-size: 16px;
            background-color: #e3ecfa;
            color: #2160c4;
            border: 1px #3273dc solid;
        }
        .validate {
            background-color: #3ec46d;
            color: white;
            font-size: 16px;
            width: 70%;
            margin: auto !important;
        }

        #valueSelected {
            background-color: #00d1b2;
            border: none;
            color: #fff;
        }
        #suitSelected {
            background-color: #485fc7;
            border: none;
            color: #fff;
        }
        .notification {
            font-size: 16px;
            background-color: #f14668;
            color: #fff;
            margin-bottom: 1.5rem;
            border-radius: 4px;
            position: relative;
            padding: 1.25rem 2.5rem 1.25rem 1.5rem;
            font-family: "Segoe UI";
        }
        .number-selector {
            width: 100%;
        }
        
        .input {
            -moz-appearance: none;
            -webkit-appearance: none;
            align-items: center;
            border: 1px solid transparent;
            border-radius: 4px;
            box-shadow: none;
            display: inline-flex;
            font-size: 1rem;
            height: 2.5em;
            justify-content: flex-start;
            line-height: 1.5;
            padding-bottom: calc(.5em - 1px);
            padding-left: calc(.75em - 1px);
            padding-right: calc(.75em - 1px);
            padding-top: calc(.5em - 1px);
            position: relative;
            vertical-align: top;
        }
        .input {
            border-color: #b5b5b5;
            outline: 0;
            box-shadow: inset 0 .0625em .125em rgba(10,10,10,.05);
            width: 80%;
            background-color: #fff;
            border-radius: 4px;
            color: #363636;
        }
        
    </style>
`
// Create popup
document.body.innerHTML += `
    <div class="popup">
        <div class="content">
            <div class="setmode">
                <div class="button is-rounded is-primary">Stack</div>
                <br/>
                <br/>
                <div class="button is-rounded is-info">Number</div>
            </div>

            <div class="stack-selector hidden">
                <div class="values">
                    <div class="button" valueCode="A">Ace</div>
                    <div class="button" valueCode="2">Two</div>
                    <div class="button" valueCode="3">Three</div>
                    <div class="button" valueCode="4">Four</div>
                    <div class="button" valueCode="5">Five</div>
                    <div class="button" valueCode="6">Six</div>
                    <div class="button" valueCode="7">Seven</div>
                    <div class="button" valueCode="8">Eight</div>
                    <div class="button" valueCode="9">Nine</div>
                    <div class="button" valueCode="10">Ten</div>
                    <div class="button" valueCode="J">Jack</div>
                    <div class="button" valueCode="Q">Queen</div>
                    <div class="button" valueCode="K">King</div>
                </div>

                <br/>
                <br/>

                <div class="suits">
                    <div class="button" suitCode="s">Spades</div>
                    <div class="button" suitCode="h">Hearts</div>
                    <div class="button" suitCode="c">Clubs</div>
                    <div class="button" suitCode="d">Diamonds</div>
                </div>

                <br/>
                <br/>

                <div class="notification hidden">
                    You must choose a value and a suit
                </div>

                <div class="button validate">Validate</div>
            </div>

            <div class="number-selector hidden">
                <input type="tel" class="input" placeholder="Number you want to force">

                <br/>
                <br/>

                <div class="notification hidden">
                    You must enter a valid number
                </div>

                <div class="button validate">Validate</div>
            </div>
        </div>
    </div>
`


const resetStyle = () => document.head.removeChild(document.head.lastChild)

const setmodeDiv = document.querySelector('.setmode')
setmodeDiv.querySelectorAll('.button').forEach(elem => {
    elem.addEventListener('click', () => {
        setmodeDiv.classList.add('hidden')
        document.querySelector(`.${elem.innerText.toLowerCase()}-selector`).classList.remove("hidden")
    })
})

let currentValue
let currentSuit
const addClickEvent = (elements, isSuit) => {
    elements.forEach(elem => {
        elem.addEventListener('click', () => {
            if (isSuit) {
                if (currentSuit != null) document.querySelector('#suitSelected').id = ''
                elem.id = 'suitSelected'
                currentSuit = elem.getAttribute('suitCode')
            } else {
                if (currentValue != null) document.querySelector('#valueSelected').id = ''
                elem.id = 'valueSelected'
                currentValue = elem.getAttribute('valueCode')
            }
        })
    })
}

let forceNumber

addClickEvent(document.querySelectorAll('.values > .button'), false)
addClickEvent(document.querySelectorAll('.suits > .button'), true)

document.querySelector('.stack-selector > .validate').addEventListener('click', () => {
    if (currentValue == null || currentSuit == null) {
        document.querySelector('.stack-selector > .notification').classList.remove('hidden')
    } else {
        document.querySelector('.popup').classList.add('hidden')
        forceNumber = stack[currentValue + currentSuit]
    }
})

document.querySelector('.number-selector > .validate').addEventListener('click', () => {
    if (isNaN(document.querySelector('.number-selector > .input').value)) {
        document.querySelector('.number-selector > .notification').classList.remove('hidden')
    } else {
        document.querySelector('.popup').classList.add('hidden')
        forceNumber = parseInt(document.querySelector('.number-selector > .input').value)
    }
})

const button = document.querySelector("#ZdzlKb")

const getBoundaries = () => {
    const getBoundary = (bound) => parseInt(document.querySelector(`.gws-csf-randomnumber__${bound}Val`).value)
    return { min: getBoundary('min'), max: getBoundary('max') }
}



const disableButton = () => {
    for (let i = 0; button.attributes.length > 0; i++) button.removeAttribute(button.attributes[0].name)
    button.setAttribute("style", "cursor: pointer;height: 48px;width: 100%;text-align: center;position: relative;font-size: 14px;")
}

disableButton()



const displayNumber = (number) => {
    document.querySelector(".gws-csf-randomnumber__result").innerText = number
}

const getCurrentNumber = () => {
    return parseInt(document.querySelector(".gws-csf-randomnumber__result").innerText)
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const distanceBetweenNumber = (a, b) => {
    return Math.abs(a - b)
}

const goToNumber = (number) => {
    const goal = number
    const currentNumber = getCurrentNumber()

    let path = []



    let distance = distanceBetweenNumber(goal, currentNumber)
    let numberOfStep = Math.min(30, distance)

    for (let i = 1; i <= numberOfStep; i++) {
        path = [...path, currentNumber + Math.round(i * distance / numberOfStep) * (currentNumber > goal ? -1 : 1)]
    }

    let intervalTime = Math.max(17, Math.min(500 / numberOfStep, 50))
    const interval = setInterval(() => {
        if (path.length == 0) {
            displayNumber(goal)
            clearInterval(interval)
            return
        }
        let number = path.shift()
        displayNumber(number)
    }, intervalTime)
}

let alreadyForced = false

button.addEventListener('click', () => {
    if (numberOfRealRandom <= 0 && alreadyForced == false) {
        alreadyForced = true
        goToNumber(forceNumber)
    } else {
        numberOfRealRandom--
        let { min, max } = getBoundaries()
        let goal = generateRandomNumber(min, max)

        if (alreadyForced == false && distanceBetweenNumber(min, max) > 10) {
            let currentNumber = getCurrentNumber()
            while (goal == forceNumber || goal == currentNumber)
                goal = generateRandomNumber(min, max)
        }

        goToNumber(goal)
    }
})

completion()