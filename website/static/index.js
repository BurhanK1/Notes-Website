function deleteNote(noteId) {
fetch("/delete-note", {
method: "POST",
body: JSON.stringify({ noteId: noteId }),
}).then((_res) => {
window.location.href = "/";
});
}
function changeTheme(theme) {
  console.log("Changing theme to:", theme);
  // Save the selected theme for the user (you can use cookies, local storage, or a server-side approach)
  // For simplicity, let's use local storage here
  localStorage.setItem('userTheme', theme);

  // Apply the selected theme to the body
  document.body.className = '';  // Reset the class
  document.body.classList.add(theme);  // Add the class corresponding to the selected theme
}

// On page load, check if the user has a saved theme and apply it
document.addEventListener('DOMContentLoaded', function () {
  var savedTheme = localStorage.getItem('userTheme');
  if (savedTheme) {
      document.body.classList.add(savedTheme);
  }
});