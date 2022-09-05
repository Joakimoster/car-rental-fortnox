package api.service;

import com.joakim.rental.api.repository.CarRepository;
import com.joakim.rental.api.repository.entity.Car;
import com.joakim.rental.api.service.CarService;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class CarServiceTest {

    private final CarRepository repository = mock(CarRepository.class);
    private final CarService service = new CarService(repository);

    @Test
    void getAllCars() {
        when(repository.findAll()).thenReturn(getCarList());
        List<Car> list = service.getAllCars();
        assertFalse(list.isEmpty());
    }

    @Test
    void addCar() {
        Car car = getCar();
        when(repository.existsById(car.getId())).thenReturn(true);
        when(repository.save(any())).thenReturn(car);

        service.addNewCar(car);
        verify(repository, times(1)).save(car);
        assertNotNull(car);
    }

    private List<Car> getCarList() {
        List<Car> carList = new ArrayList<>();
        carList.add(getCar());
        return carList;
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