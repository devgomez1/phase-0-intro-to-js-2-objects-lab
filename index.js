// Write your solution in this file!
const employee = {
    name: "Devin",
    streetAddres: "3656 Asbury Street"
};

function  updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
    };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; 
    return employee;
}; 

function  deleteFromEmployeeByKey(employee, key){
    const updatedemployee = {...employee};
    delete updatedemployee[key];
    return updatedemployee;
};


function  destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee
};