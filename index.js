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
/*const restaurants = {
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
*/


//************************************************************************ */
//Making a counter
// Count to 5
// 1-5, 5-1

/*const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData,{log:(status)=>console.log(status)});

console.log(net.run([1,2,3]));
console.log(net.run([5,4,3]));
*/



//****************************************************** */
//Applying Normalization and Stock Predictor
/*function scaleDown(step){//Normalize
    return {
        open:step.open /138,
        high:step.high/138,
        low:step.low/138,
        close:step.close/138
    };
}
console.log(scaleDown(rawData[0]));

function scaleUp(step){//Denormalize
    return {
        open:step.open *138,
        high:step.high*138,
        low:step.low*138,
        close:step.close*138
    };
}

console.log(scaleUp(scaleDown(rawData[0])));

const scaledData = rawData.map(scaleDown);
const trainingData=[
    scaledData.slice(0,5),
    scaledData.slice(5,10),
    scaledData.slice(10,15),
    scaledData.slice(15,20),
];

console.log(trainingData)
const net=new brain.recurrent.LSTMTimeStep({
    inputSize:4,
    hiddenLayers:[8,8],
    outputSize:4
});

net.train(trainingData,{
   learningRate: 0.005,
   errorThresh: 0.02,
  // log:(stats) => console.log(stats) 
});

//console.log(scaleUp(net.run(trainingData[0])));
console.log(net.forecast([
    trainingData[0][0],
    trainingData[0][1],
], 3).map(scaleUp));
*/


//***************************************************************************** */
//Maths using LSTM
/*const trainingData = [
    '0+0=0',
    '0+1=1',
    '0+2=2',
    '0+3=3',
    '0+4=4',
    '0+5=5',

    '1+0=1',
    '1+1=2',
    '1+2=3',
    '1+3=4',
    '1+4=5',
    '1+5=6',

    '2+0=2',
    '2+1=3',
    '2+2=4',
    '2+3=5',
    '2+4=6',
    '2+5=7',

    '3+0=3',
    '3+1=4',
    '3+2=5',
    '3+3=6',
    '3+4=7',
    '3+5=8',

    '4+0=4',
    '4+1=5',
    '4+2=6',
    '4+3=7',
    '4+4=8',
    '4+5=9',

    '5+0=5',
    '5+1=6',
    '5+2=7',
    '5+3=8',
    '5+4=9',
    '5+5=10',
];

// const inputMap = ['0', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// inputMap.length === inputSize
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,1,0,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,0,1,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];

const net = new brain.recurrent.LSTM({ hiddenLayers: [20] });

net.train(trainingData, { errorThresh: 0.025 });

console.log(net.run('0+1='));
console.log(net.run('4+1='));
console.log(net.run('2+1='));
console.log(net.run('4+2='));
*/


//************************************************************ */
//Number Detector
// rawData = ' # ';

function toArray(string) { // normalize 
    if (string.length !== 7 * 7) throw new Error('string in wrong size');
    return string.split('').map(toNumber);
}
function toNumber(character) {
    return character === '#' ? 1 : 0;
}

const zero = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#     #' +
    '#######'
);
const one = toArray(
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   ' +
    '   #   '
);
const two = toArray(
    '#######' +
    '#     #' +
    '      #' +
    '     # ' +
    '   #   ' +
    ' #     ' +
    '#######'
);
  const three = toArray(
    '#######' +
    '      #' +
    '      #' +
    ' ######' +
    '      #' +
    '      #' +
    '#######'
);
const four = toArray(
    '#     #' +
    '#     #' +
    '#     #' +
    '#######' +
    '      #' +
    '      #' +
    '      #'
);
const five = toArray(
    '#######' +
    '#      ' +
    '#      ' +
    '#######' +
    '      #' +
    '      #' +
    '#######'
);
const six = toArray(
    '      #' +
    '    #  ' +
    '  #    ' +
    ' ######' +
    '#     #' +
    '#     #' +
    '#######'
);
const seven = toArray(
    '#######' +
    '     # ' +
    '    #  ' +
    '   #   ' +
    '  #    ' +
    ' #     ' +
    '#      '
);
const eight = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '#######' +
    '#     #' +
    '#     #' +
    '#######'
);
const nine = toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '###### ' +
    '    #  ' +
    '   #   ' +
    ' #     '
);

const net = new brain.NeuralNetwork();
const trainingData = [
    { input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
];

net.train(trainingData);

// const result = net.run(toArray(
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######' 
// ));

const result = brain.likely(toArray(
    '#######' +
    '#     #' +
    '#     #' +
    '##  ###' +
    '#     #' +
    '#     #' +
    '#######' 
), net);

console.log(result);

