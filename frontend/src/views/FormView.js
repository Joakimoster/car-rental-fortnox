import { useState } from "react";
import { useDispatch } from "react-redux";
import { CarDropDown } from "../components/form/CarDropDown";
import { createNewCar } from "../redux/slices/FormCarSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Form.css"

function FormView() {

    const [values, setValues] = useState({ car: "", startDate: "", endDate: "", name: "", age: 0 });
    const [expectedCarCost, setExpectedCarCost] = useState(0);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date().setDate(new Date(startDate).getDate() + 1));

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        dispatch(createNewCar({ values }))
        handleReset();
    }

    const handleReset = () => {
        setStartDate('');
        setEndDate('');
        setValues({
            car: '',
            startDate: '',
            endDate: '',
            name: '',
            age: 0
        });
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    }

    return (
        <div className="main-container">
            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label>Available cars</label>
                    <CarDropDown
                        value={values.car}
                        onChange={(e) => setValues({ ...values, car: e.target.value })}
                        inputProps={{ type: 'select' }}
                    />
                </div>
                <div className="input-container">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                        value={values.name}
                        required
                        data-testid="inputName"
                    >
                    </input>
                </div>
                <div className="input-container">
                    <label>Age</label>
                    <input
                        type="number"
                        min="18"
                        onKeyPress={preventMinus}
                        id="age"
                        name="age"
                        onChange={(e) => setValues({ ...values, age: e.target.value })}
                        value={values.age}
                        required
                        data-testid="inputAge"
                    >
                    </input>
                </div>
                <div className="input-container">
                    <label>Start date</label>
                    <DatePicker
                        placeholderText="Select a start date"
                        selected={startDate}
                        onChange={(date) => {
                            const d = new Date(date).toISOString().split('T')[0];
                            setStartDate(date);
                            setValues({ ...values, startDate: d });
                        }}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        required
                    />
                </div>

                <div className="input-container">
                    <label>End date</label>
                    <DatePicker
                        placeholderText="Select an end date"
                        selected={endDate}
                        value={endDate}
                        onChange={(date) => {
                            const d = new Date(date).toISOString().split('T')[0];
                            setEndDate(date);
                            setValues({ ...values, endDate: d });
                        }}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date().setDate(new Date(startDate).getDate() + 1)}
                        required
                    />
                </div>

                <div className="submit-button-container">
                    <button className="car-rental-button" type="submit">Save</button>
                    <label>Expected cost: {values.car}</label>
                </div>
            </form>
        </div>
    )
}

export default FormView;