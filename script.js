const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️ Світла тема';
    } else {
        toggleBtn.textContent = '🌙 Темна тема';
    }
});