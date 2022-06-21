package com.joakim.rental.api.controller.dto;

import java.util.Date;

public class CarResponseDto {

    private String name;

    private Date startDate;

    private Date endDate;

    private int revenue;

    public CarResponseDto() {
    }

    public CarResponseDto(String name, Date startDate, Date endDate, int revenue) {
        this.name = name;
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
