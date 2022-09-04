import { useEffect } from "react";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, calculateTotalRevenues } from "../redux/slices/CarViewSlice";

function TableView() {

    const dispatch = useDispatch();
    const { cars, totalRevenue, formatedStartDate } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch])

    useEffect(() => {
        dispatch(calculateTotalRevenues());
    }, [cars])

    return (
        <div className="table-container">
            <div>
                <h2>Current list of rented cars</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Driver name</th>
                            <th>Car</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => {
                            return (
                                <tr key={index}>
                                    <td>{car.name}</td>
                                    <td>{car.car}</td>
                                    <td>{car.startDate}</td>
                                    <td>{(car.endDate)}</td>
                                    <td>{car.revenue}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="total-revenue-view">
                        <h2>Total revenue: <span>{totalRevenue}</span></h2>
                        <h2>Formated date: <span>{formatedStartDate}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default TableView;