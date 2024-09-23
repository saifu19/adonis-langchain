// // import Env from '@adonisjs/core/env'

// import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage } from "@langchain/core/messages";


// const model = new ChatOpenAI({
//   apiKey,
//   model: "gpt-4o-mini",
//   temperature: 0
// });

// // const apiKey = Env.get('OPENAI_API_KEY')





// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting
//     let inputValue = document.querySelector('input').value;
//     console.log(inputValue); // Handle the input value as needed
//     // You can send an AJAX request here if needed

    
//     const response = model.invoke([new HumanMessage({ content: inputValue })]);
//     console.log(response.text);


// });


// document.querySelector('form').addEventListener('submit', async function(event) {
//   event.preventDefault(); // Prevent form from submitting
//   let inputValue = document.querySelector('input').value;
//   console.log(inputValue); // Handle the input value as needed
  
//   // Fetch request to OpenAI's API

//   const response = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-4", // or the appropriate model
//       messages: [{ role: "user", content: inputValue }]
//     })
//   });

//   const data = await response.json();
//   console.log(data.choices[0].message.content);
// });

// async function getCsrfToken() {
//   const response = await fetch('/csrf-token');
//   const data = await response.json();
//   return data.token;
// }

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




