import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "./redux/counterSlice";

const App = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <h1>The count is {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount( 33))}>Increment by 33</button>
        </>
    )
}

export default App;
