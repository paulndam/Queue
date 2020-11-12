function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue (element) {
  this.dataStore.push (element);
}
function dequeue () {
  return this.dataStore.shift ();
}
// checking and examing the front and back or our queue

function front () {
  return this.dataStore[0];
}
function back () {
  return this.dataStore[this.dataStore.length - 1];
}

// display all the elements using the tostring

function toString () {
  var getStr = '';

  for (var i = 0; i < this.dataStore.length; i++) {
    getStr += this.dataStore[i] + '\n';
  }
  return getStr;
}

//  function that will tell us if que is empty

function empty () {
  if (this.dataStore.length === 0) {
    return `The Queue is Empty`;
  } else {
    return `Got some Data or Elements in Here`;
  }
}

var people = new Queue ();

people.enqueue ('boris');
people.enqueue ('davis');
people.enqueue ('mary');
console.log (people.toString ());
people.dequeue ('davis');
console.log (people.toString ());
people.enqueue ('kamga');
console.log (people.toString ());
console.log (`Front of The Queue is => ${people.front ()}`);
console.log (`Back of The Queue is => ${people.back ()}`);
