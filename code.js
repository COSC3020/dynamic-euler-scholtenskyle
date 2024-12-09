function e(n) {
    let addition = 0;
    let fact = 1;
    for (let i = 0; i <= n; i++) {
        if (i > 0) {
            fact *= i;
        }
        addition += (1.0 / fact);
    }
return addition;
}
