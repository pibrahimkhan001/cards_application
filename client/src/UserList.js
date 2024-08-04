import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Fetch users from the Express API endpoint
        fetch('http://localhost:7000/users') // Replace with your API URL
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Filter users based on the input value
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user.name}</li> 
                ))}
            </ul>
        </div>
    );
}

export default UserList;
