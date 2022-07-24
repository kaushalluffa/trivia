const app = document.getElementById("app");
axios.get("https://opentdb.com/api.php?amount=1&type=multiple").then((res) => {
  for (let i = 0; i < res.data.results.length; i++) {
    console.log(res.data.results[i]);
    const cat = document.createElement("div");
    const type = document.createElement("div");
    const diff = document.createElement("div");
    const ques = document.createElement("div");
    const label = document.createElement("label");
    const select = document.createElement("select");
    const button = document.createElement("button");

    const arr = res.data.results[i].incorrect_answers;
    arr.push(res.data.results[i].correct_answer);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const shuffledArray = shuffleArray(arr);
    console.log(arr);
    const option1 = document.createElement("option");
    option1.setAttribute("value", arr[i]);
    const option2 = document.createElement("option");
    option2.setAttribute("value", arr[i]);
    const option3 = document.createElement("option");
    option3.setAttribute("value", arr[i]);
    const option4 = document.createElement("option");
    option4.setAttribute("value", arr[i]);

    label.innerText = "SELECT OPTIONS";
    option1.innerText = arr[0];
    option2.innerText = arr[1];
    option3.innerText = arr[3];
    option4.innerText = arr[4];
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    button.innerText = "SUBMIT";
    cat.innerText = res.data.results[i].category;
    type.innerText = res.data.results[i].type;
    diff.innerText = res.data.results[i].difficulty;
    ques.innerText = res.data.results[i].question;
    app.appendChild(cat);
    app.appendChild(type);

    app.appendChild(diff);

    app.appendChild(ques);
    app.appendChild(label);
    app.appendChild(select);
    app.appendChild(button);
    // function checkAnswer(){
    //   if()
    // }

    //     button.addEventListener('click', checkAnswer)
  }
});
