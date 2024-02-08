import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event.target.textContent);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
