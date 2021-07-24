import React, {useEffect, useState} from "react";
import User from "./User";

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
          <h1>Hello World</h1>
          <span data-testid="mySpan">this is a span</span>
          <ul className="animals">
              <li>Cat</li>
              <li>Whale</li>
              <li>Lion</li>
              <li>elephant</li>
              <li>Rhino</li>
          </ul>

          <ul className="pets">
              <li>dog</li>
          </ul>

          <div>
              {user ? <User user={user} /> : <span>Loading...</span>}
          </div>
      </>
  );
};

export default App;
