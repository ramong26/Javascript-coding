function solution(chicken) {
    
    let coupon = 0;
    while(chicken > 10){
        
        // console.log(chicken)
        coupon = coupon + chicken / 10
        console.log(coupon)
        if(coupon >= 10) {
            coupon = coupon + coupon / 10
            console.log(coupon)
        }
        chicken = chicken / 10
    }
        
    return coupon
}