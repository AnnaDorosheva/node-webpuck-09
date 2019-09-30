import message from './message';
import arrow from './arrow';
// import './styles.css';
import './images/photo.jpg';
import './images/poto2.jpeg';
import './images/photo1.jpeg';
import './images/photo3.jpg';

import './css/styles.css';
import './css/timer.css';
import Timer from './js/timer'


new Timer({
    element: document.querySelector('#timer-1'),
    initialValue: 0,
    step: 1,
});

new Timer({
    element: document.querySelector('#timer-2'),
    initialValue: 10,
    step: 5,
});


console.log(message);
console.log(arrow(5, 32));