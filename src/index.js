import './styles/styles.scss'
// import * as $ from 'jquery'
require('webpack-jquery-ui')

$('.card__date input').datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
})