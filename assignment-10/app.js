var University = /** @class */ (function () {
    function University(name, depatment) {
        this.name = name;
        this.depatment = depatment;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.depatment + " " + year + " Students");
    };
    return University;
}());
var mum = new University('MUM', 'Computer Science');
mum.graduation(2019);
