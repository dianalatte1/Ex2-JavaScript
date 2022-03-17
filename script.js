function sumar() {
  let number = document.getElementById("asdf").value;
  console.log(number);
  let array = [];
  let sum = 0;
  for (let i = 0; i < number; i++) {
    let n = Math.floor(Math.random() * 1000);
    sum += n;
    array.push(n);
  }
  console.log(array);
  console.log(sum);
}
