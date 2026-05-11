function calculateResult() {
    let totalScore = 0;
    let formValid = true;

    for (let i = 1; i <= 10; i++) {
        let options = document.getElementsByName('q' + i);
        let answered = false;
        for (let j = 0; j < options.length; j++) {
            if (options[j].checked) {
                totalScore += parseInt(options[j].value);
                answered = true;
                break;
            }
        }
        if (!answered) {
            formValid = false;
        }
    }

    if (!formValid) {
        alert("Please answer all questions before viewing the results!");
        return;
    }

    let resultBox = document.getElementById("result-box");
    let resultTitle = document.getElementById("result-title");
    let resultAdvice = document.getElementById("result-advice");

    resultBox.className = "";

    if (totalScore <= 0) {
        resultBox.classList.add("low-risk");
        resultTitle.innerHTML = "Risk Level: LOW RISK (Total Score ≤ 0)";
        resultAdvice.innerHTML = "<strong>Conclusion:</strong> Your current risk of Deep Vein Thrombosis is LOW.<br><br><strong>Advice:</strong> Swelling and pain can be caused by other common factors such as muscle strain or minor injuries. Rest, elevate your leg when lying down, and monitor your symptoms. If symptoms do not improve after a few days, you should still consult a doctor for a check-up.";
    } else if (totalScore === 1 || totalScore === 2) {
        resultBox.classList.add("med-risk");
        resultTitle.innerHTML = "Risk Level: MODERATE RISK (Total Score 1 to 2)";
        resultAdvice.innerHTML = "<strong>Conclusion:</strong> Your risk of Deep Vein Thrombosis is MODERATE.<br><br><strong>Advice:</strong> You have some notable symptoms and should not be complacent. Please schedule an appointment with a cardiovascular or vascular specialist as soon as possible for an ultrasound to determine the exact cause.";
    } else {
        resultBox.classList.add("high-risk");
        resultTitle.innerHTML = "Risk Level: HIGH RISK (Total Score ≥ 3)";
        resultAdvice.innerHTML = "<strong>Conclusion:</strong> Your risk of Deep Vein Thrombosis is HIGH.<br><br><strong>SEEK IMMEDIATE MEDICAL ATTENTION!</strong> Please go to the nearest hospital or medical facility immediately for a venous ultrasound. Absolutely do not massage, apply heating oils, or use acupressure on the swollen leg, as this may dislodge a blood clot to your lungs, which is life-threatening.";
    }

    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: 'smooth' });
}