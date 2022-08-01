import { useState } from "react";
import { useDispatch } from "react-redux";
import { CarDropDown } from "../components/form/CarDropDown";
import { createNewCar } from "../redux/slices/FormCarSlice";
import "../styles/Form.css"

function FormView() {

    const [ values, setValues ] = useState({ car: "", startDate: "", endDate: "", name: "", age: 0 });

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewCar({ values }))
        handleReset();
    }

    const handleReset = () => {
        setValues({car: '', startDate: '', endDate: '', name: '', age: 0});
    }

    return (
        <div className="main-container">
            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <label>Available cars</label>
                    <CarDropDown
                        value={values.car}
                        onChange={(e) => setValues({...values, car: e.target.value })}
                        inputProps={{ type: 'select' }}
                    />
                </div>
                <div className="input-container">
                    <label>Start date</label>
                    <input
                        type="datetime-local"
                        id="start-date"
                        value={values.startDate}
                        min={new Date().toISOString().slice(0, -8)}
                        
                        onChange={(e) => setValues({ ...values, startDate: e.target.value })}
                        name="startDate"
                        required
                        data-testid="startDate"
                    >
                    </input>
                </div>
                <div className="input-container">
                    <label>End date</label>
                    <input
                        type="date"
                        id="end-date"
                        value={values.endDate}
                        onChange={(e) => setValues({ ...values, endDate: e.target.value })}
                        name="endDate"
                        required
                        data-testid="endDate"
                    >
                    </input>
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
                        id="age"
                        name="age"
                        onChange={(e) => setValues({ ...values, age: e.target.value })}
                        value={values.age}
                        required
                        data-testid="inputAge"
                    >
                    </input>
                </div>
                <div className="submit-button-container">
                   <button className="car-rental-button" type="submit">Save</button>
                   <label>Expected cost: </label> 
                </div>   
            </form>
        </div>
        
    )
}

export default FormView;