const categoryEl = document.getElementById("category");
const difficultyEl = document.getElementById("difficulty");
const questionEl = document.getElementById("question");
questionEl.classList.add("animate__animated");
questionEl.classList.add("animate__fadeInDown");
questionEl.classList.add("animate__delay-1s");
const ans = document.querySelector(".container__answers");
const checkAnsBtn = document.getElementById("check");
axios
  .get("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple")
  .then((res) => {
    console.log(res.data.results[0]);
    const { category, difficulty, question } = res.data.results[0];

    const arr = [...res.data.results[0].incorrect_answers];

    arr.push(res.data.results[0].correct_answer);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const shuffledArray = shuffleArray(arr);

    for (let i = 0; i < arr.length; i++) {
      const option = document.createElement("div");
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      option.setAttribute("id", `option${i + 1}`);
      option.classList.add("container__answer");

      option.innerHTML = `<input type="radio" name='option' id='option' value='${arr[i]}' /> <span> ${arr[i]}</span>`;

      ans.appendChild(option);
    }
    categoryEl.innerText = category;
    difficultyEl.innerText = `Difficulty Level: ${difficulty}`;
    
    questionEl.innerHTML = question;

    checkAnsBtn.addEventListener("click", checkAnswer);
    function checkAnswer() {
      const container = document.getElementById("container");
      const checked = document.querySelector(`input[name='option']:checked`);
      if (
        checked &&
        checked.value === `${res.data.results[0].correct_answer}`
      ) {
        const correct = document.createElement('p')
        correct.classList.add(
          "correct"
        );
        correct.classList.add(
          "animate__animated"
        );
        correct.classList.add("animate__fadeInDown");
        correct.innerText = `You are Correct. Congratulations`
        ans.innerHTML = ''
        ans.appendChild(correct)
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("next");
        nextBtn.classList.add("animate__animated");
        nextBtn.classList.add("animate__fadeInUp");
        nextBtn.innerText = "Next";
        container.appendChild(nextBtn);
        nextBtn.addEventListener("click", () => {
          location.reload();
        });
      } else {
        ans.innerHTML = "";
        const correctAnswer = document.createElement("p");
        correctAnswer.classList.add("correct");
        correctAnswer.innerText = `This is the correct answer ${res.data.results[0].correct_answer}`;
        const wrongAnswer = document.createElement("p");
        wrongAnswer.classList.add("wrong");
        wrongAnswer.innerText = "Sorry Wrong Answer";
        ans.appendChild(wrongAnswer);
        ans.appendChild(correctAnswer);
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("next");
        nextBtn.innerText = "Next";
        container.appendChild(nextBtn);
        nextBtn.addEventListener("click", () => {
          location.reload();
        });
      }
    }
  });
