import React from "react";

class StorePicker extends React.Component {
  //class makes this reusable
  render() {
    // a method
    return (
      <form className="store-selector">
        <h2>Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
