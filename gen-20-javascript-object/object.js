// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
const prompt = require('prompt-sync')({sigint: true});
  
  // rl.question('test?', value => {
  //   console.log(`masuk ${value}`);
  //   rl.close();
  // });

let cats = [
    {
    name: "oreo",
    age: 5,
    characteristic: {
      color: "white",
      eyeColor: "blue",
    },
  }
];

let condition = false;

while(!condition){
    
    console.log(`object cat saat ini`);
    console.log(cats);
    console.log("Pilih menu\n",
    "1. add array to object\n",
    "2. edit nama\n",
    "3. edit warna\n",
    "4. end"
    );
    let choice = prompt("Input menu pilihan anda! : ");
    if(choice == "4"){
        console.log("Program berakhir.");
        condition = true;
    };
    
    if(choice == "1"){
        let cat = {
            // name: "Jahe",
            // age: 2,
            // characteristic: {
            //     color: "green",
            //     eyeColor: "yellow",
            //     },
          }
          let characteristic = {}
          cat.name = prompt("Ketik nama cat: ");
          cat.age = prompt("Ketik umur cat: ");
          characteristic.color = prompt("Ketik warna cat: ");
          characteristic.eyeColor = prompt("Ketik warna mata cat: ");
          const catInput = {...cat, characteristic}
          cats.push(catInput);
    }

    if(choice == "2"){
      
      index = prompt("Ketik index cat: ");
      if(cats[index] == undefined){
        console.log("Index tersebut tidak ada")
      } else{
        cats[index].name = prompt("Ketik nama cat: ");
      }
    }

    if(choice == "3"){
      index = prompt("Ketik index cat: ");
      if(cats[index] == undefined){
        console.log("Index tersebut tidak ada")
      } else{
        cats[index].characteristic.color = prompt("Ketik nama cat: ");}
    }
}