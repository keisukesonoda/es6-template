import Person from './app';

class Friend extends Person {
  constructor(name) {
    super(name);
    this.name = name;
  }
  callName() {
    console.log(this.name);
    console.log(this.cats);
  }
}

const friend = new Friend('hoge');

friend.callName();
