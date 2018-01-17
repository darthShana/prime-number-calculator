package com.twg.sample.rest;

import com.twg.sample.model.PrimeNumberCalculator;
import com.twg.sample.model.PrimeNumberResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/primeNumbers")
public class PrimeNumberController {

    @Autowired
    private PrimeNumberCalculator primeNumberCalculator;


    @GetMapping()
    public PrimeNumberResponse getPrimeNumbers(@RequestParam("num") int number){
        return new PrimeNumberResponse(primeNumberCalculator.calculatePrimeNumber(number));
    }
}
