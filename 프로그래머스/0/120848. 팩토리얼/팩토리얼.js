function solution(n) {
    if (n >= 3628800) return 10;
    if (n >= 362880) return 9;
    if (n >= 40320) return 8;
    if (n >= 5040) return 7;
    if (n >= 720) return 6;
    if (n >= 120) return 5;
    if (n >= 24) return 4;
    if (n >= 6) return 3;
    if (n >= 2) return 2;
    if (n >= 1) return 1;
}