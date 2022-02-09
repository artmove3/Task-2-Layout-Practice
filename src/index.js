import './styles/styles.scss'
require('webpack-jquery-ui')

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
    showButtonPanel: true,
    selectOtherMonths: true,
    yearSuffix: "" };
$.datepicker.setDefaults( $.datepicker.regional["ru"] )

$(function(){
    let firstDay
    let lastDay

    $('.datepicker__first').datepicker({
        onSelect: function(_, inst) {
            firstDay = inst.selectedDay
        },
        // onClose: function(firstDay) {
        //     $('.datepicker__last').datepicker( "option", "minDate", firstDay)
        //     if (!$('.datepicker__last').val()) {
        //         $('.datepicker__last').focus()
        //     }
        // }
    })

    $('.datepicker__last').datepicker({
        onSelect: function(_, inst) {
            lastDay = inst.selectedDay
        },
        // onClose: function(lastDay) {
        //     $('.datepicker__first').datepicker( "option", "maxDate", lastDay)
        //     if (!$('.datepicker__first').val()) {
        //         $('.datepicker__first').focus()
        //     }
        // }
    })
    
    
    
  })
