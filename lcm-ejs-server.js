import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
const app = express();
const port = 3040;
let HTMLContent = `<p style="font-size: 46px; font-weight: bold; color: blue; text-align: center; text-shadow: black 2px 2px; font-family: Arial, sans-serif; letter-spacing: 2px; padding: 10px; border: 2px solid black; background-color: lightgray; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 10px; margin: 20px auto; width: fit-content; max-width: 80%; line-height: 1.5; overflow-wrap: break-word; word-spacing: 4px; text-transform: uppercase; white-space: pre-wrap;"><span><%= Result %></span></p>`
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.render("lcm-calculator.ejs",{htmlc : HTMLContent});
});

let result = 'N/A';

app.post("/", (req, res) => {
    
if (!req.body.vA || !req.body.vB) {
  console.log(req.body)
  result = "please enter 2 numbers";
  return res.render("lcm-calculator.ejs", { Result: result,
    htmlc: HTMLContent
   });
  }
  function check(a,b){
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)){ 
       console.log(req.body)
       result = "Enter values"
        return
      };

  //storage to store the values A and B
  let storage = [];

      storage.push(Number(a));
      //storage includes values
  storage.push(Number(b));
//check if user input is viable for processing
  if (Math.round(storage[0]) !== storage[0] || Math.round(storage[1]) !== storage[1]){
    console.log('%')
    result=`please don't enter a decimal number`
          storage.splice(0, storage.length);
      return a;
    }
    else if(isNaN( storage[0]) === true || isNaN(storage[1]) === true){
console.log('nonum')
result='enter a valid number'
          storage.splice(0, storage.length);
      return a;
    }
    else if(( typeof storage[0]) === undefined || typeof(storage[1]) === undefined){
console.log('wut')
result='please enter 2 numbers'
          storage.splice(0, storage.length);
      return a;
    }
else if (storage[0] <= 1 || storage[1] <= 1){
  result='please enter a number greater than 1'
  console.log('<1')
          storage.splice(0, storage.length);
      return a;
}
if (Math.round(a) !== a || Math.round(b) !== b){
  result=`please don't enter a decimal number`
  console.log('%');
  return a;
}
else if (isNaN(a) || isNaN(b)){
  result='enter a valid number'
  console.log('nonum');
  return a;
}
else if (typeof a === undefined || typeof b === undefined){
  result='please enter 2 numbers'
  console.log('wut');
  return a;
}
else if (a <= 1 || b <= 1){
    result='please enter a number greater than 1'
  console.log('<1');
  return a;
}

else{
let Countloop = 0;

  //if a > b then storage value[0] (aka value A) and vice versa
    while(Number(a) !== Number(b)){
      if(Number(a) < Number(b)){
        Countloop++
    a = Number(a) + storage[0];

      }
    else if(Number(b) < Number(a)){
      Countloop++
        b = Number(b) + storage[1];
    }
     
    }

    //remove A  and  B values from storage
    storage.splice(0, storage.length);
    // show the LCM value
    result = a;

console.log(`${a,result} tingy`)
return result;
  }
}
  // Call the check function with the query parameters
  if (req.body.vA && req.body.vB) {
    console.log(check(req.body.vA, req.body.vB));
  }
  res.render("lcm-calculator.ejs", { Result: result });
})
app.listen(port, () => {
  console.log(`EJS app running at http://localhost:${port}`);
});
