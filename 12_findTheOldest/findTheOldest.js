const findTheOldest = (arr) => {
  oldest = arr.sort((a, b) => {
    const last = age(a.yearOfDeath, a.yearOfBirth);
    const next = age(b.yearOfDeath, b.yearOfBirth);
    return last > next ? -1 : 1;
  });
  return oldest[0];
};

const age = (death, birth) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

//alternate solution
const findTheOldest2 = (people) => {
  return people.reduce((oldest, current) => {
    const a = findAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const b = findAge(current.yearOfDeath, current.yearOfBirth);
    return a < b ? current : oldest;
  });
};

const findAge = (death, birth) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

//alternate longer solution 2
const findTheOldest3 = (people) => {
  oldest = people.sort((a, b) => {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (b.yearOfDeath === undefined) {
      b.yearOfDeath = new Date().getFullYear();
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
};
module.exports = findTheOldest;
