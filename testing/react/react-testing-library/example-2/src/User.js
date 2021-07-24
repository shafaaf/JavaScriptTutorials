import React, {useEffect, useState} from "react";

const User = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((user) => setUser(user))
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return <span>{error}</span>;
    }

    if (user) {
        return (
            <div className="person">
                <h1>Api call:</h1>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
            </div>);
    }
    return (
         <span>Loading...</span>
	);
};

export default User;
