// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function) (y => y + 1)
//                    Allows for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous updates
//                    Good practice to use updater functions

import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
      // Uses the CURRENT state to calculate the NEXT state
      // set functions do not trigger an update
      // React batches together state updates for performance reasons
      // NEXT state becomes the CURRENT state after an update

      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);

      // Takes the PENDING state to calculate the NEXT state
      // React puts ur updater functions in a queue
      // During the next render, it will call them in the same order

      setCount(c => c + 1);
      setCount(c => c + 1);
      setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

export default MyComponent;