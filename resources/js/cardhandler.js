// Add event listeners for each card
document.getElementById('card-0').addEventListener('click', function() {
    handleCardClick(0);
  });

  document.getElementById('card-1').addEventListener('click', function() {
    handleCardClick(1);
  });

  document.getElementById('card-2').addEventListener('click', function() {
    handleCardClick(2);
  });

  document.getElementById('card-3').addEventListener('click', function() {
    handleCardClick(3);
  });

  document.getElementById('card-4').addEventListener('click', function() {
    handleCardClick(4);
  });

  document.getElementById('card-5').addEventListener('click', function() {
    handleCardClick(5);
  });

  function handleCardClick(index) {
    console.log("Card clicked: " + index);
    // Add your custom logic here
  }