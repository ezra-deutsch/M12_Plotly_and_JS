// 12.3.2 - Test the connection to the data file. Print "hello" to the console
// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

// 12.3.2 - Print all data to the console
d3.json("samples.json").then(function(data){
    console.log(data);
});

// 12.3.2 - Extract only 'wfreq' value from the data
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// 12.3.2 - Sort all metadata in DECENDING order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// 12.3.2 - Sort decending AND Filter out null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };
// console.log(Object.entries(researcher1));

// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});