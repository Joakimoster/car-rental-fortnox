package com.joakim.rental.api.service;

import com.joakim.rental.api.controller.dto.CarResponseDto;
import com.joakim.rental.api.repository.CarRepository;
import com.joakim.rental.api.repository.entity.Car;
import org.springframework.stereotype.Service;

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
        return repository.fetchAllCars();
    }


    //Todo Add business logic for calculation on revenue for rental of a car
    @Override
    public Car addNewCar(Car car) {
        return repository.addNewCar(car);
    }
}
