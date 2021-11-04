import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function firstNameHandle(event) {
    setFirstName(event.target.value);
  }
  function lastNameHandle(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={firstNameHandle}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={lastNameHandle}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
