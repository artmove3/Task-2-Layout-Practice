export class calendar {
    constructor(selector) {
        this.selector = selector
    }
    init() {
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
    }
    deploy() {
        $(this.selector).daterangepicker({
            datepickerOptions : {
                numberOfMonths: 1,
                minDate: 0,
                maxDate: null,
            },
            applyButtonText: 'применить',
            clearButtonText: 'очистить',
            cancelButtonText: '',
            dateFormat: 'dd.mm.yy',
            change: function() {
                const range = $(this.selector).daterangepicker('getRange');

                // TODO: Use `range` instead of this
                let str1 = $('#drp_autogen0').html().slice(0, 10)
                let str2 = $('#drp_autogen0').html().slice(13, 23)
                $('#entry').html(str1)
                // Глупо, но работает
                if(str2[0] != 'a') { 
                    $('#out').html(str2)
                }
            },
            clear: function() {
                $('#entry').html('ДД.ММ.ГГГГ')
                $('#out').html('ДД.ММ.ГГГГ')
            }
    });
    }
}