document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form from submitting
  let inputValue = document.querySelector('input').value;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    });

    // Check if response is not ok
    if (!response.ok) {
      const errorText = await response.text(); // Get the error message
      console.error('Server error:', errorText); // Log the server response
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('AI Reply:', data.reply); // Log or display the response from the AI
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
});


