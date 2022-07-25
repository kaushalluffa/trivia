const categoryEl = document.getElementById("category");
const difficultyEl = document.getElementById("difficulty");
const questionEl = document.getElementById("question");
const ans = document.querySelector(".container__answers");
const checkAnswer = document.getElementById('check')
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
      option.setAttribute("id", `option${i +1}`);
      option.classList.add("container__answer");
      option.innerHTML = arr[i];

      ans.appendChild(option);
    }
    categoryEl.innerText = category;
    difficultyEl.innerText = `Difficulty Level: ${difficulty}`;
    questionEl.innerHTML = question;
  });
