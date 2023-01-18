import Image2 from "../../assets/pictures/image_2.jpg"
import Image3 from "../../assets/pictures/image_3.jpg"
import Image4 from "../../assets/pictures/image_4.jpg"
import Image5 from "../../assets/pictures/image_5.jpg"
import Image6 from "../../assets/pictures/image_6.jpg"
import Image7 from "../../assets/pictures/image_7.jpg"
import Image8 from "../../assets/pictures/image_8.jpg"
import Image9 from "../../assets/pictures/image_9.jpg"
import Image10 from "../../assets/pictures/image_10.jpg"
import Image11 from "../../assets/pictures/image_11.jpg"
import Image12 from "../../assets/pictures/image_12.jpg"
import Image13 from "../../assets/pictures/image_13.jpg"

export const roomObjArray = [
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image2, Image2, Image3, Image4],
        isLux: 'ЛЮКС',
        pricePerDay: 9990 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 5,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image3, Image4, Image5, Image6],
        isLux: '',
        pricePerDay: 9900 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 4,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image4, Image5, Image6, Image7],
        isLux: 'ЛЮКС',
        pricePerDay: 8500 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image5, Image6, Image7, Image8],
        isLux: '',
        pricePerDay: 7300 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 5,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image6, Image7, Image8, Image9],
        isLux: '',
        pricePerDay: 6000 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 4,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image7, Image8, Image9, Image10],
        isLux: '',
        pricePerDay: 5800 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image8, Image9, Image10, Image11],
        isLux: '',
        pricePerDay: 5500 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image9, Image10, Image11, Image12],
        isLux: '',
        pricePerDay: 5300 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 4,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image10, Image11, Image12, Image13],
        isLux: '',
        pricePerDay: 5000 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image11, Image12, Image13, Image2],
        isLux: '',
        pricePerDay: 5000 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 5,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image12, Image13, Image2, Image3],
        isLux: '',
        pricePerDay: 5000 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
    {
        roomNumber: Math.floor((Math.random()) * 100),
        background: [Image13, Image2, Image3, Image4],
        isLux: '',
        pricePerDay: 5000 + '₽',
        comments: Math.floor((Math.random()) * 10),
        rating: 3,

    },
]
