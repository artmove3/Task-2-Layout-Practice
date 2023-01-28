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
    const ct = ctx.getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
        datasets: [{
            data: [2, 1, 1, 0],
            backgroundColor: [
                getGradient('#FFE39C', '#FFBA9C'),
                getGradient('#BC9CFF', '#8BA4F9'),
                getGradient('#6FCF97', '#66D2EA'),
                getGradient('#909090', '#3D4975')
            ],
            borderWidth: 2,
        }]
        },
        options: {
            color: [],
            cutout: '90%',
            // radius: 70,
            rotation: 180,
            scales: {},
            plugins: {}
            
        }
  });

  function getGradient(colorStart, colorEnd) {
    const gradient = ct.createLinearGradient(-1, 0, -1, 120);
    gradient.addColorStop(0, colorStart)
    gradient.addColorStop(1, colorEnd)
    return gradient
  }
}