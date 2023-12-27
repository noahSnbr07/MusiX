// Message.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/components/message.css';

export default function Message({ message }) {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div style={{ display: isVisible ? 'block' : 'none' }} className="modal-body">
            <p>
                {message}
            </p>
        </div>
    );
}
