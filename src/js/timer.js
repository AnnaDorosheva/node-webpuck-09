export default class Timer  {
    constructor({ element, initialValue = 0, step = 1 }) {
        this.value = initialValue;
        this.step = step;
        this.refs = {
            decBtn: document.querySelector('button[data-action="decrement"]'),
            incBtn: document.querySelector('button[data-action="increment"]'),
            clockFace: document.querySelector('div.value'),
        };
    
        this.updateClockFase();
        this.bindEvents();
    }
    
    increment() {
        this.value += this.step;
        this.updateClockFase();
    }
    
    decrement() {
        this.value -= this.step;
        this.updateClockFase();
    }
    
    updateClockFase() {
        this.refs.clockFace.textContent = this.value;
    }
    
    bindEvents() {
        this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
        this.refs.incBtn.addEventListener('click', this.increment.bind(this));
        }
    };
    