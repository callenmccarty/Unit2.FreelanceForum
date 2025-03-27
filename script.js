// Freelancers initial data
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
  ];
  
  // Function to calculate and update the average starting price
  function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / freelancers.length;
    document.getElementById("average-price").textContent = `Average Starting Price: $${average.toFixed(2)}`;
  }
  
  // Function to add a new freelancer and update the list and average price
  function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
  
    const freelancerList = document.getElementById("freelancer-list");
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    freelancerDiv.innerHTML = `
      <span>Name: ${name}</span>
      <span>Occupation: ${occupation}</span>
      <span>Starting Price: $${price}</span>
    `;
    freelancerList.appendChild(freelancerDiv);
  
    updateAveragePrice(); // Update the average price after adding a new freelancer
  }
  
  // Simulating the addition of new freelancers every few seconds
  setTimeout(() => {
    addFreelancer("Carol", "Programmer", 70); // Carol appears after 3 seconds
  }, 3000);
  
  setTimeout(() => {
    addFreelancer("Dave", "Designer", 40); // Dave appears after 6 seconds
  }, 6000);
  
  setTimeout(() => {
    addFreelancer("Eve", "Photographer", 60); // Eve appears after 9 seconds
  }, 9000);
  
  // Initial average price update
  updateAveragePrice();