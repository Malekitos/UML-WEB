const answers = {
    'activity-question1': 'Diagramma, kas parāda procesu secību un darbību plūsmu',
    'activity-question2': 'Melns aplis',
    'activity-question3': 'Rombs',
    'activity-question4': 'Taisnstūris',
    'class-question1': 'Klases, to atribūti un metodes',
    'class-question2': 'Atributi',
    'class-question3': 'Metodes',
    'class-question4': 'Līnija ar rombu'
};

let correctAnswersCount = 0;  
let answeredQuestionsCount = 0;  
const totalQuestions = 8;

function checkAnswer(questionId, selectedAnswer) {
    const questionDiv = document.getElementById(questionId);
    const buttons = questionDiv.querySelectorAll('button');

   
    if (selectedAnswer === answers[questionId]) {
        questionDiv.classList.add('correct');
        questionDiv.classList.remove('incorrect');
        correctAnswersCount++;
    } else {
        questionDiv.classList.add('incorrect');
        questionDiv.classList.remove('correct');
    }

    
    buttons.forEach(button => {
        button.style.display = 'none'; 
    });

    
    answeredQuestionsCount++;

   
    if (answeredQuestionsCount === totalQuestions) {
        document.getElementById('result').textContent = 'Paldies par jūsu uzmanību!';
    }
}



let activity1 = document.getElementById('activity1')
let activity2 = document.getElementById('activity2')
let activity3 = document.getElementById('sim')
let modalaactivity1 = document.getElementById('modal-activity1')
let modalaactivity2 = document.getElementById('modal-activity2')
let modalaactivity3 = document.getElementById('sim-modal')


let closeModal = document.querySelectorAll('.close-modal')


activity1.addEventListener('click', function(){

    modalaactivity1.classList.add('modal-active')

})


activity2.addEventListener('click', function(){

    modalaactivity2.classList.add('modal-active')

})

activity3.addEventListener('click', function(){

    modalaactivity3.classList.add('modal-active')

})

let closeActivity1 = document.getElementById('close-modal1')
let closeActivity2 = document.getElementById('close-modal2')
let closeActivity3 = document.getElementById('close-simmodal')

closeActivity1.addEventListener('click', function(){

    modalaactivity1.classList.remove('modal-active')

})


closeActivity2.addEventListener('click', function(){

    modalaactivity2.classList.remove('modal-active')

})


closeActivity3.addEventListener('click', function(){

    modalaactivity3.classList.remove('modal-active')

})