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
        }
        .content {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 .5em 1em - .125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02);
            display: block;
            padding: 1.25rem;
        }
        .button {
            background-color: #fff;
            border-color: #dbdbdb;
            border-width: 1px;
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

    </style>
`

document.body.innerHTML += `
    <div class="popup">
        <div class="content">
            <div class="setmode">
                <button class="button is-rounded is-primary">Stack</button>
                <br/>
                <br/>
                <button class="button is-rounded is-info">Number</button>
            </div>
        </div>
    </div>
`
