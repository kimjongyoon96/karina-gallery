import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const fetchCuteMessage = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3004');
      const data = await response.json();
      const cute = JSON.stringify(data);
      setMessage(cute);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setMessage('Error fetching data');
    }
  };

  return (
    <div>
      <button onClick={fetchCuteMessage}> Cute Message</button>
      <p>{message}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
