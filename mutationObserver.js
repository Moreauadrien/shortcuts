const numberDisplay = document.querySelector(".gws-csf-randomnumber__result")

let lastStepTime = Date.now()
let numberOfStep = 0

const observer = new MutationObserver(() => {
    if (lastStepTime + 1000 < Date.now()) {
        lastStepTime = Date.now()
        numberOfStep = 0
    }

    console.group(`step: ${numberOfStep++}`)

    console.log(`time: ${Date.now() - lastStepTime}ms`)
    console.log(`number: ${numberDisplay.innerHTML}`)

    console.groupEnd()
})

observer.observe(numberDisplay, { childList: true })