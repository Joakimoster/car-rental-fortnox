package com.joakim.rental.api.repository.entity;

public enum Cars {
    VOLVO(1500),
    VOLKSWAGEN(1333),
    FORD_MUSTANG(3000),
    FORD_TRANSIT(2400);

    private final int multiplier;

    Cars(int multiplier) {
        this.multiplier = multiplier;
    }

    public int getMultiplier() {
        return multiplier;
    }
}