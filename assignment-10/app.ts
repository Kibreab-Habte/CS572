class University{

    name: String;
    department: String;

    constructor( name: String,  department:String){
        this.name = name;
        this.department = department;
    }

    graduation(year: number){
        console.log(`Graduating ${this.department} ${year} Students`)
    }
}

const mum = new University('MUM', 'Computer Science');
mum.graduation(2019);