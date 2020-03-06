class Students{
    constructor(sId, sName){
        this.Id = sId;
        this.Name = sName;
        this.school = "Alimonnessha boys school";
    }
}

const student1 = new students(11, "Motaleb");
const student2 = new students(15, "Lalto");
console.log(student1.Name, student2.Name);