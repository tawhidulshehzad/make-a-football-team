const playerArray = [];

function getPlayer(player) {
  // console.log(player);
  const tableBody = document.getElementById("player-list");
  tableBody.innerHTML = "";
  for (let i = 0; i < player.length; i++) {
    if (i < 5) {
      const pName = playerArray[i].playerName;

      const tr = document.createElement("tr");
      tr.innerHTML = `
      <th>${i + 1}</th>
      <td>${pName}</td>
    `;
      tableBody.appendChild(tr);
    } else {
      return alert("You can not add more than five players");
    }
  }
}

function DisableNextButton(btnId) {
  const disableButton = document.getElementById(btnId);
  document.getElementById(btnId).disabled = "true";
  disableButton.style.background = "gray";
}

function playeradd(elemenButton) {
  const playerName = elemenButton.parentNode.children[0].innerText;
  const playerId = elemenButton.id;
  const playerObj = { playerName: playerName };
  playerArray.push(playerObj);
  // console.log(playerArray);
  getPlayer(playerArray);
  DisableNextButton(playerId);
}

// Budget calculation starts
document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerFunction = getFieldValue("per-player-field");
  const playerPrice = perPlayerFunction * 5;
  const playerExpense = document.getElementById("player-expenses");
  playerExpense.innerText = playerPrice;
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerFieldValue = getFieldValue("manager-field");
    const coachFieldValue = getFieldValue("coach-field");
    const playerExpenseAmount = document.getElementById("player-expenses");
    const getPlayerExpenseAmount = playerExpenseAmount.innerText;
    const getPlayerExpenseFloat = parseFloat(getPlayerExpenseAmount);
    const calculateTotalCost =
      managerFieldValue + coachFieldValue + getPlayerExpenseFloat;
    // final TotalCost
    const finalTotalCost = document.getElementById("final-total");
    finalTotalCost.innerText = calculateTotalCost;
  });
