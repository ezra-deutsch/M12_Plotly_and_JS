console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

// 12.2.2 - Bar Chart with Arrays - All Cities decending
var topAllCityNames = cityGrowths.map(city => city.City);
var topAllCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topAllCityNames,
    y: topAllCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

// 12.2.2 - Bar Chart with Arrays - Top Five Cities decending
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// 12.2.2 - Bar Chart with Arrays - Top Seven Cities decending
// var topSevenCities = sortedCities.slice(0,7);
// var topCityNames = topSevenCities.map(city => city.City);
// var topCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topCityNames,
//     y: topCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

