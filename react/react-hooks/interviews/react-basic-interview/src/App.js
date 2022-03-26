import {useEffect, useState} from "react";

const axios = require('axios');

const url = 'https://randomuser.me/api'

const displayUsers = (users) => {
    if (users.length === 0) {
        return;
    }
    return (
        users.map((user) =>
            <div>
                {user.name.title} {user.name.first} {user.name.last}
                <img src={user.picture.thumbnail} alt="alt picture"/>
            </div>
        )
    );
}

const fetchRandomDataStr = (url) => {
    return axios.get(url)
        .then(resp => {
            return JSON.stringify(resp.data, null, 2);
        })
        .catch((err) => {
            console.log("err is: ", err);
        });
}

const App = () => {
    const [counter, setCounter] = useState(0);
    const [dataStr, setDataStr] = useState(null);

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect( () => {
        const myFetch = async () => {
            const data = await fetchRandomDataStr(url);
            console.log("useEffect: data is: ", data);
            setDataStr(data);
            const dataObj = JSON.parse(data);
            setUsers([dataObj.results[0]]);
        };
        myFetch()
            .catch(console.error);
    }, []);


    useEffect( () => {
        const myFetch = async () => {
            const data = await fetchRandomDataStr(`${url}?page=${page}`);
            console.log("useEffect [page]: data is: ", data);
            setDataStr(data);
            const dataObj = JSON.parse(data);
            setUsers(users => [...users, dataObj.results[0]]);
        };
        myFetch()
            .catch(console.error);
    }, [page]);


    return (
        <>
            <h1>Beginner interview app</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment counter</button>

            <button onClick={async () => {
                const data = await fetchRandomDataStr(`${url}?page=${page}`);
                console.log(data);
                setDataStr(data);
                const dataObj = JSON.parse(data);
                setUsers([dataObj.results[0]]);
            }}>Fetch first data</button>

            <button onClick={() => setPage(page + 1)}>Fetch next page</button>

            {displayUsers(users)}
            <h1>Raw initial data</h1>
            <pre>{dataStr? dataStr: null}</pre>
        </>
    );
};

export default App;
