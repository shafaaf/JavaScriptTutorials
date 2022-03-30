import './styles.css';

import {useEffect, useState} from "react";
const axios = require('axios');

const url = 'https://randomuser.me/api?results=20';

const App = () => {

    const flattenLocations = (users) => {
        const locations = users.map((user, i) => ({
            ...user.location
        }));
        console.log("flattenLocations: locations is: ", locations);
        const flattenedLocations = [];
        for (let location of locations) {
            const newLocationObj = {};
            for (let key of Object.keys(location)) {
                const temp = location[key];
                if (typeof temp === 'object') {
                    let str = '';
                    for (let key2 of Object.keys(temp)) {
                        str += `${key2}: ${temp[key2]}, `;

                    }
                    str = str.slice(0, -2);
                    newLocationObj[key] = str;
                } else {
                    newLocationObj[key] = location[key];
                }
            }
            flattenedLocations.push(newLocationObj);
        }
        console.log("flattenLocations: flattenedLocations is: ", flattenedLocations);
        setFlattenedLocations(flattenedLocations);
        return locations;
    }

    const [users, setUsers] = useState([]);
    const [flattenedLocations, setFlattenedLocations] = useState([]);

    useEffect( () => {
        const fetchData = async (url) => {
            const resp = await axios.get(url);
            return resp;
        };

        fetchData(url)
        .then((resp) => {
            console.log("resp is: ", resp);
            setUsers(resp.data.results);
            flattenLocations(resp.data.results);
        })
        .catch(console.error);
    }, []);



    const renderFullUserName = (users) => {
        if (users.length === 0) {
            return null;
        }
        // flattenLocations(users);
        return (
            <div>
                {users.map((user, i) =>
                    <p key={i}>{`${i}: ${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                )}
            </div>
        );
    }

    // const generateLocationTable = data => {
        // console.log("data is: ", data);
        // if (data == '') {
        //     return <></>;
        // }
        // const elems = JSON.parse(data)["results"];
        // return (
        //     <table>
        //         <tr>
        //             <th>Header1</th>
        //             <th>Header</th>
        //         </tr>
        //         {
        //             elems.map(elem =>
        //                 <tr>
        //                     <th>Month</th>
        //                     <th>Savings</th>
        //                 </tr>)
        //         }
        //     </table>
        // );
    // }

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see something!</h2>
            {/*{generateLocationTable(users)}*/}

            {renderFullUserName(users)}

            <pre>{JSON.stringify(users, null, 2)}</pre>

        </div>
    );
};

export default App;
