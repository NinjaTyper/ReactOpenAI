import * as React from 'react';
import './MessagesContainer.css';

export default function MessagesContainer(props) {
    const [userInput, setUserInput] = React.useState('');
    const [messages, setMessages] = React.useState([]);
    console.log('list of messages', messages);
    console.log('current user input', userInput);

    const handleUserInputChange = (textInput) => {
        setUserInput(textInput);
    };

    const handleSendMessages = (newMessage) => {
        const allMessages = [...messages, newMessage];
        setMessages(allMessages);
        setUserInput('');
    };

    return (
        <div className="messages-container">
            <div className="all-messages">
                {messages.map((message) => <p>{message}</p>)}
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
