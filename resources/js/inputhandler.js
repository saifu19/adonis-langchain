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


