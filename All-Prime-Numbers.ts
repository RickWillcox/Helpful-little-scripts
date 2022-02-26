const MAX_NUMBER_TO_CHECK : number = 1000
var allPrimes: number[] = [];

for (let i = 2; i < MAX_NUMBER_TO_CHECK; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) allPrimes.push(i);
}