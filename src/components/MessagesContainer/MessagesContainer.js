import * as React from 'react';
import axios from 'axios';
import './MessagesContainer.css';

export default function MessagesContainer(props) {
    const [userInput, setUserInput] = React.useState('');
    const [messages, setMessages] = React.useState([]);
    const [responses, setResponses] = React.useState([]);

    React.useEffect(
        () => {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    handleSendMessages();
                }
            });
        },
        [],
    )

    React.useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const lastMessage = messages[messages.length - 1];
                    const apiUrl = `http://localhost:4000?question=${lastMessage}`;
                    const newResponse = await axios(apiUrl);
                    console.log(newResponse.data);
                    const allResponses = [...responses, newResponse.data];
                    setResponses(allResponses);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        },
        [messages],
    );

    const handleUserInputChange = (textInput) => {
        setUserInput(textInput);
    };

    const handleSendMessages = () => {
        console.log(userInput);
        const allMessages = [...messages, userInput];
        setMessages(allMessages);
        setUserInput('');
    };

    return (
        <div className="messages-container">
            <div className="all-messages">
                {messages.map((message, index) => {
                    const response = responses[index + 1];
                    return (
                        <div>
                            <p className="user-message">{message}</p>
                            <p className="ai-response">{response}</p>
                        </div>
                    );
                })}
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
                    onClick={() => handleSendMessages()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
