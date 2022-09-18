export function guestCounter(selector) {
    const guestCounterBlock = document.querySelector(selector)
    const guestCounter = document.querySelector('.guest__counter')
    const guestCounterCells = document.querySelectorAll('.counter__cell')
    let currentCount = 0
    const inputContent = document.querySelector(selector + ' p')
    const applyButton = document.querySelector('.apply__buttons .button__apply')
    const refreshButton = document.querySelector('.apply__buttons .button__refresh')
    let totalCount = 0
    localStorage.setItem('count', 0)

    function setCount(num) {
        let count = 0
        count += num
        if(num == 0) {
            count = 0
            inputContent.innerHTML = `Сколько гостей`
        }
        if(count == 1) inputContent.innerHTML = `${count} гость`
        if(count > 1 && count < 5) inputContent.innerHTML = `${count} гостя`
        if(count >= 5) inputContent.innerHTML = `${count} гостей`
        return count
    }
    
    function openCounter() {
        guestCounter.style.display = 'block'
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
        console.log(JSON.parse(localStorage.getItem('count')))
        })
    refreshButton.addEventListener('click', () => {
        totalCount = setCount(0)
        currentCount = 0
        guestCounterCells.forEach(cell => {
            cell.childNodes[1].childNodes[1].value = 0
            cell.querySelector('.button__minus').setAttribute('disabled','')
        })
        refreshButton.style.visibility = 'hidden'
    })

    guestCounterCells.forEach(cell => {
        const buttonMinus = cell.querySelector('.button__minus')
        const buttonPlus = cell.querySelector('.button__plus')
        const currentCounter = cell.querySelector('.counter')



        buttonMinus.addEventListener('click', () => {
            totalCount = setCount(--currentCount)
            currentCounter.value--
            if(currentCounter.value == 0) {
                buttonMinus.setAttribute('disabled','')
            }
        })

        buttonPlus.addEventListener('click', () => {
            totalCount = setCount(++currentCount)
            currentCounter.value++
            if(currentCounter.value > 0) {
                buttonMinus.removeAttribute('disabled','')
                refreshButton.style.visibility = 'visible'
            }
        }) 


    });
    function totalResult() {
        localStorage.setItem('count', JSON.stringify(totalCount))
        return totalCount
    }
}

