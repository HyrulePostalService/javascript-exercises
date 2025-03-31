const convertToCelsius = function(fahrnToCelc) {
  //math to convert celcius to fahrenheit//
    const convert = (fahrnToCelc -32) * 5/9;
  
    return convert.toFixed(1);
  };
  
  const convertToFahrenheit = function(celcTofahrn) {
  
    const convert = (celcTofahrn * 9/5) + 32;
  
    return convert.toFixed(1);
  
  };
  
  convertToCelsius;
  console.log(convertToCelsius(79));
  
  convertToFahrenheit;
  console.log(convertToFahrenheit(13));