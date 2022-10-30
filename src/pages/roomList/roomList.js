import '../../styles/styles.scss'

export function optionSwitch() {
    const buttonSwitch = document.querySelector('.optional-comfort_dropdown .input__container')
    const buttonSwitchSVG = document.querySelector('.optional-comfort_dropdown .input__container svg')
    const list = document.querySelector('.roomList__options_optional-comfort ul')

    buttonSwitch.addEventListener('click' , () => {

    if(buttonSwitchSVG.style.transform == 'rotate(0.5turn)' && list.style.display == 'block') {
        buttonSwitchSVG.style.transform = 'none'
        list.style.display = 'none'
        return
    }
    buttonSwitchSVG.style.transform = 'rotate(0.5turn)'
    list.style.display = 'block'

    })
    
}