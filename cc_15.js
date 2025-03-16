// Task 1: Creating the Base Structure

const riskDashboard = document.getElementById("riskDashboard"); 
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically

function createParagraph(label, value) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `<strong>${label}:</strong> ${value}`; // creates paragraph elements
    return paragraph;
  }
  
  function generateRiskCardContent(riskName, riskLevel, department) {
    const cardContent = document.createElement("div");
    cardContent.appendChild(createParagraph("Risk Name", riskName)); // adds risk name
    cardContent.appendChild(createParagraph("Risk Level", riskLevel)); // adds risk level
    cardContent.appendChild(createParagraph("Department", department)); // adds department

    const resolveButton = document.createElement("button"); // adds resolve button
    resolveButton.className = "resolveButton";
    resolveButton.textContent = "Resolve";
    cardContent.appendChild(resolveButton);
  
    return cardContent;
  }
  
  function addRiskItem(riskName, riskLevel, department) { // creates and appends risk card contents 
    const riskCard = document.createElement("div");
    riskCard.className = "riskCard";
    const cardContent = generateRiskCardContent(riskName, riskLevel, department);
    riskCard.appendChild(cardContent);
  
    riskDashboard.appendChild(riskCard);
  }
  document.getElementById("riskForm").addEventListener("submit", function (e) { //adds event listener
    e.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department);
    this.reset(); // clears the form
  });

  // Task 3: Removing Risk Items

  function addRiskItem(riskName, riskLevel, department) { // adds risk items
    const riskCard = document.createElement("div"); 
    riskCard.className = "riskCard";

    const cardContent = generateRiskCardContent(riskName, riskLevel, department); // creates and appends card content
  riskCard.appendChild(cardContent);

  riskDashboard.appendChild(riskCard);

  const resolveButton = riskCard.querySelector(".resolveButton"); // adds event listener to the resolve button
  resolveButton.addEventListener("click", function () {
    riskDashboard.removeChild(riskCard);
  });
}

// Task 4: Categorizing Risks by Level

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.className = "riskCard";

    const cardContent = generateRiskCardContent(riskName, riskLevel, department); // establishing background color
  riskCard.appendChild(cardContent);
  if (riskLevel === "Low") {
    riskCard.style.backgroundColor = "lightgreen"; // low risk
  } else if (riskLevel === "Medium") {
    riskCard.style.backgroundColor = "lightyellow"; // medium risk
  } else if (riskLevel === "High") {
    riskCard.style.backgroundColor = "lightcoral"; // high risk
  }

  riskDashboard.appendChild(riskCard);
  const resolveButton = riskCard.querySelector(".resolveButton"); // resolve button
  resolveButton.addEventListener("click", function () {
    riskDashboard.removeChild(riskCard);
  });
}
