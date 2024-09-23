function displayAIResponse(responseText) {

  const aiMessage = document.createElement('div');
  aiMessage.classList.add('ai-reply');
  aiMessage.innerHTML = `${responseText}`;

  aiMessage.classList.add('active');
  // Append the AI message to the chat container
  document.getElementById('chat-container').appendChild(aiMessage);
  
  document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight;
}

document.getElementById('chat-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form from submitting

  const inputValue = document.getElementById('user-input').value; // Get the input value
  console.log('User Input:', inputValue); // Log the user input

  // Show the user's input on the page
  // const userInputDisplay = document.getElementById('user-input-display');
  // userInputDisplay.innerHTML = `${inputValue}`;
  // userInputDisplay.classList.add('active');

  // Create user input message
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-input-display');
  userMessage.innerText = `${inputValue}`;
  userMessage.classList.add('active');

  // Append the user message to the chat container
  document.getElementById('chat-container').appendChild(userMessage);
  // const csrfToken = await getCsrfToken(); // Get the CSRF token


  // Hide the cards container
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.style.display = 'none';

  try {
    console.log('Sending request to:', 'http://localhost:3333/api/chat');

    const response = await fetch('http://localhost:3333/api/chat', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': csrfToken, 
      },
      body: JSON.stringify({ message: inputValue }), // Send the input value as JSON
    });

    document.getElementById('user-input').value = '';
    console.log('Response status:', response.status); // Log response status
    console.log('Response URL:', response.url); // Log response URL

    if (response.headers.get('content-type')?.includes('application/json')) {
      const data = await response.json();
      console.log('AI Reply:', data.reply); // Log or display the AI's response
      // Display the AI reply on the front end
      displayAIResponse(data.reply);
      // Clear the input
    
    } else {
      const text = await response.text(); // Handle non-JSON response
      console.error('Non-JSON response:', text);
    }
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
});




