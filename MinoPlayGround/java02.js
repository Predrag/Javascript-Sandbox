var numbers = [1, 2, 3, 4, 5];
var total = 0;
i = 0;
function averageValue(numbers) {
    var averageValue = 0;
    if (numbers.length > 0) {
        for (i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        averageValue = total / numbers.length;
    }
    return averageValue;
}
var average = averageValue(numbers);

console.log('total = ' + total + ', i = ' + i);