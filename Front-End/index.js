// // Sample data for the leaderboard (replace with your actual data)
// const leaderboardData = [
//     { rank: 1, name: 'John', pushUpCount: 100 },
//     { rank: 2, name: 'Emily', pushUpCount: 80 },
//     { rank: 3, name: 'Alex', pushUpCount: 70 },
//   ];
  
//   // Get the table body element
//   const leaderboardBody = document.getElementById('leaderboard-body');
  
//   // Generate the table rows dynamically based on the leaderboard data
//   leaderboardData.forEach((item) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.rank}</td>
//       <td>${item.name}</td>
//       <td>${item.pushUpCount}</td>
//     `;
//     leaderboardBody.appendChild(row);
//   });

/////////////////////////////////////////////////////////////////

// Sample data for the leaderboard (replace with your actual data)
const leaderboardData = [
    { rank: 1, name: 'John', pushUpCount: 100 },
    { rank: 2, name: 'Emily', pushUpCount: 80 },
    { rank: 3, name: 'Alex', pushUpCount: 70 },
  ];
  
  // Function to update the leaderboard and total push-up count
  const updateLeaderboard = () => {
    // Get the table body element
    const leaderboardBody = document.getElementById('leaderboard-body');
  
    // Clear any existing rows
    leaderboardBody.innerHTML = '';
  
    // Generate the table rows dynamically based on the leaderboard data
    leaderboardData.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.rank}</td>
        <td>${item.name}</td>
        <td>${item.pushUpCount}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  
    // Calculate and update the total push-up count
    const totalPushUpCount = leaderboardData.reduce((total, member) => total + member.pushUpCount, 0);
    document.getElementById('count').textContent = totalPushUpCount;
  };
  
  // Call the updateLeaderboard function to initially populate the leaderboard and total count
  updateLeaderboard();
  