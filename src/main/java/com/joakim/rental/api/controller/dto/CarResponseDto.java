package com.joakim.rental.api.controller.dto;

import java.util.Date;

public class CarResponseDto {

    private String name;

    private String car;

    private Date startDate;

    private Date endDate;

    private int revenue;

    public CarResponseDto() {
    }

    public CarResponseDto(String name, String car, Date startDate, Date endDate, int revenue) {
        this.name = name;
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
        this.revenue = revenue;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getRevenue() {
        return revenue;
    }

    public void setRevenue(int revenue) {
        this.revenue = revenue;
    }
}
