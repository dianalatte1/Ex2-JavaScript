function sumar() {
  let number = document.getElementById("counter").value;
  console.log(number);
  let array = [];
  let sum = 0;
  for (let i = 0; i < number; i++) {
    let n = Math.floor(Math.random() * 1000);
    sum += n;
    array.push(n);
  }
  let results = document.getElementById("results");
  // results.innerHTML =
  //   "Los numeros que sumaste aleatoriamente son: " +
  //   array.toString() +
  //   "<br/>" +
  //   "La suma es:  " +
  //   sum;

  results.innerHTML = `
  Los numeros que sumaste aleatoriamente son: ${array.toString()} <br/>
  La suma es: ${sum}
  `;

  console.log(array);
  console.log(sum);
}
