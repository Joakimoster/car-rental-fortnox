import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function TableView() {

    const [ date, setDate ] = useState(new Date());

    return (
        <div>
            <div>
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    )
}

export default TableView;