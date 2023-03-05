
function fadeUp() {
    var fade = document.querySelectorAll('.fade')
    for (var i = 0; i < fade.length; i++) {
        var height = window.innerHeight;
        var top = fade[i].getBoundingClientRect().top
        var fadePoint = 100

        if (top < height - fadePoint) {
            fade[i].classList.add('active')
        } else {
            fade[i].classList.remove('active')
        }
    }

}

const question = document.getElementById("qstn");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

let questions = [
    {
        question: "Ilang taon tayo mag kaklase?",
        choiceA: "6",
        choiceB: "3",
        choiceC: "1",
        choiceD: "4",
        correct: "A"

    },
    {
        question: "Bukod kay chi-chi, brunie, at totee, sino pa ang aso mo?",
        choiceA: "chuchi",
        choiceB: "chuchay",
        choiceC: "chuchu",
        choiceD: "chichu",
        correct: "C"

    },
    {
        question: "Saan tayo unang lumabas? Yung akala natin masarap ahhhahahhahah",
        choiceA: "Tokyo",
        choiceB: "Samgyyy",
        choiceC: "Toyo",
        choiceD: "Kyoto",
        correct: "D"

    },
    {
        question: "Ano pangalan ng ibon ko?",
        choiceA: "Gon",
        choiceB: "Chippy",
        choiceC: "Killua",
        choiceD: "Netsuko",
        correct: "A"

    },
    {
        question: "Bukod sa tulog, saan kapa busog madalas?",
        choiceA: "Chismisss",
        choiceB: "Pagmamahal ko 😗",
        choiceC: "Pagkainnn",
        choiceD: "All are correct!",
        correct: "D"

    },
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let letter = ''

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

choiceA.addEventListener('click', function (event) {
    letter = 'A'
    checkAnswer('A');
})
choiceB.addEventListener('click', function (event) {
    letter = 'B'
    checkAnswer('B');
})
choiceC.addEventListener('click', function (event) {
    letter = 'C'
    checkAnswer('C');
})
choiceD.addEventListener('click', function (event) {
    letter = 'D'
    checkAnswer('D');
})

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = `<h4 class="question" id="qstn">` + q.question + "</h4>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function initiateQuiz() {
    renderQuestion();
}

async function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
        await sleep(2000);
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            await sleep(2000);
            document.querySelector('.upperbox').classList.add("hidden");
            document.querySelector('#ar').classList.remove("hidden");
            document.querySelector('.body').classList.remove("hidden");
            document.querySelector('.main').classList.remove("hidden");
        }
    } else {
        answerIsWrong();
        await sleep(2000);
    }

}

// answer is correct
async function answerIsCorrect() {
    document.getElementById(letter).style.backgroundColor = "#0f0";
    await sleep(2000);
    document.getElementById(letter).style.backgroundColor = "#fff";
}

// answer is Wrong
async function answerIsWrong() {
    document.getElementById(letter).style.backgroundColor = "#f00";
    await sleep(500);
    document.getElementById(letter).style.backgroundColor = "#fff";
}

document.addEventListener('DOMContentLoaded', initiateQuiz())

window.addEventListener('scroll', fadeUp);
