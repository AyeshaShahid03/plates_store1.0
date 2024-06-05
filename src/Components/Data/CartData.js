import Elipse from '../../assets/images/Ellipse 39.png';
import { monthDay } from './ProductData';

let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let d = new Date();
let month = monthDay[d.getDate()];
let dayName = day[d.getDay()];
let daydate = ` ${dayName}  ${month}`;

export const productValues = [
  {
    id: 1,
    price: 59.4,
    img: Elipse,
    quantity: 2,
    review: 1.5,
    deliveryTime: daydate,
    size: 'AFB11.25x11.25x1M8A',
  },

  {
    id: 2,
    price: 10.5,
    img: Elipse,
    quantity: 8,
    review: 4,
    deliveryTime: daydate,
    size: 'AFB11.25x11.25x1M8A',
  },

  {
    id: 4,
    price: 38.1,
    img: Elipse,
    quantity: 5,
    review: 5,
    deliveryTime: daydate,
    size: 'AFB11.25x11.25x1M8A',
  },

  {
    id: 3,
    price: 54.6,
    img: Elipse,
    quantity: 3,
    review: 2.5,
    deliveryTime: daydate,
    size: 'AFB11.25x11.25x1M8A',
  },
];
