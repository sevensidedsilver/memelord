import $ from 'jquery';
import foundation from 'foundation-sites'; // eslint-disable-line 

require("../sass/view1.scss");
const html = require("../html/view1.html");

export class View {
  constructor() {} // eslint-disable-line

  deconstructor() {}

  html() {
    return html;
  }

  addListerners() {
    document.getElementById('just-a-button').addEventListener("click", this.justaButtonClick.bind(this));
  }

  init() {
    $('#view-1').foundation(); // Allows you to do foundation JS stuff like show modals
  }

  //--Custom Method---------
  justaButtonClick(e) {
    this.printMessage(`..the (${$(e.target).text()}) button was clicked `);
  }

  printMessage(message) {
    console.log(`${message} ... from view1`);
  }

}
export { View as default };