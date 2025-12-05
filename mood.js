
const emojis = document.querySelectorAll('.emoji');
const moodResponse = document.getElementById('mood-response');
const activityInput = document.getElementById('activity');
const causeInput = document.getElementById('cause');


const moodMessages = {
    happy: "You're feeling happy — cherish this glow!",
    content: "You're feeling calm and content — a peaceful place to be.",
    neutral: "You're feeling neutral — balanced and steady.",
    sad: "You're feeling sad — be gentle with yourself today.",
    angry: "You're feeling angry — take a moment to breathe."
};


emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
       
        emojis.forEach(e => e.style.transform = 'scale(1)');
        emojis.forEach(e => e.style.opacity = '0.5');

       
        emoji.style.transform = 'scale(1.4)';
        emoji.style.opacity = '1';

        const selectedMood = emoji.dataset.mood;

       
        moodResponse.textContent = moodMessages[selectedMood];

        saveMood(selectedMood);
    });
});


function saveMood(mood) {
    const data = {
        mood: mood,
        activity: activityInput.value,
        cause: causeInput.value
    };
    localStorage.setItem("moodData", JSON.stringify(data));
}


activityInput.addEventListener("input", () => saveMood(getSavedMood()?.mood));
causeInput.addEventListener("input", () => saveMood(getSavedMood()?.mood));


function getSavedMood() {
    return JSON.parse(localStorage.getItem("moodData"));
}


window.onload = () => {
    const saved = getSavedMood();
    if (!saved) return;

  
    emojis.forEach(emoji => {
        if (emoji.dataset.mood === saved.mood) {
            emoji.style.transform = 'scale(1.4)';
            emoji.style.opacity = '1';
            moodResponse.textContent = moodMessages[saved.mood];
        } else {
            emoji.style.opacity = '0.5';
        }
    });

 
    activityInput.value = saved.activity || "";
    causeInput.value = saved.cause || "";
};

const saveBtn = document.getElementById("save-btn");
const saveStatus = document.getElementById("save-status");

saveBtn.addEventListener("click", () => {
    const savedMood = getSavedMood()?.mood || null;

    const data = {
        mood: savedMood,
        activity: activityInput.value,
        cause: causeInput.value
    };

    localStorage.setItem("moodData", JSON.stringify(data));


    saveStatus.textContent = "Reflections saved successfully!";
    saveStatus.style.opacity = "1";


    setTimeout(() => {
        saveStatus.style.opacity = "0";
    }, 2000);
});
