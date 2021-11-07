
// 12.1.2 - Inspect a Plotly Line
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// 12.1.3 - Create a Bar Chart
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// var data = [trace];
// var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
// };
//    Plotly.newPlot("plotArea", data, layout);

// 12.1.4 - Create a Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
// };
// var data = [trace];
// var layout = {
//     title: "'Pie' Chart",
// };
// Plotly.newPlot("plotArea", data, layout);

// 12.1.4 - Create a Scatter Plot
// var trace1 = {
//     x: [1,2,3,4,5],
//     y: [10,15,13,17],
//     mode: 'markers',
//     type: 'scatter'
// };
// var trace2 = {
//     x: [2,3,4,5],
//     y: [16,5,11,9],
//     mode: 'lines',
//     type: 'scatter'
// };
// var trace3 = {
//     x: [1,2,3,4],
//     y: [12,9,15,12],
//     mode: 'lines+markers',
//     type: 'scatter'
// };
// var data = [trace1,trace2,trace3];
// Plotly.newPlot('plotArea', data);

// 12.2.1 - Functional JavaScript - the Map method
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// 12.2.1 - Functional JavaScript - the Map method
// var numbers = [0,2,4,6,8];
// var add_five = numbers.map(function(num){
//     return num + 5;
// });
// console.log(add_five);

// 12.2.1 - Functional JavaScript - the Map method - extract the CityNames
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// 12.2.1 - Functional JavaScript - the Map method - extract the Populations
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityPop = cities.map(function(pop){
//     return pop.population;
// });
// console.log(cityPop);

// 12.2.1 - Functional JavaScript - the Filter method
// let numbers = [13,22,36,54,55]
// let evenNumbers = numbers.filter(number => number % 2 ==0)
// console.log(evenNumbers)

// 12.2.1 - Functional JavaScript - the Filter method
// var numbers = [1,2,3,4,5];
// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);

// 12.2.1 - Functional JavaScript - the Map method using => function
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

// 12.2.1 - Functional JavaScript - the Sort method using => function
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// 12.2.1 - Functional JavaScript - the Slice method 
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);