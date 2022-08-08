import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
require('./assets/extensions/jquery.comiseo.daterangepicker.min.js')


$.datepicker.regional["ru"] = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
    monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
    "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
    dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
    dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
    dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    showButtonPanel: false,
    showOtherMonths: true,
    selectOtherMonths: true,
    yearSuffix: "" };
$.datepicker.setDefaults( $.datepicker.regional["ru"] );

$(function(){

    $('.datepicker__first').daterangepicker({
        datepickerOptions : {
            numberOfMonths: 1,
            minDate: 0,
            maxDate: null
        },
        initialText: 'ДД.ММ.ГГГГ',


    })
    
    guestCounter('.card__guests .input__container')


    
    
 })
