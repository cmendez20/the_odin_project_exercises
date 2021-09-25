// const user = {
//   name: 'John',
//   surname: 'Smith',
// };

// console.log(user);

// user.name = 'Pete';

// console.log(user);

// delete user.name;

// console.log(user);

/*
let schedule = {};

const isEmpty = obj => {
  for (let prop in obj) {
    return false;
  }
  return true;
};

alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

alert(isEmpty(schedule)); // false
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
*/

const multiplyNumeric = obj => {
  for (let key in obj) {
    if (Number.isInteger(obj[key])) {
      obj[key] *= 2;
    }
  }
};

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

console.log(menu);
