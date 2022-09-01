import { useState } from 'react';
import Select from 'react-select';

export const CarDropDown = ({ inputProps, onChange, value }) => {

    const data = [
        {
            label: "Volvo s60, 1500kr/day",
            value: 1500,
        },
        {
            label: "Volkswagen Golf, 1333kr/day",
            value: 1333,
        },
        {
            label: "Ford Mustang, 3000kr/day",
            value: 3000,
        },
        {
            label: "Ford Transit",
            value: 2400,
        },
    ];

    const [selectedCar, setSelectedCar] = useState(null);

    const handleChange = e => {
        setSelectedCar(e.value);
    }

    return (
        <select
            id="dropdown"
            onChange={onChange}
            name="car"
            required
            value={value}
            data-testid="inputCar"
            defaultValue=""
        >
            <option value="" disabled>Choose a car</option>
            <option data-testid="option1" value="Volvo">Volvo s60, 1500kr/day</option>
            <option data-testid="option2" value="Volkswagen Golf">Volkswagen Golf, 1333kr/day</option>
            <option data-testid="option3" value="Ford Mustang">Ford Mustang, 3000kr/day</option>
            <option data-testid="option4" value="Ford Transit">Ford Transit, 2400kr/day</option>
            </select>
    )
}

        {/*<select
            id="dropdown"
            onChange={onChange}
            name="car"
            required
            value={value}
            data-testid="inputCar"
            defaultValue=""
        >
            {options.map((option) => (
                <option value={option.label}>{option.label}</option>
            ))}

            <option value="" disabled>Choose a car</option>
            <option data-testid="option1" value="Volvo">Volvo s60, 1500kr/day</option>
            <option data-testid="option2" value="Volkswagen Golf">Volkswagen Golf, 1333kr/day</option>
            <option data-testid="option3" value="Ford Mustang">Ford Mustang, 3000kr/day</option>
            <option data-testid="option4" value="Ford Transit">Ford Transit, 2400kr/day</option>
            </select>*/}


            

            {/*<div>
            <Select
                value={data.find(e => e.value === selectedCar)}
                options={data}
                onChange={handleChange}
                getOptionLabel={option => option.label}
            />
            <br></br>
            <span>{selectedCar}</span>
    </div>*/}