import star from '../../assets/stars/star.svg'
import starFilled from '../../assets/stars/star_filled.svg'
import { changeHeader } from '../header/header.js'
import { Calendar } from '../../scripts/Calendar'
import { createRoomList } from '../room__list/roomList'
import { createPageList } from '../room__list/roomList'

export function UIKitListListener(page) {
    if(page == 3) {
        // set name and surname manualy to make header with names sample
        let exampleParams = {}
        exampleParams.name = 'Юлий'
        exampleParams.surname = 'Цезарь'
        changeHeader('.header_with_namespace .header__navbar', exampleParams)
        
    }

    if(page == 2) {
        let datepicker = new Calendar('#datepicker')
        datepicker.init()
        datepicker.deploy()
        $('.card__date .input__container').on('click', () => $('#datepicker').daterangepicker('open'))

        createRoomList('.room__list_example ', 2)

    }

    if(page == 1) {
        
        // cut from roomList.js, row 44
        function printStarExample(selector, rating) {
            const roomRatingBlock = document.querySelector(selector)
            roomRatingBlock.innerHTML = `<img src=${starFilled} alt='starFilled'/>`
            for(let j = 2; j <= 5; j++) {
                if(j <= rating) {
                  roomRatingBlock.innerHTML += `<img src=${starFilled} alt='starFilled'/>`
                  continue
                }
                roomRatingBlock.innerHTML += `<img src=${star} alt='star'/>`
            }
          }
        printStarExample(`.rate_examples .button_rating1`, 4)
        printStarExample(`.rate_examples .button_rating2`, 5)
        createPageList(`.pagination_example`, 15)
    }
    
}