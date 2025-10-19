function checkAnswer () {
    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById('feedback').textContent = "please select an answer first!";
        return;
    }

    const userAnswer = selectedOption.value;

    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's is Incorrect. Try again!";
    }


}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);