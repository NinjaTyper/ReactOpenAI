// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {OPENAI_API_KEY} from './config/openai.js';
function Openai() {
  const [response, setResponse] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [{role: 'system', content: `hi`}],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer`,
            },
          }
        );
        setResponse(response.data.choices[0].text);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>OpenAI React Demo</h1>
      <p>{response}</p>
    </div>
  );
}
export default Openai;