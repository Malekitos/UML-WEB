const answers = {
    question1: 'CSS',
    question2: 'JavaScript',
    question3: 'SQL',
    question4: 'PHP',
    question5: 'JavaScript',
    question6: 'HTML'
};

// Счётчик правильных ответов
let correctAnswersCount = 0;
const totalQuestions = 6;

// Функция для проверки ответа
function checkAnswer(questionId, selectedAnswer) {
    const questionDiv = document.getElementById(questionId);
    
        if (selectedAnswer === answers[questionId]) {
            questionDiv.classList.add('correct');
            questionDiv.classList.remove('incorrect');
            correctAnswersCount++;
        } else {
            questionDiv.classList.add('incorrect');
            questionDiv.classList.remove('correct');
            
        }
        
        // Проверка, правильны ли все ответы
        if (correctAnswersCount === totalQuestions) {
            document.getElementById('result').textContent = 'Paldies par jūsu uzmanību!';
        }
    
}