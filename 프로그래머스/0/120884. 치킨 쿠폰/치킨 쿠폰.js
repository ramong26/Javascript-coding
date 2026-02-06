function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    let restCoupon = 0;
    
    while (coupon >= 10) {             
        chicken = Math.floor(coupon / 10);
        restCoupon = coupon % 10;
        coupon = chicken + restCoupon;  
        answer = answer + chicken;
    }
    
    return answer;
}
