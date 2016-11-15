import Person from './app';

class Friend extends Person{
  constructor(name) {
    super(name);
  }
  callName() {
    console.log(this.name);
  }
}

var friend = new Friend('hoge');

friend.callName();
