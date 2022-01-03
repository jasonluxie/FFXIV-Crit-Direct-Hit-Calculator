// import levelData from './levelData'
const maxLevelButton = document.getElementById("maxLevel");
const critButton = document.getElementById("critButton");

const setMaxLevel = () => {
    const levelForm = document.getElementById("level");
    levelForm.value = 90;
};

const critCalculator = () => {
  const critStat = document.getElementById("crit")
  const levelForm = document.getElementById('level')
  const critResultPercent = document.getElementsByClassName('crit-result_percent')
  const critResultStrength = document.getElementsByClassName('crit-result_strength')
  const level = levelForm.value
  // get div/sub for formula
  const critRate = (200*((critStat.value-sub)/div)+50)/1000
  const critStrength = (200*((critStat.value-sub)/div)+1400)/1000
  critResultPercent.value = critRate
  critResultStrength.value = critStrength
};
critButton.addEventListener("click", critCalculator);
maxLevelButton.addEventListener("click", setMaxLevel);
