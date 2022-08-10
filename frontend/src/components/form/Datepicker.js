import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";

export const Datepicker = ({ inputProps, onChange, value }) => {

    const date = new Date();

    return (
        <div>
            <div>
                <DatePicker
                    id="startDate"
                    onChange={onChange}
                    selected={new Date()}
                    minDate={new Date()}
                    value={value}
                    required
                />
            </div>
            <div>
                <DatePicker
                    id="endDate"
                    onChange={onChange}
                    selected={date.setDate(date.getDate()+1)}
                    minDate={new Date()}
                    excludeDates={[new Date(), addDays(new Date(), 0)]}
                    required
                />
            </div>
        </div>
    );
}

export default Datepicker;