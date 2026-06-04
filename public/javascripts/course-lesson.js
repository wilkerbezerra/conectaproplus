const checkbox = document.getElementById("lessonCheck");
const statusMsg = document.getElementById("statusMsg");
const lessonKey = "lesson_completed_" + window.location.pathname;
const checklist = document.querySelector(".completion-checklist");
const label = document.querySelector(".checkbox-label");

function updateStatus() {
  if (checkbox.checked) {
    statusMsg.textContent = "Concluído!";
    checklist.classList.add("completed");
    label.classList.add("completed");
    statusMsg.classList.add("completed");
  } else {
    statusMsg.textContent = "Pendente";
    checklist.classList.remove("completed");
    label.classList.remove("completed");
    statusMsg.classList.remove("completed");
  }
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem(lessonKey);
  checkbox.checked = saved === "true";
  updateStatus();
});

checkbox.addEventListener("change", () => {
  localStorage.setItem(
    lessonKey,
    checkbox.checked
  );
  updateStatus();
});

const avatar = document.getElementById('user-avatar');
const logoutMenu = document.getElementById('logout-menu');
avatar.addEventListener('click', () => {

  if (
    logoutMenu.style.display === 'block'
  ) {
    logoutMenu.style.display = 'none';
  } else {
    logoutMenu.style.display = 'block';
  }
});

document.addEventListener('click', (event) => {
  if (
    !avatar.contains(event.target) &&
    !logoutMenu.contains(event.target)
  ) {
    logoutMenu.style.display = 'none';
  }
});
