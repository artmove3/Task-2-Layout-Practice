export function guestCounter(selector, modifier = '') {
    const guestCounterBlock = document.querySelector(selector)
    const guestCounter = document.querySelector(selector + '+.guest__counter')
    const guestCounterCells = document.querySelectorAll(selector + '+.guest__counter .counter__cell')
    let currentCount = 0
    const inputContent = document.querySelector(selector + ' p')
    const applyButton = document.querySelector(selector + '+.guest__counter .apply__buttons .button__apply')
    const refreshButton = document.querySelector(selector + '+.guest__counter .apply__buttons .button__refresh')
    let countArr = JSON.parse(localStorage.getItem('countArr'))

    // set initial data for first guestCounter (which is without babies)

    if(modifier == '') {
        countArr = [0, 0, 0]
        localStorage.clear()
    }

    if(modifier == 'furniture') {
        const countArrFurn = [0, 0, 0]
        countArr = countArrFurn
    }

    let totalCount = 0

    // counting totalCount based on countArr 
    function reduceArr(arr) {
        totalCount = arr.reduce((sum, current) => +sum + +current)
        return totalCount
    }

    
    

    function setCount(num) {
        let count = 0
        if(modifier) count = currentCount
        count += num
        if(num == 0 || count == 0) {
            if(modifier =='furniture') inputContent.innerHTML = `Удобства номера`
            else {
                inputContent.innerHTML = `Сколько гостей`
            }
        }
        if(count == 1) inputContent.innerHTML = `${count} гость`
        if(count > 1 && count < 5) inputContent.innerHTML = `${count} гостя`
        if(count >= 5) inputContent.innerHTML = `${count} гостей`
        if(countArr[2] && modifier == 'babyCount') {
            let babyCount = +countArr[2]
            if(babyCount == 1) inputContent.innerHTML += `, ${babyCount} младенец`
            if(babyCount > 1 && babyCount < 5) inputContent.innerHTML += `, ${babyCount} младенца`
            if(babyCount >= 5) inputContent.innerHTML += `, ${babyCount} младенцев`
        }
        if(modifier == 'furniture') {
            let countArrFurn = JSON.parse(localStorage.getItem('countArrFurn'))
            inputContent.innerHTML = `${countArrFurn[0]} спальни, ${countArrFurn[1]} кровати, ${countArrFurn[2]} ванные комнаты`
        }
    }
    
    function openCounter() {
        guestCounter.style.display = 'block'
        if(totalCount) refreshButton.style.visibility = 'visible'
    }

    function closeCounter() {
        guestCounter.style.display = 'none'
        
    }

    guestCounterBlock.addEventListener('click', () => {
        openCounter()
    })

    applyButton.addEventListener('click', () => {
        closeCounter()
        totalResult()
        setCount(totalCount)
        localStorage.setItem('counterStr', JSON.stringify(inputContent.innerHTML))

        })
    refreshButton.addEventListener('click', () => {
        totalCount = setCount(0)
        currentCount = 0
        countArr = [0, 0, 0]
        guestCounterCells.forEach(cell => {
            cell.childNodes[1].childNodes[1].value = 0
            cell.querySelector('.button__minus').setAttribute('disabled','')
        })
        refreshButton.style.visibility = 'hidden'
    })

    guestCounterCells.forEach((cell, i) => {
        const buttonMinus = cell.querySelector('.button__minus')
        const buttonPlus = cell.querySelector('.button__plus')
        const currentCounter = cell.querySelector('.counter')

        currentCounter.value = countArr[i]
        if(countArr[i] > 0) buttonMinus.removeAttribute('disabled','')


        buttonMinus.addEventListener('click', () => {
            currentCounter.value--
            countArr[i] = currentCounter.value
            if(currentCounter.value == 0) {
                buttonMinus.setAttribute('disabled','')
            }
        })

        buttonPlus.addEventListener('click', () => {
            currentCounter.value++
            countArr[i] = currentCounter.value
            if(currentCounter.value > 0) {
                buttonMinus.removeAttribute('disabled','')
                refreshButton.style.visibility = 'visible'
            }
        }) 


    });
    function totalResult() {
        if(modifier == 'furniture') localStorage.setItem('countArrFurn', JSON.stringify(countArr))
        else {
            localStorage.setItem('countArr', JSON.stringify(countArr))
        }
        totalCount = reduceArr(countArr)
        localStorage.setItem('count', JSON.stringify(totalCount))

        return totalCount
    }
}

