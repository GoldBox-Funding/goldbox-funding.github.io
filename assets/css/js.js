const twoPhasePhaseOneData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Max Drawdown", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Maximum Daily Loss", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "X", second: "X", third: "X", fourth: "X" },
];

const twoPhasePhaseTwoData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "6%", second: "6%", third: "6%", fourth: "6%" },
  { id: "Max Drawdown", first: "8%", second: "8%", third: "8%", fourth: "8%" },
  { id: "Maximum Daily Loss", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "X", second: "X", third: "X", fourth: "X" },
];

const threePhasePhaseOneData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Max Drawdown", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Maximum Daily Loss", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "X", second: "X", third: "X", fourth: "X" },
];

const threePhasePhaseTwoData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "6%", second: "6%", third: "6%", fourth: "6%" },
  { id: "Max Drawdown", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Maximum Daily Loss", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "X", second: "X", third: "X", fourth: "X" },
];

const threePhasePhaseThreeData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "6%", second: "6%", third: "6%", fourth: "6%" },
  { id: "Max Drawdown", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Maximum Daily Loss", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "100%", second: "100%", third: "100%", fourth: "100%" },
];

const fundedData = [
  { id: "Trading Period", first: "Unlimited", second: "Unlimited", third: "Unlimited", fourth: "Unlimited" },
  { id: "Profit Target", first: "10%", second: "10%", third: "10%", fourth: "10%" },
  { id: "Max Drawdown", first: "4%", second: "4%", third: "4%", fourth: "4%" },
  { id: "Maximum Daily Loss", first: "10%", second: "10%", third: "10%%", fourth: "10%" },
  { id: "Drawdown Type", first: "Equity & Balance", second: "Equity & Balance", third: "Equity & Balance", fourth: "Equity & Balance" },
  { id: "Profit Split", first: "100%", second: "100%", third: "100%", fourth: "100%" },
];

function populateTable(phaseData) {
  const tbody = document.querySelector("#contentTable tbody");
  tbody.innerHTML = '';

  phaseData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <th style="text-align:left!important;vertical-align: middle;color:#26d3f7;font-weight:700!important;" class="side-head" scope="row">${item.id}</th>
          <td>${item.first}</td>
          <td>${item.second}</td>
          <td>${item.third}</td>
          <td>${item.fourth}</td>
      `;
      tbody.appendChild(row);
  });
}



function toggleActiveStatus(button, buttons) {
  buttons.forEach((btn) => {
      btn.classList.remove("active-form-button");
  });
  button.classList.add("active-form-button");
}

function togglePhaseButtonsVisibility(phase) {
  const twoPhaseDiv = document.querySelector("#2phasebuttons");
  const threePhaseDiv = document.querySelector("#3phasebuttons");

  if (phase === "2phase") {
    twoPhaseDiv.style.display = "block";
    threePhaseDiv.style.display = "none";
  } else if (phase === "3phase") {
    twoPhaseDiv.style.display = "none";
    threePhaseDiv.style.display = "block"; 
    threePhaseDiv.style.setProperty("display", "block", "important");
  }
}

const twoPhaseBtn = document.querySelector("#twoPhaseBtn");
const threePhaseBtn = document.querySelector("#threePhaseBtn");
const fundedBtn = document.querySelector("#fundedBtn");

twoPhaseBtn.addEventListener("click", () => {
  populateTable(twoPhasePhaseOneData);
  toggleActiveStatus(twoPhaseBtn, [twoPhaseBtn, threePhaseBtn, fundedBtn]);
  document.querySelector("#phaseThreeBtn").style.display = "none";
  document.querySelector("#fundedBtn").style.display = "inline-block";
  togglePhaseButtonsVisibility("2phase");
});

threePhaseBtn.addEventListener("click", () => {
  populateTable(threePhasePhaseOneData);
  toggleActiveStatus(threePhaseBtn, [twoPhaseBtn, threePhaseBtn, fundedBtn]);
  document.querySelector("#phaseThreeBtn").style.display = "inline-block";
  document.querySelector("#fundedBtn").style.display = "inline-block";
  togglePhaseButtonsVisibility("3phase");
});

const phaseOneBtn = document.querySelector("#phaseOneBtn");
const phaseTwoBtn = document.querySelector("#phaseTwoBtn");
const phaseThreeBtn = document.querySelector("#phaseThreeBtn");

phaseOneBtn.addEventListener("click", () => {
  if (twoPhaseBtn.classList.contains("active-form-button")) {
    populateTable(twoPhasePhaseOneData);
  } else if (threePhaseBtn.classList.contains("active-form-button")) {
    populateTable(threePhasePhaseOneData);
  }
  toggleActiveStatus(phaseOneBtn, [phaseOneBtn, phaseTwoBtn, phaseThreeBtn, fundedBtn]);
});

phaseTwoBtn.addEventListener("click", () => {
  if (twoPhaseBtn.classList.contains("active-form-button")) {
    populateTable(twoPhasePhaseTwoData);
  } else if (threePhaseBtn.classList.contains("active-form-button")) {
    populateTable(threePhasePhaseTwoData);
  }
  toggleActiveStatus(phaseTwoBtn, [phaseOneBtn, phaseTwoBtn, phaseThreeBtn, fundedBtn]);
});

phaseThreeBtn.addEventListener("click", () => {
  if (threePhaseBtn.classList.contains("active-form-button")) {
    populateTable(threePhasePhaseThreeData);
  }
  toggleActiveStatus(phaseThreeBtn, [phaseOneBtn, phaseTwoBtn, phaseThreeBtn, fundedBtn]);
});

fundedBtn.addEventListener("click", () => {
  populateTable(fundedData);
  toggleActiveStatus(fundedBtn, [phaseOneBtn, phaseTwoBtn, phaseThreeBtn, fundedBtn]);
});

populateTable(twoPhasePhaseOneData);
toggleActiveStatus(twoPhaseBtn, [twoPhaseBtn, threePhaseBtn, fundedBtn]);
toggleActiveStatus(phaseOneBtn, [phaseOneBtn, phaseTwoBtn, phaseThreeBtn, fundedBtn]);
document.querySelector("#phaseThreeBtn").style.display = "none";

