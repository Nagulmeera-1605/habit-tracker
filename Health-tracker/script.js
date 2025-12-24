// Show today's date
document.getElementById("date").innerText =
    "Date: " + new Date().toDateString();

// Load saved data
window.onload = function () {
    loadData();
    updateProgress();
};

function loadData() {
    document.getElementById("study").checked = localStorage.getItem("study") === "true";
    document.getElementById("gym").checked = localStorage.getItem("gym") === "true";
    document.getElementById("food").checked = localStorage.getItem("food") === "true";
    document.getElementById("sleep").checked = localStorage.getItem("sleep") === "true";
}

// Save habits
function saveHabits() {
    localStorage.setItem("study", document.getElementById("study").checked);
    localStorage.setItem("gym", document.getElementById("gym").checked);
    localStorage.setItem("food", document.getElementById("food").checked);
    localStorage.setItem("sleep", document.getElementById("sleep").checked);

    updateProgress();
    document.getElementById("msg").innerText = "Habits saved successfully ✅";
}

// Progress calculation
function updateProgress() {
    let total = 4;
    let completed = 0;

    if (document.getElementById("study").checked) completed++;
    if (document.getElementById("gym").checked) completed++;
    if (document.getElementById("food").checked) completed++;
    if (document.getElementById("sleep").checked) completed++;

    let percent = Math.round((completed / total) * 100);
    document.getElementById("progress").innerText =
        "Progress: " + percent + "%";
}
