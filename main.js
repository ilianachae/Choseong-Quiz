const quizData = [
    { category: "동물", initials: "ㅂㅇㄹ", answer: "병아리", hintImage: "./assets/yellow-kwaja.jpg" },
    { category: "과일", initials: "ㅇㄷ", answer: "앵두", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "나라", initials: "ㅇㅇㄹㄷ", answer: "아일랜드", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "수도", initials: "ㄷㄹ", answer: "딜리", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "가전제품", initials: "ㄷㄹㅁ", answer: "다리미", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "여행지", initials: "ㄹㄷㅇㄷ", answer: "롯데월드", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "사자성어", initials: "ㄱㄱㅎㅎ", answer: "가가호호", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "영화", initials: "ㅇㄹㄷ", answer: "알라딘", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "음식", initials: "ㅂㅂㅂ", answer: "비빔밥", hintImage: "./assets/green-kwaja.jpg" },
    { category: "스포츠", initials: "ㅅㅇ", answer: "수영", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "기념일", initials: "ㄱㅂㅈ", answer: "광복절", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "신조어", initials: "ㅎㅇㅅ", answer: "흑역사", hintImage: "./assets/choco-kwaja.jpg" },
    { category: "채소", initials: "ㅁㄴ", answer: "마늘", hintImage: "./assets/yellow-kwaja.jpg" },
    { category: "스포츠", initials: "ㅂㄹ", answer: "발레", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "보석", initials: "ㄱㄴ", answer: "가넷", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "자동차", initials: "ㅈㄴㅅㅅ", answer: "제네시스", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "과자", initials: "ㅎㄱㄱㅈ", answer: "한글과자", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "음료수", initials: "ㅁㄹㄷ", answer: "미란다", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "나라", initials: "ㅂㄹㅈ", answer: "브라질", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "음식", initials: "ㄱㄷㅇㅈㄹ", answer: "고등어조림", hintImage: "./assets/choco-kwaja.jpg" },
    { category: "브랜드", initials: "ㅇㅇㄷ", answer: "아이더", hintImage: "./assets/ssal-kwaja.jpg" },
    { category: "가구", initials: "ㅅㄹㅈ", answer: "서랍장", hintImage: "./assets/choco-kwaja.jpg" },
    // Add more quiz data here...
  ];
  
let currentQuizIndex = -1;

function getNewQuiz() {
    currentQuizIndex = Math.floor(Math.random() * quizData.length);
    const quiz = quizData[currentQuizIndex];
    document.getElementById("hint").innerHTML = `카테고리: ${quiz.category}`;
    document.getElementById("quiz").innerHTML = quiz.initials;
    document.getElementById("hint-image").src = quiz.hintImage;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("check-answer-btn").disabled = true;
}

function checkInput() {
    // Check if there is input in the answer field
    const answerInput = document.getElementById("answer").value.trim();
    // Enable the "정답 확인" button if there is input, otherwise disable it
    document.getElementById("check-answer-btn").disabled = answerInput === "";
}
function checkAnswer() {
    if (currentQuizIndex === -1) {
        alert("새 퀴즈를 가져오세요!");
        return;
    }
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = quizData[currentQuizIndex].answer;
    const resultElement = document.getElementById("result");
    
    // Check if the answer field is empty
    if (userAnswer === "") {
        const confirmation = confirm("정답을 입력하지 않았습니다. 정말로 확인하시겠습니까?");
        if (confirmation) {
            resultElement.textContent = "정답: " + correctAnswer;
        }
        return;
    }
    
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "정답입니다!";
    } else {
        resultElement.textContent = "틀렸습니다. 정답은 " + correctAnswer + " 입니다.";
    }
}

// Call getNewQuiz() when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    getNewQuiz();
});

