package com.twg.sample.model

import spock.lang.Specification

class PrimeNumberCalculatorTest extends Specification {

    def "test get prime number till"(){
        given:
        def calculator = new PrimeNumberCalculator(debug: false)

        expect:
        [1, 2, 3, 5, 7] == calculator.calculatePrimeNumber(8)
    }
}
