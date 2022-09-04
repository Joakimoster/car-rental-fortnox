package com.joakim.rental.api.service;

import com.joakim.rental.api.repository.CarRepository;
import com.joakim.rental.api.repository.entity.Car;
import com.joakim.rental.api.repository.entity.Cars;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CarService implements ICarService {

    private final CarRepository repository;

    public CarService(CarRepository repository) {
        this.repository = repository;
    }

    //Todo change to CarResponseDto
    @Override
    public List<Car> getAllCars() {
        return repository.findAll();
    }

    @Override
    public Car addNewCar(Car car) {
        int revenue = calculateTotalCarCost(car.getCar(), car.getEndDate(), car.getStartDate());
        car.setRevenue(revenue);
        return repository.save(car);
        //return repository.addNewCar(car.getName(), car.getAge(), car.getStartDate(), car.getEndDate(), car.getRevenue());
    }

    public int getDateInterval(Date toDate, Date startDate) {
        int interval = 0;
        System.out.println(toDate);
        System.out.println(startDate);
        long diff = toDate.getTime() - startDate.getTime();
        long diffDays = diff / (24 * 60 * 59 * 1000);
        interval = (int) diffDays;
        return interval;
    }

    public int calculateTotalCarCost(String car, Date toDate, Date startDate) {
        int interval = getDateInterval(toDate, startDate);

        switch (car) {
            case "Volvo":
                return (interval * Cars.VOLVO.getMultiplier());
            case "Volkswagen Golf":
                return (interval * Cars.VOLKSWAGEN.getMultiplier());
            case "Ford Mustang":
                return (interval * Cars.FORD_MUSTANG.getMultiplier());
            case "Ford Transit":
                return (interval * Cars.FORD_TRANSIT.getMultiplier());
        }
        return 0;
    }
}
