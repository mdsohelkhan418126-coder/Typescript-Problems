type Weather = 'sunny' | 'rainy' | 'cloudy';

const getWeatherAdvice = (weather: Weather) => {
  if (weather === 'sunny') {
    return 'Wear sunscreen';
  } else if (weather === 'rainy') {
    return 'Carry an umbrella';
  } else if (weather === 'cloudy') {
    return 'Bring a light jacket';
  } else {
    return 'snowy';
  }
};
console.log(getWeatherAdvice('sunny'));
console.log(getWeatherAdvice('rainy'));
console.log(getWeatherAdvice('cloudy'));
