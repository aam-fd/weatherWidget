import { Observable, of } from 'rxjs';
// import {delay, map} from 'rxjs/internal/operators';

const products: IProduct[] = [
    {
        img1: './assets/images/santorini1.jpg', // в хедер
        img2: './assets/images/santorini2.jpg',
        title: 'Santorini',
        address: 'Greece, Santorini',
        phone: '394326548',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 26,
            temperature: 29
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/santorini2.jpg',
            followers: 10654,
            following: 7453
        },
        type: 'hotel', // hotel, fishing, tours, weather
    },
    {
        img1: './assets/images/crete1.jpg', // в хедер
        img2: './assets/images/crete3.jpg',
        title: 'Heraklion',
        address: 'Greece, Heraklion',
        phone: '394326654',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 25,
            temperature: 27
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/crete3.jpg',
            followers: 9654,
            following: 8743
        },
        type: 'hotel', // hotel, fishing, tours, weather
    },
    {
        img1: './assets/images/santorini1.jpg', // в хедер
        img2: './assets/images/crete4.jpg',
        title: 'Chania',
        address: 'Greece, Chania',
        phone: '394326987',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 28,
            temperature: 30
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/crete4.jpg',
            followers: 7654,
            following: 4325
        },
        type: 'tours', // hotel, fishing, tours, weather
    },
    {
        img1: './assets/images/crete1.jpg', // в хедер
        img2: './assets/images/crete3.jpg',
        title: 'Rethymnon',
        address: 'Greece, Rethymnon',
        phone: '394326653',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 29,
            temperature: 32
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/crete3.jpg',
            followers: 8453,
            following: 7654
        },
        type: 'tours', // hotel, fishing, tours, weather
    },
    {
        img1: './assets/images/crete4.jpg', // в хедер
        img2: './assets/images/santorini1.jpg',
        title: 'Agios Nikolaos',
        address: 'Greece, Agios Nikolaos',
        phone: '394326876',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 30,
            temperature: 31
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/santorini1.jpg',
            followers: 4965,
            following: 5432
        },
        type: 'weather', // hotel, fishing, tours, weather
    },
    {
        img1: './assets/images/santorini2.jpg', // в хедер
        img2: './assets/images/crete1.jpg',
        title: 'Sitia',
        address: 'Greece, Sitia',
        phone: '394326543',   // дополнительно задание pipe для форматирования
        weather: {
            title: 'Current weather',
            icon: './assets/images/cloudy.png',
            water: 25,
            temperature: 29
        },
        social_info:{
            title: 'Popularity of the resort',
            img: './assets/images/crete1.jpg',
            followers: 8543,
            following: 7653
        },
        type: 'fishing', // hotel, fishing, tours, weather
    },
]

export const products$: Observable<IProduct[]> = of(products);
//   .pipe(
//     map((productsArr: IProduct[]) =>
//       productsArr.filter((product: IProduct) => product.src)),
//     delay(3000)
//   );
