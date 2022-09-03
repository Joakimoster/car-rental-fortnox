import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CarDropDown } from "../components/form/CarDropDown";
import { createNewCar } from "../redux/slices/FormCarSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Form.css"
import { getDate, setDate } from "date-fns";

function FormView() {

    const [values, setValues] = useState({ car: "", startDate: "", endDate: "", name: "", age: 0 });

    const [expectedCarCost, setExpectedCarCost] = useState(0);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date().setDate(new Date(startDate).getDate() + 1));
    const [dateInterval, setDateInterval] = useState(0); 

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

    /*useEffect(() => {
        const interval = getDateInterval(startDate, endDate);
        setDateInterval(interval);
        console.log(interval)
    }, [startDate, endDate]);*/

    useEffect(() => {
        const cost = calculateExpectedCarCost(values.car, startDate, endDate);
        console.log(startDate, endDate)
        setExpectedCarCost(cost);
    }, [values.car, startDate, endDate])

    const getDateInterval = (date1, date2) => {
        const interval = Math.floor((Math.abs(date2 - date1)) / (24 * 60 * 60 * 1000));
        return interval;
    }

    const calculateExpectedCarCost = (car, date1, date2) => {
        let expectedCost = 0;
        let interval = getDateInterval(date1, date2);

        if (car === "Volvo") {
            expectedCost = interval * 1500;
        } else if (car === "Volkswagen Golf") {
            expectedCost = interval * 1333; 
        } else if (car === "Ford Mustang") {
            expectedCost = interval * 3000;
        } else if (car === "Ford Transit") {
            expectedCost = interval * 2400;
        }
        console.log(interval)
        console.log(expectedCost)
        return expectedCost;
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
                    <label>Expected cost: {expectedCarCost}</label>
                    <label>Car choosed: {values.car}</label>
                </div>
            </form>
        </div>
    )
}

export default FormView;