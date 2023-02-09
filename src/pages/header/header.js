export function changeHeader(selector, pageParams) {
    const submitButtons = document.querySelector(`${selector} .submit-buttons`)
    const headerNamespace = require('./header__namespace.pug')
    submitButtons.innerHTML = headerNamespace(pageParams)

}
