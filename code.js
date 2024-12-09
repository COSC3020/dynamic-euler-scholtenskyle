function e(n) {
    let addition = 0;
    let factorial = 1;
    for (let i = 0; i <= n; i++) {
        if (i > 0) {
            factorial *= i;
        }
        addition += (1.0 / factorial);
    }
return addition;
}
