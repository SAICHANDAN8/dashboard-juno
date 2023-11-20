// Function to fetch and load JSON data
function fetchData() {
    return fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to switch between tabs
  function switchTab(tab) {
    fetchData().then(data => {
      const userList = document.getElementById('userList');
      userList.innerHTML = '';
  
      const users = data[tab];
  
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
  
        const userName = document.createElement('p');
        userName.textContent = `Name: ${user.name}`;
  
        const status = document.createElement('p');
        status.textContent = `Status: ${user.status}`;
  
        const riskLevel = document.createElement('p');
        riskLevel.textContent = `Risk Level: ${user.riskLevel}`;
  
        userCard.appendChild(userName);
        userCard.appendChild(status);
        userCard.appendChild(riskLevel);
  
        userList.appendChild(userCard);
      });
    });
  }
  
  // Example usage
  document.addEventListener('DOMContentLoaded', () => {
    const pendingTab = document.getElementById('pendingTab');
    const completedTab = document.getElementById('completedTab');
  
    pendingTab.addEventListener('click', () => switchTab('pending'));
    completedTab.addEventListener('click', () => switchTab('completed'));
  
    // Initialize with "Pending" tab
    switchTab('pending');
  });
  