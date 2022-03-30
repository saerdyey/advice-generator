let num = Math.floor(Math.random() * (100-1) + 1)

const getAdvice = (num) => {
    const url = `https://api.adviceslip.com/advice/${num}`;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("no").innerHTML = data.slip.id
      document.getElementById("advice").innerHTML = data.slip.advice
    })
    .catch(function () {
      console.log("Booo");
    });
}

getAdvice(num)

const randomize = () => {
    console.log('clicked')
    const newNum = Math.floor(Math.random() * (100-1) + 1)
    num = newNum
    getAdvice(num)
}



document.getElementById('dice').addEventListener('click', randomize)

