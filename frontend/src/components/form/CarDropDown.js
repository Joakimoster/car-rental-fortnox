export const CarDropDown = ({ inputProps, onChange, value }) => {

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