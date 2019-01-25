//crreating a XOR net

/*const net=new brain.NeuralNetwork({ hiddenLayers: [3] });
const trainingData=[
    {input:[0,0],output:[0]},
    {input:[0,1],output:[1]},
    {input:[1,0],output:[1]},
    {input:[1,1],output:[1]}
];

net.train(trainingData,{
    log:(error) => console.log(error),
    logPeriod:100
});
console.log(net.run([1,0]));
*/

//*************************************************************** */
//Training Data as object
//input:{red,green,blue}
//output: {light,neural,dark}

/*const colors = [
    { green: 0.2, blue: 0.4 },
    { green: 0.4, blue: 0.6 },
    { red: 0.2, green: 0.8, blue: 0.8 },
    { green: 1, blue: 1 },
    { red: 0.8, green: 1, blue: 1 },
    { red: 1, green: 1, blue: 1 },
    { red: 1, green: 0.8, blue: 0.8 },
    { red: 1, green: 0.6, blue: 0.6 },
    { red: 1, green: 0.4, blue: 0.4 },
    { red: 1, green: 0.31, blue: 0.31 },
    { red: 0.8 },
    { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
    { dark: 0.8 },
    { neutral: 0.8 },
    { light: 0.7 },
    { light: 0.8 },
    { light: 0.9 },
    { light: 1 },
    { light: 0.8 },
    { neutral: 0.7, light: 0.5 },
    { dark: 0.5, neutral: 0.5 },
    { dark: 0.6, neutral: 0.3 },
    { dark: 0.85 },
    { dark: 0.9 }
];

const trainingData=[];

for(let i=0;i<colors.length;i++)
{
    trainingData.push({
        input:colors[i],
        output:brightnesses[i]
    });
}

const net=new brain.NeuralNetwork({hiddenLayers:[3]});
const stats=net.train(trainingData);
console.log(stats);
console.log(net.run({
    red:0.9
}));


//inverted probelne
const invertedTrainingData=[];
for(let i=0;i<colors.length;i++)
{
    invertedTrainingData.push({
        input:brightnesses[i],
        output:colors[i]
    });
}

const invertedNet=new brain.NeuralNetwork({hiddenLayers:[3]});
const invertedStats=invertedNet.train(invertedTrainingData);
console.log(invertedStats);
*/


//********************************************************** */
//Working with strings as one encoded vectors
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];
for(let restaurantName in restaurants){
    const dayOfWeek=restaurants[restaurantName];
    trainingData.push({
        input:{[dayOfWeek]:1},
        output:{[restaurantName]:1}
    });
}

const net=new brain.NeuralNetwork({hiddenLayers:[3]});
const stats=net.train(trainingData);
console.log(stats)
console.log(net.run({'Monday':1}));

function restaurantForDay(dayOfWeek){
    const result=net.run({[dayOfWeek]:1});
    let highestValue=0;
    let highestRestaurant='';
    for(let restaurantName in result)
    {
        if(result[restaurantName]>highestValue)
        {
            highestValue=result[restaurantName];
            highestRestaurant=restaurantName;
        }
    }
    return highestRestaurant;
}
console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thrusday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));




