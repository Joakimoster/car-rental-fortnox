package api.controller;

import com.joakim.rental.api.controller.CarController;
import com.joakim.rental.api.repository.CarRepository;
import com.joakim.rental.api.repository.entity.Car;
import com.joakim.rental.api.service.CarService;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class CarControllerTest {

    private final CarRepository repository = mock(CarRepository.class);
    private final CarService service = new CarService(repository);
    private final CarController controller = new CarController(service);

    @Test
    void getAllCars() {
        Car car = getCar();
        when(repository.findAll())
                .thenReturn(Stream.of(car).collect(Collectors.toList()));

        ResponseEntity<List<Car>> response =
                controller.getAllCars();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void addCar() {
        Car car = getCar();
        when(repository.existsById(car.getId())).thenReturn(true);
        when(repository.save(car)).thenReturn(car);

        ResponseEntity<Car> response = controller.addNewCar(car);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    private Car getCar() {
        Car car = new Car();
        car.setId(1L);
        car.setCar("Volvo");
        car.setName("Joakim");
        car.setAge(29);
        car.setStartDate(new Date());
        car.setEndDate(new Date());
        car.setRevenue(7500);
        return car;
    }
}