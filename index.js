require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString('M/d/yyyy')
  };

  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  return combinedObject;
};

const groupA = ['Alicia', 'Dave'];
const groupB = ['Emily', 'Ashley']; 

console.log(combineUsers(groupA, groupB));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


