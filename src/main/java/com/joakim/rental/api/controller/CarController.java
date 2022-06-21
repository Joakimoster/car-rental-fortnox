package com.joakim.rental.api.controller;

import com.joakim.rental.api.repository.entity.Car;
import com.joakim.rental.api.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/car/v1")
public class CarController implements ICarController{

    private final CarService service;

    public CarController(CarService service) {
        this.service = service;
    }

    //Todo change to CarResponseDto
    @Override
    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars() {
        return new ResponseEntity<>(service.getAllCars(), HttpStatus.OK);
    }

    @Override
    @PostMapping("/car")
    public ResponseEntity<Car> addNewCar(@RequestBody Car car) {
        return new ResponseEntity<>(service.addNewCar(car), HttpStatus.CREATED);
    }
}
