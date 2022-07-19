interface User {
  type: "user",
  name: string,
  age: number,
  occupation: string,
}

interface Admin {
  type: "admin",
  name: string,
  age: number,
  role: string,
}

let admin: Admin = {
  type: "admin",
  name: "karan",
  age:33,
  role: "Marketing",
};

function getType(obj: Admin|User): string {
  return obj.type
}

 getType(admin) 
