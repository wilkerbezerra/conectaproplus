let player;

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Esta função é chamada automaticamente pelo YouTube quando a API está pronta
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

// 3. Detecta mudanças no vídeo (Play, Pause, Acabou...)
function onPlayerStateChange(event) {
  // O estado '0' significa que o vídeo terminou (ENDED)
  if (event.data === YT.PlayerState.ENDED) {
    concluirAulaAutomaticamente();
  }
}

// 4. Função para marcar o checkbox (Separamos para poder usar no clique manual também)
function concluirAulaAutomaticamente() {
  const checkbox = document.getElementById("lessonCheck");
  if (!checkbox.checked) {
    checkbox.checked = true;
    // Dispara o evento manualmente para atualizar as cores e textos
    checkbox.dispatchEvent(new Event("change"));
  }
}

// 5. Lógica Padrão da Página (Carregamento do DOM)
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("lessonCheck");
  const statusMsg = document.getElementById("statusMsg");
  const label = document.querySelector(".checkbox-label");
  const container = document.querySelector(".completion-checklist");

  // Escuta a mudança do checkbox (seja por clique ou pelo vídeo)
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      statusMsg.textContent = "Concluído!";
      statusMsg.style.color = "green";
      statusMsg.style.fontWeight = "bold";
      label.style.textDecoration = "line-through";
      container.style.backgroundColor = "#e8f5e9";
      container.style.borderLeftColor = "#4caf50";
    } else {
      statusMsg.textContent = "Pendente";
      statusMsg.style.color = "#666";
      statusMsg.style.fontWeight = "normal";
      label.style.textDecoration = "none";
      container.style.backgroundColor = "#f0f8ff";
      container.style.borderLeftColor = "#009cb4";
    }
  });

  // Efeito visual nos módulos laterais
  //   const modules = document.querySelectorAll(".module-item");
  //   modules.forEach((mod) => {
  //      mod.addEventListener("click", () => {
  //        alert("Você clicou no " + mod.querySelector("span").innerText);
  //      });
  //   });
});
