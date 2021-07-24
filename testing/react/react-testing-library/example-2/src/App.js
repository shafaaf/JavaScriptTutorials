import React, {useEffect, useState} from "react";
import User from "./User";
import DifferentElements from "./DifferentElements";

const App = () => {
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
    return (
      <>
          <DifferentElements />
          {user ? <User user={user} /> : <span>Loading...</span>}
      </>
  );
};

export default App;
