package com.twg.sample.model;

public class PrimeNumberResponse {

    private int[] primes;

    public PrimeNumberResponse(int[] primes) {
        this.primes = primes;
    }

    public int[] getPrimes() {
        return primes;
    }

    public void setPrimes(int[] primes) {
        this.primes = primes;
    }
}
