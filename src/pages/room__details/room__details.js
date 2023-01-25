import heart from '../../assets/room__details__svg/button_heart.svg'
import heartFilled from '../../assets/room__details__svg/button_heart_filled.svg'

import Chart  from 'chart.js/auto'

export function buttonLikeListener(selector) {

    const buttonLike = document.querySelector(selector)
    const buttonLikeCounter = buttonLike.querySelector('p')
    let currentLikeCount = buttonLikeCounter.innerHTML
    let selected = false

    buttonLike.addEventListener('click', () => {
        if(!selected) {
            currentLikeCount++
            buttonLike.style.border = `1px solid #BC9CFF`
            buttonLike.innerHTML = `<img src=${heartFilled} alt='heartFilled'/> <p style="color: #BC9CFF;">${currentLikeCount}</p>`
            selected = true
            return
        } 

        currentLikeCount--
        buttonLike.style.border = `1px solid rgba(31, 32, 65, 0.25)`
        buttonLike.innerHTML = `<img src=${heart} alt='heart'/> <p style="color: rgba(31, 32, 65, 0.25);">${currentLikeCount}</p>`
        selected = false

        
    })
}

export function chartJs() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
        datasets: [{
            label: '260 голосов',
            data: [2, 1, 1, 0],
            borderWidth: 1
        }]
        },
        options: {}
  });
}