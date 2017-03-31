import Person from './app';

class Friend extends Person {
  constructor(name) {
    super(name);
    this.name = name;
  }
  callName() {
    console.log(this.name);
    // console.log(this.cats);
  }
}

const friend = new Friend('hoge');

friend.callName();


import ModalClass from './_classes/modalClass';

class GoodsModalClass extends ModalClass {
  constructor(args) {
    super(args);
  }

  init() {
    this.openAction();
  }

  openAction() {
    this.args.trg.on('click', (e) => {
      e.preventDefault();
      super.disableScroll();
      super.open(this.args.content);
      this.closeAction();
    });
  }

  closeAction() {
    const trgs = [this.elms.overlay, this.elms.close];
    $.each(trgs, (i, trg) => {
      $(trg).on('click', (e) => {
        e.preventDefault();
        super.close();
        super.enableScroll();
        $(trg).off('click');
      });
    });
  }
}