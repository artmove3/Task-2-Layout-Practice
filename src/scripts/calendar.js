export class Calendar {
    constructor(selector) {
        this.selector = selector
    }
    init() {
        $.datepicker.regional["ru"] = {
            initialText: "",
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            monthNamesShort: [ "янв", "фев", "мар", "апр", "май", "июн",
            "июл", "авг", "сен", "окт", "ноя", "дек" ],
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
        const getRange = () => $(this.selector).daterangepicker('getRange');

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
                const range = getRange()
                $('#entry').html(range.start.toLocaleDateString())
                localStorage.setItem('dateStrEntry', JSON.stringify(range.start.toLocaleDateString()))
                if(range.end) { 
                    $('#out').html(range.end.toLocaleDateString())
                    localStorage.setItem('dateStrOut', JSON.stringify(range.end.toLocaleDateString()))
                    // here i take month shortname from object above 
                    const totalDate = `${range.start.getDate()} ${$.datepicker.regional["ru"].monthNamesShort[range.start.getMonth()]}  - ${range.end.getDate()} ${$.datepicker.regional["ru"].monthNamesShort[range.end.getMonth()]}`
                    localStorage.setItem('dateStr', JSON.stringify(totalDate))
                    $('#dates').html(totalDate)

                }
            },

            close: function() {},
            clear: function() {
                $('#entry').html('ДД.ММ.ГГГГ')
                $('#out').html('ДД.ММ.ГГГГ')
                localStorage.removeItem('dateStr')
                localStorage.removeItem('dateStrOut')
                localStorage.removeItem('dateStrEntry')

                
            }
            
    });
    }
}