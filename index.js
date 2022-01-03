const maxLevelButton = document.getElementById("maxLevel")
const setMaxLevel = () => {
    const levelForm = document.getElementById("level")
    levelForm.value = 90
}
maxLevelButton.addEventListener("click", setMaxLevel)