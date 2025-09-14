import React, {use, useState} from 'react'

function MyComponent() {
    const[food, setFood]=useState(['pizza', 'burger', 'pasta'])

    function addFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFood(f => [...f, newFood]);
    }

    function removeFood(index){
        setFood(food.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((f, index) => (
                    <li key={index} onClick={() => removeFood(index)}>
                        {f}
                    </li>
                ))}
            </ul>
            <input type="text" name="" id="foodInput" placeholder='Enter food name' />
            <button onClick={addFood}>Add Food</button>
        </div>
    );
}

export default MyComponent