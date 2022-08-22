// Budget Calculations sidebar
function getFieldValue(elemenID) {
  const perPlayerField = document.getElementById(elemenID);
  const perPlayerFieldInner = perPlayerField.value;
  const perPlayerFieldFloat = parseFloat(perPlayerFieldInner);
  return perPlayerFieldFloat;
}

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
    
  });
