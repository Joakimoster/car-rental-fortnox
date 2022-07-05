package com.joakim.rental.api.repository;

import com.joakim.rental.api.repository.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    /*@Query(value = "SELECT * from car", nativeQuery = true)
    List<Car> fetchAllCars();

    @Transactional
    @Query(value = "INSERT INTO car (name, age, start_date, end_date, revenue) VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    Car addNewCar (String name, int age, Date startDate, Date endDate, int revenue);*/
}
