package api.service;

import com.joakim.rental.api.repository.CarRepository;
import com.joakim.rental.api.repository.entity.Car;
import com.joakim.rental.api.service.CarService;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


import static org.assertj.core.api.Assertions.assertThat;
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

    @Test
    void calculateCostWhenVolvoIsSelectedCar() {
        Car car = getCar();
        car.setCar("Volvo");

        car.setRevenue(service.calculateTotalCarCost(car.getName(), car.getEndDate(), car.getStartDate()));
        System.out.println(car.getCar());
        System.out.println(car.getRevenue());
        System.out.println(car.getStartDate());
        assertEquals(car.getRevenue(), service.calculateTotalCarCost("Volvo", car.getEndDate(), car.getStartDate()));
    }



    private List<Car> getCarList() {
        List<Car> carList = new ArrayList<>();
        carList.add(getCar());
        return carList;
    }

    private Car getCar() {
        Car car = new Car();

        Calendar calendarStartDate = Calendar.getInstance();
        calendarStartDate.set(2022, Calendar.NOVEMBER, 10);
        Calendar calendarToDate = Calendar.getInstance();
        calendarToDate.set(2022, Calendar.NOVEMBER, 14);

        car.setId(1L);
        car.setCar("Volvo");
        car.setName("Joakim");
        car.setAge(29);
        car.setStartDate(calendarStartDate.getTime());
        car.setEndDate(calendarToDate.getTime());
        car.setRevenue(service.calculateTotalCarCost(car.getCar(), car.getEndDate(), car.getStartDate()));
        return car;
    }
}