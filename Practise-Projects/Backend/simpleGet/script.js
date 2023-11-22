const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

function calculateSum( target ){
    var sum = 0;
    for( var i = 0 ; i < target ; i++) {
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res){
    var counter = req.query.counter; 
    var calculatedSum = calculateSum(counter);

    var answer = "The Sum is " + calculatedSum;
    res.send(answer);
}

app.get('/handleSum', handleFirstRequest)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

