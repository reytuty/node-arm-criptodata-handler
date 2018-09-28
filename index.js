class ARMCriptoDataHandler{
    static limitDecimal(value, decimals = 2){
        if(!decimals){
            decimals = 2;
        }
        if(isNaN(value)){
            return value ;
        }
        if(!value){
            return value ;
        }
        decimals = Math.abs(Number(decimals)) ;
        value = Number(value) ;
        return Number(value.toFixed(decimals)) ;
    }
    static limitSatoshDecimal(value, roundCeil = false){
        var satoshi = ARMCriptoDataHandler.toSatoshiInt( value, roundCeil ) ;
        satoshi /= 100000000 ;
        return satoshi ;
    }
    static toSatoshiInt (value, roundCeil = false){
        var satoshi = (roundCeil)?Math.ceil(value*100000000):Math.floor(value*100000000) ;
        return satoshi ;
    }
}
module.exports = ARMCriptoDataHandler ;