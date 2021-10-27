function getFibonachi(max){
    var fibonnachi = {
        [Symbol.iterator]: function(){
            let f1 = 1, f2 = 1;
            var current;
            var iterator = {
                next: function(){
                    current = f2;
                    if ( current <= max) {
                        f2 = f1 + f2;
                        f1 = current;
                        result = {value: current, done: false};
                    } else {
                        result = {done: true};
                    }
                    return result;
                }
            }
            return iterator;
        }
    };
    return fibonnachi;
}

var fib = getFibonachi(5000);
var vypis = document.getElementById('PrintOut4');

vypis.innerText = 'Fibbonachi numbers: '
for (let f of fib){
    vypis.append(f+', ');
}
vypis.append(' ...');