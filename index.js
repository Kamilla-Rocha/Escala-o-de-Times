function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = documentById("numeber").value;

  const confirmation = confirm("Escala" + name + "como" + position + "?");

  if (confirmation) {
    const teamlist = document.getElementById("teamList");
    const playerItem = document.getElementById("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + " " + name + "(" + number + ")";
    teamlist.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removerPlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToremove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador" + playerToRemove.innerText + " ?"
  );

  if (confirmation) {
    document.getElementById("teamList").removeChild(playerToremove);
    document.getElementById("numberToRemove").value = " ";
  }
}
