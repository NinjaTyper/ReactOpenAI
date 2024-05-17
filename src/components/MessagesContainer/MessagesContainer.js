import * as React from 'react';
import { getResponse } from '../OpenAI/OpenAIHelper';
import './MessagesContainer.css';

export default function MessagesContainer(props) {
    const [userInput, setUserInput] = React.useState('');
    const [messages, setMessages] = React.useState([]);
    const [responses, setResponses] = React.useState([]);

    const handleUserInputChange = (textInput) => {
        setUserInput(textInput);
    };

    const handleSendMessages = async (newMessage) => {
        const newResponse = await getResponse(newMessage);
        const allResponses = [...responses, newResponse];
        const allMessages = [...messages, newMessage];
        setMessages(allMessages);
        setResponses(allResponses);
        setUserInput('');
    };

    return (
        <div className="messages-container">
            <div className="all-messages">
                {messages.map((message) => <p>{message}</p>)}
            </div>
            <div className="all-responses">
                {responses.map((response) => <p>{response}</p>)}
            </div>
            <div className="text-input-container">
                <input 
                    type="text" 
                    className="text-input-field"
                    onChange={(e) => handleUserInputChange(e.target.value)}
                    value={userInput}
                />
                <button 
                    className="send-button"
                    onClick={() => handleSendMessages(userInput)}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
