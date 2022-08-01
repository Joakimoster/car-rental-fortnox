package com.joakim.rental.api.repository.entity;

public enum Cars {
    VOLVO(1500),
    Volkswagen(1333),
    FordMustang(3000),
    FordTransit(2400);

    private final int multiplier;

    Cars(int multiplier) {
        this.multiplier = multiplier;
    }

    public double getMultiplier() {
        return multiplier;
    }
}