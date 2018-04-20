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
  return <div>Hey hey what up what up</div>
};


ReactDOM.render(<Popup/>,document.getElementById('container'));
