function e(n) {
    for (let i = 0; i <= n; i++) {
        if (i > 0) {
            factorial *= i;
        }
        sum += (1.0 / factorial);
    }
return sum;
}
