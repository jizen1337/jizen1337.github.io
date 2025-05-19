let currentScore = 0;
let answeredMcq = new Set();
let answeredTf = new Set();

// DOM Elements
const mcqBtn = document.getElementById('mcqBtn');
const tfBtn = document.getElementById('tfBtn');
const mcqSection = document.getElementById('mcqSection');
const tfSection = document.getElementById('tfSection');
const mcqQuestionsContainer = document.getElementById('mcqQuestions');
const tfQuestionsContainer = document.getElementById('tfQuestions');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('totalQuestions');

// Initialize total questions
let totalQuestions = mcqData.length + tfData.length;
totalQuestionsElement.textContent = totalQuestions;

// Toggle Sections
mcqBtn.addEventListener('click', () => {
    mcqSection.classList.remove('hidden');
    tfSection.classList.add('hidden');
    mcqBtn.classList.add('bg-blue-700');
    tfBtn.classList.remove('bg-blue-700');
});

tfBtn.addEventListener('click', () => {
    tfSection.classList.remove('hidden');
    mcqSection.classList.add('hidden');
    tfBtn.classList.add('bg-blue-700');
    mcqBtn.classList.remove('bg-blue-700');
});

// Render MCQ Questions
function renderMcqQuestions() {
    mcqQuestionsContainer.innerHTML = '';
    mcqData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('p-4', 'bg-gray-50', 'rounded-lg', 'border', 'border-gray-200');
        questionDiv.innerHTML = `
            <p class="font-medium mb-2">${index + 1}. ${item.question}</p>
            <div class="space-y-2">
                ${item.options.map((opt, i) => `
                    <div class="option p-2 border border-gray-300 rounded-lg" data-q="${index}" data-a="${i}">
                        ${String.fromCharCode(65 + i)}) ${opt}
                    </div>
                `).join('')}
            </div>
            <p id="feedback-mcq-${index}" class="mt-2"></p>
        `;
        mcqQuestionsContainer.appendChild(questionDiv);
    });
}

// Render True/False Questions
function renderTfQuestions() {
    tfQuestionsContainer.innerHTML = '';
    tfData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('p-4', 'bg-gray-50', 'rounded-lg', 'border', 'border-gray-200');
        questionDiv.innerHTML = `
            <p class="font-medium mb-2">${index + 1}. ${item.question}</p>
            <div class="flex space-x-4">
                <div class="option p-2 border border-gray-300 rounded-lg w-1/2 text-center" data-q="${index}" data-a="true">True</div>
                <div class="option p-2 border border-gray-300 rounded-lg w-1/2 text-center" data-q="${index}" data-a="false">False</div>
            </div>
            <p id="feedback-tf-${index}" class="mt-2"></p>
        `;
        tfQuestionsContainer.appendChild(questionDiv);
    });
}

// Real-time Correction for MCQ
mcqQuestionsContainer.addEventListener('click', (e) => {
    const target = e.target.closest('.option');
    if (!target) return;
    const qIndex = parseInt(target.dataset.q);
    if (answeredMcq.has(qIndex)) return;
    const aIndex = parseInt(target.dataset.a);
    const feedback = document.getElementById(`feedback-mcq-${qIndex}`);
    const options = target.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.add('disabled-option'));
    answeredMcq.add(qIndex);
    if (aIndex === mcqData[qIndex].correct) {
        feedback.textContent = "Correct! Good job!";
        feedback.classList.add('feedback-correct');
        feedback.classList.remove('feedback-incorrect');
        currentScore++;
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${String.fromCharCode(65 + mcqData[qIndex].correct)}) ${mcqData[qIndex].options[mcqData[qIndex].correct]}`;
        feedback.classList.add('feedback-incorrect');
        feedback.classList.remove('feedback-correct');
    }
    scoreElement.textContent = currentScore;
});

// Real-time Correction for True/False
tfQuestionsContainer.addEventListener('click', (e) => {
    const target = e.target.closest('.option');
    if (!target) return;
    const qIndex = parseInt(target.dataset.q);
    if (answeredTf.has(qIndex)) return;
    const aValue = target.dataset.a === 'true';
    const feedback = document.getElementById(`feedback-tf-${qIndex}`);
    const options = target.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.add('disabled-option'));
    answeredTf.add(qIndex);
    if (aValue === tfData[qIndex].correct) {
        feedback.textContent = "Correct! Good job!";
        feedback.classList.add('feedback-correct');
        feedback.classList.remove('feedback-incorrect');
        currentScore++;
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${tfData[qIndex].correct ? 'True' : 'False'}`;
        feedback.classList.add('feedback-incorrect');
        feedback.classList.remove('feedback-correct');
    }
    scoreElement.textContent = currentScore;
});

// Initialize the app
renderMcqQuestions();
renderTfQuestions();
mcqBtn.click(); // Default to MCQ view