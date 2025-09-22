
function fibonacciSeries(num) {

    let a = 0;
    let b = 1;

    console.log(a);

    if (num > 1) {
        console.log(b)
    }

    for (let i = 2; i < num; i++) {

        let c = a + b;
        console.log(c);

        a = b;
        b = c;
        
    }

}

fibonacciSeries(50);
