package com.joakim.rental.api.controller;

import com.joakim.rental.api.controller.dto.CarResponseDto;
import com.joakim.rental.api.repository.entity.Car;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ICarController {

    ResponseEntity<List<Car>> getAllCars();

    ResponseEntity<Car> addNewCar(@RequestBody Car car);
}
