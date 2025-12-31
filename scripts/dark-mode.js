const darkSwitch = document.getElementById("darkModeSwitch");

darkSwitch.addEventListener("change", () => {
  if (darkSwitch.checked) {
    // 🌙 Dark Mode
    document.documentElement.style.setProperty('--background-color', '#2A1835');
    document.documentElement.style.setProperty('--accessible-green', '#3c8c59');
    document.documentElement.style.setProperty('--accessible-pink', '#845EC2');
    document.documentElement.style.setProperty('--accessible-blue', '#7d8fbe');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--white', '#1b1326');
    document.documentElement.style.setProperty('--light-green', '#3c4a3f');
  } else {
    // 🌞 Light Mode
    document.documentElement.style.setProperty('--background-color', '#f6ebeb');
    document.documentElement.style.setProperty('--accessible-green', '#4caf50');
    document.documentElement.style.setProperty('--accessible-pink', '#e87aa3');
    document.documentElement.style.setProperty('--accessible-blue', '#3c44de');
    document.documentElement.style.setProperty('--text-color', '#212121');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--light-green', '#ebf6ef');
  }
});
