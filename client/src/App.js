import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users') // API URL for backend
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
        <h1 className="headline">Cards of Users</h1>
        <div className="card-grid">
            {users.map(user => (
                <Card 
                    key={user.id}
                    image={user.image}
                    title={user.title}
                    name={user.name}
                    email={user.email}
                />
            ))}
        </div>
        </>
    );
}

export default App;
