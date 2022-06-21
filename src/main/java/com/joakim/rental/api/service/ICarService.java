package com.joakim.rental.api.service;

import com.joakim.rental.api.controller.dto.CarResponseDto;
import com.joakim.rental.api.repository.entity.Car;

import java.util.List;

public interface ICarService {

    //Todo change to CarResponseDto
    List<Car> getAllCars();

    Car addNewCar(Car car);
}
