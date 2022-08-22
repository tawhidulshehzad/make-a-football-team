function playeradd() {
  console.log("click");
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
