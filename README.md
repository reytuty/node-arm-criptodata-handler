# ARMCriptoData Handler


## ARMCripto.limitSatoshDecimal

To get number limited to satoshi:

```

let criptoCoinValue = ARMCripto.limitSatoshDecimal( 555.123456789 ) ;
//out is: 555.12345678

``` 

Round UP

```

let criptoCoinValue = ARMCripto.limitSatoshDecimal( 555.123456789, true ) ;
//out is: 555.12345679

``` 


## ARMCripto.toSatoshiInt

Number to satoshi int:

```

let criptoCoinValue = ARMCripto.toSatoshiInt( 2.123456789 ) ;
//out is: 212345678

``` 

Round UP

```

let criptoCoinValue = ARMCripto.limitSatoshDecimal( 2.123456789, true ) ;
//out is: 212345679

``` 
