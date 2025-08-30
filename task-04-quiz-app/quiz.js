var quizData = [
      {
        q: "What's the capital of Mars?",
        options: ["Olympus Mons", "Valles Marineris", "No idea", "Redville"],
        correct: 0
      },
      {
        q: "Which animal can’t fly?",
        options: ["Penguin", "Eagle", "Bat", "Mosquito"],
        correct: 0
      },
      {
        q: "Best JS variable name?",
        options: ["x", "bananaPower", "oopsCounter", "let"],
        correct: 2
      },
      {
        q: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
      },
      {
        q: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
      }
    ];

    var currentQ = 0;
    var oopsCounter = 0;
    var selectedAnswer = null;

    function showQ() {
      var qArea = document.getElementById("questionArea");
      var aArea = document.getElementById("answersArea");

      if (!qArea || !aArea) {
        alert("Oops! Missing quiz elements. TODO: Fix DOM loading issue.");
        return;
      }

      qArea.innerHTML = "<h2>" + quizData[currentQ].q + "</h2>";
      aArea.innerHTML = "";

      quizData[currentQ].options.forEach(function(opt, idx) {
        aArea.innerHTML += "<label><input type='radio' name='answer' value='" + idx + "' onclick='selectAnswer(" + idx + ")'>" + opt + "</label><br>";
      });

      selectedAnswer = null; // reset selection
    }

    function selectAnswer(val) {
      selectedAnswer = val;
    }

    function nextQ() {
      if (selectedAnswer === null) {
        alert("Pick something, please 🙃");
        return;
      }

      if (selectedAnswer == quizData[currentQ].correct) {
        oopsCounter++;
      }

      currentQ++;

      if (currentQ >= quizData.length) {
        showScore()
      } else {
        showQ();
      }
    }

    function showScore() {
      var scoreDiv = document.getElementById("scoreArea");
      var quizDiv = document.getElementById("quizContainer");

      if (!scoreDiv || !quizDiv) {
        console.log("TODO: Handle missing score container");
        return;
      }

      quizDiv.style.display = "none";
      scoreDiv.style.display = "block";
      scoreDiv.innerHTML = "<h2>Your Score: " + oopsCounter + " / " + quizData.length + "</h2>";

      // TODO: Add restart button maybe?
    }

    // Initial render
    showQ();