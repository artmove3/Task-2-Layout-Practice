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
    showOtherMonths: true,
    selectOtherMonths: true,
    yearSuffix: "" };
$.datepicker.setDefaults( $.datepicker.regional["ru"] );

$(function(){
    const guestCounterBlock = document.querySelector('.card__guests .input__container')
    const guestCounter = document.querySelector('.guest__counter')
    const guestCounterCells = document.querySelectorAll('.counter__cell')
    let currentCount = guestCounterBlock.childNodes[0].value
    const inputContent = document.querySelector('.card__guests .input__container input')
    const applyButton = document.querySelector('.apply__buttons .button__apply')
    const refreshButton = document.querySelector('.apply__buttons .button__refresh')

    function setCount(num) {
        inputContent.innerHTML += num
    }
    function openCounter() {
        guestCounter.style.display = 'block'
    }

    function closeCounter() {
        guestCounter.style.display = 'none'
    }

    guestCounterBlock.addEventListener('click', () => {
        guestCounterBlock.classList.add('active')
        openCounter()
        console.log(currentCount)
        console.log(inputContent)
    })

    applyButton.addEventListener('click', () => closeCounter())
    refreshButton.addEventListener('click', () => {
        setCount(0)
        currentCount = 0
        guestCounterCells.forEach(cell => {
            cell.childNodes[1].childNodes[1].value = 0
        })
        closeCounter()
    })

    
    // $('.card__guests .input__container').on('click', () => {
    //     $('.guest__counter').addClass('.active')
    // })

    guestCounterCells.forEach(cell => {
        const buttonMinus = cell.querySelector('.button__minus')
        const buttonPlus = cell.querySelector('.button__plus')
        const currentCounter = cell.querySelector('.counter')



        buttonMinus.addEventListener('click', () => {
           setCount(--currentCount)
            currentCounter.value--
            if(currentCounter.value == 0) {
                buttonMinus.setAttribute('disabled','')
            }
        })

        buttonPlus.addEventListener('click', () => {
            setCount(++currentCount)
            currentCounter.value++
            if(currentCounter.value > 0) {
                buttonMinus.removeAttribute('disabled','')
                refreshButton.style.visibility = 'visible'
            }
        }) 


    });


    
    $('.datepicker__first').datepicker({
        onSelect: function(_, inst) {
            firstDay = inst.selectedDay
            inst.inline = true
            if(firstDay && lastDay) {

                
            }
        },
        onClose: function(_, inst) {
            inst.inline = false
        }
    })

    $('.datepicker__last').datepicker({
        onSelect: function(_, inst) {
            lastDay = inst.selectedDay
            inst.inline = true
            
        },
        onClose: function(_, inst) {
            inst.inline = false
        }
        
    })
    
    
    
  })
