import * as React from "react";
import * as ReactDOM from "react-dom";

export const displayApp = () => {
  console.log("displayApp");
  setTimeout(() => {
    const style = (document.querySelector('#container')).style;
    style.display = 'block';
    setTimeout(() => {
      style.opacity = "1";
    });
  }, 200);
};

let Popup = (props) => {
  displayApp();
  return (
    <div>
      <h1>This should appear 200ms after the popup is opened.</h1>
      <p>Instead, in M66 it is much more delayed, or you have to click the tiny white square.</p>
    </div>);

};


ReactDOM.render(<Popup/>,document.getElementById('container'));
