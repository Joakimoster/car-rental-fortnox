package com.joakim.rental.api.repository;

import com.joakim.rental.api.repository.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    @Query(value = "SELECT * from car", nativeQuery = true)
    List<Car> fetchAllCars();

    //  Watch this query on google how it should look like.
    @Query(value = "INSERT INTO car (age, end_date, name, revenue, start_date) VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    Car addNewCar(Car car);
}
