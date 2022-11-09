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

export function createRoomList(roomQuantity) {
    for(let i = 1; i <= roomQuantity; i++){
    const roomListContainer = document.querySelector('.roomList__content_list')
    const room = document.createElement(`div`)
    room.setAttribute('class', 'roomList__content_room')
    roomListContainer.appendChild(room)
    }
}