
function multiploN1(){
    return 'Multiplo do 1º número';
}

function multiplosN2(){
    return 'Multiplo do 2º número';
}


let fizzBuzz = (n1, n2) => {
  for (let i = 1; i <= 100; i++) {
    if (i % n1 == 0 && i % n2 == 0) {
      console.log(multiploN1() + ' ' +  multiplosN2());
    } else if (i % n1 == 0) {
      console.log(multiploN1());
    } else if (i % n2 == 0) {
      console.log(multiplosN2());
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(5, 7));
