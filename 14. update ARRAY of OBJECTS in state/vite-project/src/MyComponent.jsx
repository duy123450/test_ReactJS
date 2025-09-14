import React, { useState } from 'react'

function MyComponent() {
    const[car, setCar] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());
    const[carMake, setCarMake] = useState("");
    const[carModel, setCarModel] = useState("");

    function addCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCar(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function removeCar(index) {
        setCar(c => c.filter((_, i) => i !== index));
    }

    function updateYear(event) {
        setCarYear(event.target.value);
    }

    function updateMake(event) {
        setCarMake(event.target.value);
    }

    function updateModel(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {car.map((c, index) => (
                    <li key={index} onClick={() => removeCar(index)}>
                        {c.year} {c.make} {c.model} 
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={updateYear} /><br />
            <input type="text" value={carMake} onChange={updateMake} 
                   placeholder='Enter car make' /><br />
            <input type="text" value={carModel} onChange={updateModel} 
                   placeholder='Enter car model' /><br />
            <button onClick={addCar}>Add Car</button>
        </div>
    );
}

export default MyComponent