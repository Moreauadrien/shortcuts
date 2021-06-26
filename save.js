let realRandom = 2, forceNumber; document.head.innerHTML += "<style>
    .popup {
    width: 100 %
    height: 100 %
    background - color: rgba(0, 0, 0, .4)
    text - align: center
    position: fixed
    top: 0
    z - index: 10
}

  .popup >.content {
    position: absolute
    width: 95 %
    top: 50 %
    left: 50 %
    transform: translate(-50 %, -50 %)
}

  .values {
    display: grid
    grid - template - columns: repeat(4, 1fr)
    grid - gap: 10px
}

  .values >.last {
    grid - column - start: 2
    grid - column - end: 4
}

  .suits {
    display: grid
    grid - template - columns: repeat(2, 1fr)
    grid - gap: 10px
}

  .validate {
    width: 75 %
  }

  .setmode >.button {
    width: 75 %
  }

  .is - hidden {
    display: none!important
}
</style > ",document.head.innerHTML+='<style>
/*! bulma.io v0.9.1 | MIT License | github.com/jgthms/bulma */
@-webkit - keyframes spinAround {
    from {
        transform: rotate(0)
    }

    to {
        transform: rotate(359deg)
    }
}

@keyframes spinAround {
    from {
        transform: rotate(0)
    }

    to {
        transform: rotate(359deg)
    }
}

  .button,
  .delete {
    -webkit - touch - callout: none;
    -webkit - user - select: none;
    -moz - user - select: none;
    -ms - user - select: none
    user - select: none
}

  .box: not(: last - child),
  .content: not(: last - child),
  .notification: not(: last - child),
  .title: not(: last - child) {
    margin - bottom: 1.5rem
}

  .delete {
    - moz - appearance: none;
-webkit - appearance: none
background - color: rgba(10, 10, 10, .2)
border: none
border - radius: 290486px
cursor: pointer
pointer - events: auto
display: inline - block
flex - grow: 0
flex - shrink: 0
font - size: 0
height: 20px
max - height: 20px
max - width: 20px
min - height: 20px
min - width: 20px
outline: 0
position: relative
vertical - align: top
width: 20px
  }

  .delete:: after,
  .delete:: before {
    background - color: #fff
    content: ""
    display: block
    left: 50 %
    position: absolute
    top: 50 %
    transform: translateX(-50 %) translateY(-50 %) rotate(45deg)
    transform - origin: center center
}

  .delete:: before {
    height: 2px
    width: 50 %
  }

  .delete:: after {
    height: 50 %
    width: 2px
}

  .delete: focus,
  .delete: hover {
    background - color: rgba(10, 10, 10, .3)
}

  .delete: active {
    background - color: rgba(10, 10, 10, .4)
}

  .button,
  .input,
  .select select {
    -moz - appearance: none;
    -webkit - appearance: none
    align - items: center
    border: 1px solid transparent
    border - radius: 4px
    box - shadow: none
    display: inline - flex
    font - size: 1rem
    height: 2.5em
    justify - content: flex - start
    line - height: 1.5
    padding - bottom: calc(.5em - 1px)
    padding - left: calc(.75em - 1px)
    padding - right: calc(.75em - 1px)
    padding - top: calc(.5em - 1px)
    position: relative
    vertical - align: top
}

  .button: active,
  .button: focus,
  .input: active,
  .input: focus,
  .select select: active,
  .select select: focus {
    outline: 0
}

  .button[disabled],
  .input[disabled],
  .select select[disabled] {
    cursor: not - allowed
}

/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    html {
    margin: 0
    padding: 0
}

h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font - size: 100 %
    font - weight: 400
}

button,
    input,
    select {
    margin: 0
}

html {
    box - sizing: border - box
}

  *,
  :: after,
  :: before {
    box - sizing: inherit
}

html {
    background - color: #fff
    font - size: 16px;
    -moz - osx - font - smoothing: grayscale;
    -webkit - font - smoothing: antialiased
    min - width: 300px
    overflow - x: hidden
    overflow - y: scroll
    text - rendering: optimizeLegibility;
    -webkit - text - size - adjust: 100 %;
    -moz - text - size - adjust: 100 %;
    -ms - text - size - adjust: 100 %
    text - size - adjust: 100 %
  }

body,
    button,
    input,
    select {
    font - family: BlinkMacSystemFont, -apple - system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans - serif
}

body {
    color: #4a4a4a
    font - size: 1em
    font - weight: 400
    line - height: 1.5
}

a {
    color: #3273dc
    cursor: pointer
    text - decoration: none
}

a: hover {
    color: #363636
}

input[type = checkbox],
    input[type = radio] {
    vertical - align: baseline
}

  .box {
    background - color: #fff
    border - radius: 6px
    box - shadow: 0 .5em 1em - .125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02)
    color: #4a4a4a
    display: block
    padding: 1.25rem
}

a.box: focus,
    a.box: hover {
    box - shadow: 0 .5em 1em - .125em rgba(10, 10, 10, .1), 0 0 0 1px #3273dc
}

a.box: active {
    box - shadow: inset 0 1px 2px rgba(10, 10, 10, .2), 0 0 0 1px #3273dc
}

  .button {
    background - color: #fff
    border - color: #dbdbdb
    border - width: 1px
    color: #363636
    cursor: pointer
    justify - content: center
    padding - bottom: calc(.5em - 1px)
    padding - left: 1em
    padding - right: 1em
    padding - top: calc(.5em - 1px)
    text - align: center
    white - space: nowrap
}

  .button: hover {
    border - color: #b5b5b5
    color: #363636
}

  .button: focus {
    border - color: #3273dc
    color: #363636
}

  .button: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
}

  .button: active {
    border - color: #4a4a4a
    color: #363636
}

  .button.is - light {
    background - color: #f5f5f5
    border - color: transparent
    color: rgba(0, 0, 0, .7)
}

  .button.is - light: hover {
    background - color: #eee
    border - color: transparent
    color: rgba(0, 0, 0, .7)
}

  .button.is - light: focus {
    border - color: transparent
    color: rgba(0, 0, 0, .7)
}

  .button.is - light: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
}

  .button.is - light: active {
    background - color: #e8e8e8
    border - color: transparent
    color: rgba(0, 0, 0, .7)
}

  .button.is - light[disabled] {
    background - color: #f5f5f5
    border - color: transparent
    box - shadow: none
}

  .button.is - light.is - outlined {
    background - color: transparent
    border - color: #f5f5f5
    color: #f5f5f5
}

  .button.is - light.is - outlined: focus,
  .button.is - light.is - outlined: hover {
    background - color: #f5f5f5
    border - color: #f5f5f5
    color: rgba(0, 0, 0, .7)
}

  .button.is - light.is - outlined[disabled] {
    background - color: transparent
    border - color: #f5f5f5
    box - shadow: none
    color: #f5f5f5
}

  .button.is - primary {
    background - color: #00d1b2
    border - color: transparent
    color: #fff
}

  .button.is - primary: hover {
    background - color: #00c4a7
    border - color: transparent
    color: #fff
}

  .button.is - primary: focus {
    border - color: transparent
    color: #fff
}

  .button.is - primary: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(0, 209, 178, .25)
}

  .button.is - primary: active {
    background - color: #00b89c
    border - color: transparent
    color: #fff
}

  .button.is - primary[disabled] {
    background - color: #00d1b2
    border - color: transparent
    box - shadow: none
}

  .button.is - primary.is - outlined {
    background - color: transparent
    border - color: #00d1b2
    color: #00d1b2
}

  .button.is - primary.is - outlined: focus,
  .button.is - primary.is - outlined: hover {
    background - color: #00d1b2
    border - color: #00d1b2
    color: #fff
}

  .button.is - primary.is - outlined[disabled] {
    background - color: transparent
    border - color: #00d1b2
    box - shadow: none
    color: #00d1b2
}

  .button.is - primary.is - light {
    background - color: #ebfffc
    color: #00947e
}

  .button.is - primary.is - light: hover {
    background - color: #defffa
    border - color: transparent
    color: #00947e
}

  .button.is - primary.is - light: active {
    background - color: #d1fff8
    border - color: transparent
    color: #00947e
}

  .button.is - link {
    background - color: #3273dc
    border - color: transparent
    color: #fff
}

  .button.is - link: hover {
    background - color: #276cda
    border - color: transparent
    color: #fff
}

  .button.is - link: focus {
    border - color: transparent
    color: #fff
}

  .button.is - link: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
}

  .button.is - link: active {
    background - color: #2366d1
    border - color: transparent
    color: #fff
}

  .button.is - link[disabled] {
    background - color: #3273dc
    border - color: transparent
    box - shadow: none
}

  .button.is - link.is - outlined {
    background - color: transparent
    border - color: #3273dc
    color: #3273dc
}

  .button.is - link.is - outlined: focus,
  .button.is - link.is - outlined: hover {
    background - color: #3273dc
    border - color: #3273dc
    color: #fff
}

  .button.is - link.is - outlined[disabled] {
    background - color: transparent
    border - color: #3273dc
    box - shadow: none
    color: #3273dc
}

  .button.is - link.is - light {
    background - color: #eef3fc
    color: #2160c4
}

  .button.is - link.is - light: hover {
    background - color: #e3ecfa
    border - color: transparent
    color: #2160c4
}

  .button.is - link.is - light: active {
    background - color: #d8e4f8
    border - color: transparent
    color: #2160c4
}

  .button.is - info {
    background - color: #3298dc
    border - color: transparent
    color: #fff
}

  .button.is - info: hover {
    background - color: #2793da
    border - color: transparent
    color: #fff
}

  .button.is - info: focus {
    border - color: transparent
    color: #fff
}

  .button.is - info: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(50, 152, 220, .25)
}

  .button.is - info: active {
    background - color: #238cd1
    border - color: transparent
    color: #fff
}

  .button.is - info[disabled] {
    background - color: #3298dc
    border - color: transparent
    box - shadow: none
}

  .button.is - info.is - outlined {
    background - color: transparent
    border - color: #3298dc
    color: #3298dc
}

  .button.is - info.is - outlined: focus,
  .button.is - info.is - outlined: hover {
    background - color: #3298dc
    border - color: #3298dc
    color: #fff
}

  .button.is - info.is - outlined[disabled] {
    background - color: transparent
    border - color: #3298dc
    box - shadow: none
    color: #3298dc
}

  .button.is - info.is - light {
    background - color: #eef6fc
    color: #1d72aa
}

  .button.is - info.is - light: hover {
    background - color: #e3f1fa
    border - color: transparent
    color: #1d72aa
}

  .button.is - info.is - light: active {
    background - color: #d8ebf8
    border - color: transparent
    color: #1d72aa
}

  .button.is - success {
    background - color: #48c774
    border - color: transparent
    color: #fff
}

  .button.is - success: hover {
    background - color: #3ec46d
    border - color: transparent
    color: #fff
}

  .button.is - success: focus {
    border - color: transparent
    color: #fff
}

  .button.is - success: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(72, 199, 116, .25)
}

  .button.is - success: active {
    background - color: #3abb67
    border - color: transparent
    color: #fff
}

  .button.is - success[disabled] {
    background - color: #48c774
    border - color: transparent
    box - shadow: none
}

  .button.is - success.is - outlined {
    background - color: transparent
    border - color: #48c774
    color: #48c774
}

  .button.is - success.is - outlined: focus,
  .button.is - success.is - outlined: hover {
    background - color: #48c774
    border - color: #48c774
    color: #fff
}

  .button.is - success.is - outlined[disabled] {
    background - color: transparent
    border - color: #48c774
    box - shadow: none
    color: #48c774
}

  .button.is - success.is - light {
    background - color: #effaf3
    color: #257942
}

  .button.is - success.is - light: hover {
    background - color: #e6f7ec
    border - color: transparent
    color: #257942
}

  .button.is - success.is - light: active {
    background - color: #dcf4e4
    border - color: transparent
    color: #257942
}

  .button.is - danger {
    background - color: #f14668
    border - color: transparent
    color: #fff
}

  .button.is - danger: hover {
    background - color: #f03a5f
    border - color: transparent
    color: #fff
}

  .button.is - danger: focus {
    border - color: transparent
    color: #fff
}

  .button.is - danger: focus: not(: active) {
    box - shadow: 0 0 0 .125em rgba(241, 70, 104, .25)
}

  .button.is - danger: active {
    background - color: #ef2e55
    border - color: transparent
    color: #fff
}

  .button.is - danger[disabled] {
    background - color: #f14668
    border - color: transparent
    box - shadow: none
}

  .button.is - danger.is - outlined {
    background - color: transparent
    border - color: #f14668
    color: #f14668
}

  .button.is - danger.is - outlined: focus,
  .button.is - danger.is - outlined: hover {
    background - color: #f14668
    border - color: #f14668
    color: #fff
}

  .button.is - danger.is - outlined[disabled] {
    background - color: transparent
    border - color: #f14668
    box - shadow: none
    color: #f14668
}

  .button.is - danger.is - light {
    background - color: #feecf0
    color: #cc0f35
}

  .button.is - danger.is - light: hover {
    background - color: #fde0e6
    border - color: transparent
    color: #cc0f35
}

  .button.is - danger.is - light: active {
    background - color: #fcd4dc
    border - color: transparent
    color: #cc0f35
}

  .button[disabled] {
    background - color: #fff
    border - color: #dbdbdb
    box - shadow: none
    opacity: .5
}

  .button.is - rounded {
    border - radius: 290486px
    padding - left: calc(1em + .25em)
    padding - right: calc(1em + .25em)
}

  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6 {
    color: #363636
    font - weight: 600
    line - height: 1.125
}

  .content h1 {
    font - size: 2em
    margin - bottom: .5em
}

  .content h1: not(: first - child) {
    margin - top: 1em
}

  .content h2 {
    font - size: 1.75em
    margin - bottom: .5714em
}

  .content h2: not(: first - child) {
    margin - top: 1.1428em
}

  .content h3 {
    font - size: 1.5em
    margin - bottom: .6666em
}

  .content h3: not(: first - child) {
    margin - top: 1.3333em
}

  .content h4 {
    font - size: 1.25em
    margin - bottom: .8em
}

  .content h5 {
    font - size: 1.125em
    margin - bottom: .8888em
}

  .content h6 {
    font - size: 1em
    margin - bottom: 1em
}

  .notification {
    background - color: #f5f5f5
    border - radius: 4px
    position: relative
    padding: 1.25rem 2.5rem 1.25rem 1.5rem
}

  .notification >.delete {
    right: .5rem
    position: absolute
    top: .5rem
}

  .notification.content,
  .notification.title {
    color: currentColor
}

  .notification.is - light {
    background - color: #f5f5f5
    color: rgba(0, 0, 0, .7)
}

  .notification.is - primary {
    background - color: #00d1b2
    color: #fff
}

  .notification.is - primary.is - light {
    background - color: #ebfffc
    color: #00947e
}

  .notification.is - link {
    background - color: #3273dc
    color: #fff
}

  .notification.is - link.is - light {
    background - color: #eef3fc
    color: #2160c4
}

  .notification.is - info {
    background - color: #3298dc
    color: #fff
}

  .notification.is - info.is - light {
    background - color: #eef6fc
    color: #1d72aa
}

  .notification.is - success {
    background - color: #48c774
    color: #fff
}

  .notification.is - success.is - light {
    background - color: #effaf3
    color: #257942
}

  .notification.is - danger {
    background - color: #f14668
    color: #fff
}

  .notification.is - danger.is - light {
    background - color: #feecf0
    color: #cc0f35
}

@-webkit - keyframes moveIndeterminate {
    from {
        background - position: 200 % 0
    }

    to {
        background - position: -200 % 0
    }
}

@keyframes moveIndeterminate {
    from {
        background - position: 200 % 0
    }

    to {
        background - position: -200 % 0
    }
}

  .title {
    word -break: break-word
}

  .title {
    color: #363636
    font - size: 2rem
    font - weight: 600
    line - height: 1.125
}

  .title.is - 1 {
    font - size: 3rem
}

  .title.is - 2 {
    font - size: 2.5rem
}

  .title.is - 3 {
    font - size: 2rem
}

  .title.is - 4 {
    font - size: 1.5rem
}

  .title.is - 5 {
    font - size: 1.25rem
}

  .title.is - 6 {
    font - size: 1rem
}

  .title.is - 7 {
    font - size: .75rem
}

  .number {
    align - items: center
    background - color: #f5f5f5
    border - radius: 290486px
    display: inline - flex
    font - size: 1.25rem
    height: 2em
    justify - content: center
    margin - right: 1.5rem
    min - width: 2.5em
    padding: .25rem .5rem
    text - align: center
    vertical - align: top
}

  .input,
  .select select {
    background - color: #fff
    border - color: #dbdbdb
    border - radius: 4px
    color: #363636
}

  .input:: -moz - placeholder,
  .select select:: -moz - placeholder {
    color: rgba(54, 54, 54, .3)
}

  .input:: -webkit - input - placeholder,
  .select select:: -webkit - input - placeholder {
    color: rgba(54, 54, 54, .3)
}

  .input: -moz - placeholder,
  .select select: -moz - placeholder {
    color: rgba(54, 54, 54, .3)
}

  .input: -ms - input - placeholder,
  .select select: -ms - input - placeholder {
    color: rgba(54, 54, 54, .3)
}

  .input: hover,
  .select select: hover {
    border - color: #b5b5b5
}

  .input: active,
  .input: focus,
  .select select: active,
  .select select: focus {
    border - color: #3273dc
    box - shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
}

  .input[disabled],
  .select select[disabled] {
    background - color: #f5f5f5
    border - color: #f5f5f5
    box - shadow: none
    color: #7a7a7a
}

  .input[disabled]:: -moz - placeholder,
  .select select[disabled]:: -moz - placeholder {
    color: rgba(122, 122, 122, .3)
}

  .input[disabled]:: -webkit - input - placeholder,
  .select select[disabled]:: -webkit - input - placeholder {
    color: rgba(122, 122, 122, .3)
}

  .input[disabled]: -moz - placeholder,
  .select select[disabled]: -moz - placeholder {
    color: rgba(122, 122, 122, .3)
}

  .input[disabled]: -ms - input - placeholder,
  .select select[disabled]: -ms - input - placeholder {
    color: rgba(122, 122, 122, .3)
}

  .input {
    box - shadow: inset 0 .0625em .125em rgba(10, 10, 10, .05)
    max - width: 100 %
    width: 100 %
  }

  .input[readonly] {
    box - shadow: none
}

  .is - light.input {
    border - color: #f5f5f5
}

  .is - light.input: active,
  .is - light.input: focus {
    box - shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
}

  .is - primary.input {
    border - color: #00d1b2
}

  .is - primary.input: active,
  .is - primary.input: focus {
    box - shadow: 0 0 0 .125em rgba(0, 209, 178, .25)
}

  .is - link.input {
    border - color: #3273dc
}

  .is - link.input: active,
  .is - link.input: focus {
    box - shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
}

  .is - info.input {
    border - color: #3298dc
}

  .is - info.input: active,
  .is - info.input: focus {
    box - shadow: 0 0 0 .125em rgba(50, 152, 220, .25)
}

  .is - success.input {
    border - color: #48c774
}

  .is - success.input: active,
  .is - success.input: focus {
    box - shadow: 0 0 0 .125em rgba(72, 199, 116, .25)
}

  .is - danger.input {
    border - color: #f14668
}

  .is - danger.input: active,
  .is - danger.input: focus {
    box - shadow: 0 0 0 .125em rgba(241, 70, 104, .25)
}

  .input.is - rounded {
    border - radius: 290486px
    padding - left: calc(calc(.75em - 1px) + .375em)
    padding - right: calc(calc(.75em - 1px) + .375em)
}

  .select {
    display: inline - block
    max - width: 100 %
    position: relative
    vertical - align: top
}

  .select.is - rounded select {
    border - radius: 290486px
    padding - left: 1em
}

  .select select {
    cursor: pointer
    display: block
    font - size: 1em
    max - width: 100 %
    outline: 0
}

  .select select:: -ms - expand {
    display: none
}

  .select select[disabled]: hover {
    border - color: #f5f5f5
}

  .select select: not([multiple]) {
    padding - right: 2.5em
}

  .select select[multiple] {
    height: auto
    padding: 0
}

  .select.is - light: not(: hover):: after {
    border - color: #f5f5f5
}

  .select.is - light select {
    border - color: #f5f5f5
}

  .select.is - light select: hover {
    border - color: #e8e8e8
}

  .select.is - light select: active,
  .select.is - light select: focus {
    box - shadow: 0 0 0 .125em rgba(245, 245, 245, .25)
}

  .select.is - primary: not(: hover):: after {
    border - color: #00d1b2
}

  .select.is - primary select {
    border - color: #00d1b2
}

  .select.is - primary select: hover {
    border - color: #00b89c
}

  .select.is - primary select: active,
  .select.is - primary select: focus {
    box - shadow: 0 0 0 .125em rgba(0, 209, 178, .25)
}

  .select.is - link: not(: hover):: after {
    border - color: #3273dc
}

  .select.is - link select {
    border - color: #3273dc
}

  .select.is - link select: hover {
    border - color: #2366d1
}

  .select.is - link select: active,
  .select.is - link select: focus {
    box - shadow: 0 0 0 .125em rgba(50, 115, 220, .25)
}

  .select.is - info: not(: hover):: after {
    border - color: #3298dc
}

  .select.is - info select {
    border - color: #3298dc
}

  .select.is - info select: hover {
    border - color: #238cd1
}

  .select.is - info select: active,
  .select.is - info select: focus {
    box - shadow: 0 0 0 .125em rgba(50, 152, 220, .25)
}

  .select.is - success: not(: hover):: after {
    border - color: #48c774
}

  .select.is - success select {
    border - color: #48c774
}

  .select.is - success select: hover {
    border - color: #3abb67
}

  .select.is - success select: active,
  .select.is - success select: focus {
    box - shadow: 0 0 0 .125em rgba(72, 199, 116, .25)
}

  .select.is - danger: not(: hover):: after {
    border - color: #f14668
}

  .select.is - danger select {
    border - color: #f14668
}

  .select.is - danger select: hover {
    border - color: #ef2e55
}

  .select.is - danger select: active,
  .select.is - danger select: focus {
    box - shadow: 0 0 0 .125em rgba(241, 70, 104, .25)
}
</style > ',document.body.innerHTML+=' < div class="popup" >
    <div class="box content">
        <div class="setmode">
            <div class="button is-rounded is-primary">Stack</div><br><br>
                <div class="button is-rounded is-info">Number</div>
    </div>
                <div class="stackSelector is-hidden">
                    <div class="values"> <button class="button is-primary is-light is-outlined" valueCode="A">Ace</button> <button class="button is-primary is-light is-outlined" valueCode="2">Two</button> <button class="button is-primary is-light is-outlined" valueCode="3">Three</button> <button class="button is-primary is-light is-outlined" valueCode="4">Four</button> <button class="button is-primary is-light is-outlined" valueCode="5">Five</button> <button class="button is-primary is-light is-outlined" valueCode="6">Six</button> <button class="button is-primary is-light is-outlined" valueCode="7">Seven</button> <button class="button is-primary is-light is-outlined" valueCode="8">Eight</button> <button class="button is-primary is-light is-outlined" valueCode="9">Nine</button> <button class="button is-primary is-light is-outlined" valueCode="10">Ten</button> <button class="button is-primary is-light is-outlined" valueCode="J">Jack</button> <button class="button is-primary is-light is-outlined" valueCode="Q">Queen</button> <button class="button is-primary is-light is-outlined last" valueCode="K">King</button> </div><br><br>
                        <div class="suits"> <button class="button is-link is-light is-outlined" suitCode="s">Spades</button> <button class="button is-link is-light is-outlined" suitCode="h">Hearts</button> <button class="button is-link is-light is-outlined" suitCode="c">Clubs</button> <button class="button is-link is-light is-outlined" suitCode="d">Diamonds</button> </div><br><br>
                            <div class="notification is-danger is-hidden"> <button class="delete"></button> You must select both a value and a suit </div><button class="button validate is-success" linkedTo="stackSelector">Validate</button>
    </div>
                            <div class="numberSelector is-hidden"> <input type="tel" class="input" placeholder="Number you want to force"> <br><br>
                                <div class="notification is-danger is-hidden"> <button class="delete"></button> You must enter a valid number </div><button class="button validate is-success" linkedTo="numberSelector">Validate</button>
    </div>
  </div>
</div>';
                                const stack={"4c":1,"2h":2,"7d":3,"3c":4,"4h":5,"6d":6,As:7,"5h":8,"9s":9,"2s":10,Qh:11,"3d":12,Qc:13,"8h":14,"6s":15,"5s":16,"9h":17,Kc:18,"2d":19,Jh:20,"3s":21,"8s":22,"6h":23,"10c":24,"5d":25,Kd:26,"2c":27,"3h":28,"8d":29,"5c":30,Ks:31,Jd:32,"8c":33,"10s":34,Kh:35,Jc:36,"7s":37,"10h":38,Ad:39,"4s":40,"7h":41,"4d":42,Ac:43,"9c":44,Js:45,Qd:46,"7c":47,Qs:48,"10d":49,"6c":50,Ah:51,"9d":52},values=document.querySelectorAll(".values > button"),suits=document.querySelectorAll(".suits > button");let currentValue,currentSuit;const addClickEvent=(elements,isASuit)=>{elements.forEach(elem => { elem.addEventListener("click", () => { isASuit && (currentSuit = elem.getAttribute("suitCode")), isASuit || (currentValue = elem.getAttribute("valueCode")), elements.forEach(e => { e.classList.add("is-light"), e.classList.add("is-outlined") }), elem.classList.remove("is-light"), elem.classList.remove("is-outlined") }) })};addClickEvent(values,!1),addClickEvent(suits,!0);const setModeDiv=document.querySelector(".setmode");setModeDiv.querySelectorAll(".button").forEach(elem=>{elem.addEventListener("click", () => { setModeDiv.classList.add("is-hidden"), document.querySelector(`.${elem.innerText.toLowerCase()}Selector`).classList.remove("is-hidden") })}),document.querySelectorAll(".validate").forEach(elem=>{elem.addEventListener("click", () => { "stackSelector" === elem.getAttribute("linkedTo") && (void 0 !== currentValue && void 0 !== currentSuit ? (forceNumber = stack[currentValue + currentSuit], document.querySelector(".popup").classList.add("is-hidden"), document.head.removeChild(document.head.lastChild)) : elem.parentElement.querySelector(".notification").classList.remove("is-hidden")); let number = document.querySelector(".numberSelector > .input").value; "numberSelector" === elem.getAttribute("linkedTo") && (isNaN(number) || "" === number ? elem.parentElement.querySelector(".notification").classList.remove("is-hidden") : (forceNumber = parseInt(document.querySelector(".numberSelector > .input").value), document.querySelector(".popup").classList.add("is-hidden"), document.head.removeChild(document.head.lastChild))) })}),document.querySelectorAll(".notification > .delete").forEach(elem=>{elem.addEventListener("click", () => { elem.parentElement.classList.add("is-hidden") })});let numberDisplay=document.querySelector(".gws-csf-randomnumber__result"),currentNumber=parseInt(numberDisplay.innerText),button=document.querySelector("#ZdzlKb");for(;button.attributes.length>0;)button.removeAttribute(button.attributes[0].name);button.setAttribute("style","cursor: pointer;height: 48px;width: 100%;text-align: center;position: relative;font-size: 14px;");let clickCount=0,isMoving=!1;button.addEventListener("click",()=>{isMoving || (clickCount++, goTo(clickCount == realRandom + 1 ? forceNumber : generateRandomNumber()))});const goTo=goal=>{const distance=Math.abs(currentNumber-goal),sleep=distance<=10?50:Math.round(500 /distance);isMoving=!0;let timer=setInterval(()=>{currentNumber > goal && currentNumber--, currentNumber < goal && currentNumber++, currentNumber == goal && (isMoving = !1, clearInterval(timer)), numberDisplay.innerText = currentNumber},sleep)},generateRandomNumber=()=>{const min=parseInt(document.querySelector(".gws-csf-randomnumber__minVal").value),max=parseInt(document.querySelector(".gws-csf-randomnumber__maxVal").value);let random=Math.floor(Math.random()*(max-min+1)+min);for(;random==currentNumber||random==forceNumber;)Math.floor(Math.random()*(max-min+1)+min);return random};completion();