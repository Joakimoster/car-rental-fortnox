import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = ({ inputProps, onChange, value }) => {

    const date = new Date();

    return (
        <div>
            <div>
                <DatePicker
                    id="date-picker-id"
                    onChange={onChange}
                    selected={new Date()}
                    minDate={new Date()}
                    value={value}
                    required
                    dateFormat="yyyy-MM-dd"
                />
            </div>
        </div>
    );
}

export default Datepicker;