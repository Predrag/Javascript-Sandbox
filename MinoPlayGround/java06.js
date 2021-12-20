function Supplier() {
    this.supply = function() {
        return this;
    };
}

var supplier = new Supplier();
var supply = supplier.supply();
var comparsion = (supplier === supply);

console.log(comparsion);