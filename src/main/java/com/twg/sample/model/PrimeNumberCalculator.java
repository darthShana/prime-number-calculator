package com.twg.sample.model;

import org.springframework.stereotype.Service;

import java.util.stream.IntStream;

@Service
public class PrimeNumberCalculator {

    private boolean debug;

    public int[] calculatePrimeNumber(int end){
        return IntStream.rangeClosed(1, end).filter(number -> !IntStream.rangeClosed(2, number/2).anyMatch(i -> number%i == 0)).toArray();
    }
}
