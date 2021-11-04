import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function updateName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    console.log(newValue);
    console.log(inputName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={updateName}
          name="fName"
          placeholder="First Name"
          // value={fullName.firstName}
        />
        <input
          onChange={updateName}
          name="lName"
          placeholder="Last Name"
          // value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
