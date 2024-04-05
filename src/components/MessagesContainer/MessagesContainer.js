import * as React from 'react';
import './MessagesContainer.css';

export default function MessagesContainer(props) {
    return (
        <div className="messages-container">
            <div className="text-input-container">
                <input type="text" className="text-input-field" />
                <button className="send-button">Send</button>
            </div>
        </div>
    );
}
