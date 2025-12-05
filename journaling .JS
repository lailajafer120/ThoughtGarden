
const g1 = document.getElementById("gratitude1");
const g2 = document.getElementById("gratitude2");
const g3 = document.getElementById("gratitude3");
const g4 = document.getElementById("gratitude4");


const saveBtn = document.getElementById("save-journal");
const saveMessage = document.getElementById("save-message");


saveBtn.addEventListener("click", () => {
    const journalData = {
        gratitude1: g1.value,
        gratitude2: g2.value,
        gratitude3: g3.value,
        gratitude4: g4.value
    };

    localStorage.setItem("dailyJournal", JSON.stringify(journalData));


    saveMessage.textContent = "Journal saved successfully!";
    saveMessage.style.opacity = "1";

    setTimeout(() => {
        saveMessage.style.opacity = "0";
    }, 2000);
});

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem("dailyJournal"));
    if (!saved) return;

    g1.value = saved.gratitude1 || "";
    g2.value = saved.gratitude2 || "";
    g3.value = saved.gratitude3 || "";
    g4.value = saved.gratitude4 || "";
};
