"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === 'sunny') {
        return 'Wear sunscreen';
    }
    else if (weather === 'rainy') {
        return 'Carry an umbrella';
    }
    else if (weather === 'cloudy') {
        return 'Bring a light jacket';
    }
    else {
        return 'snowy';
    }
};
console.log(getWeatherAdvice('sunny'));
console.log(getWeatherAdvice('rainy'));
console.log(getWeatherAdvice('cloudy'));
//# sourceMappingURL=13.%20Weather%20Advice%20Picker.js.map