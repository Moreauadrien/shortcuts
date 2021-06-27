let numberOfRealRandom = 2

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
                font-family: Roboto-Medium,HelveticaNeue-Medium,Helvetica Neue,sans-serif-medium,Arial,sans-serif !important;
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

                    <br />
                    <br />

                    <div class="suits">
                        <div class="button" suitCode="s">Spades</div>
                        <div class="button" suitCode="h">Hearts</div>
                        <div class="button" suitCode="c">Clubs</div>
                        <div class="button" suitCode="d">Diamonds</div>
                    </div>

                    <br />
                    <br />

                    <div class="button validate" >Validate</div>
                </div>

                <div class="number-selector hidden">
                    <input type="tel" class="input" placeholder="Number you want to force">
                    <br><br>
                </div>
            </div>
        </div>
    `

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
                if (currentSuit != null) document.querySelector(`[suitCode=${currentSuit}]`).id = ''
                elem.id = 'suitSelected'
                currentSuit = elem.getAttribute('suitCode')
            } else {
                if (currentValue != null) document.querySelector(`[valueCode=${currentValue}]`).id = ''
                elem.id = 'valueSelected'
                currentValue = elem.getAttribute('valueCode')
            }
        })
    })
}


addClickEvent(document.querySelectorAll('.values > .button'), false)
addClickEvent(document.querySelectorAll('.suits > .button'), true)