import { useState } from "react";
import { CarDropDown } from "../components/form/CarDropDown";
import "../styles/Form.css"

function FormView() {

    const [ values, setValues ] = useState({ car: "", startDate: "", endDate: "", name: "", age: 0 })

    return (
        <div className="main-container">
            <form>
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
                        type="date"
                        id="start-date"
                        value={values.startDate}
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
            </form>
        </div>
    )
}

export default FormView;