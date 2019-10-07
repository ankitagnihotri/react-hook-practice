import React, { useState, useEffect } from "react";

const Greetings = props => {
  const [name, setName] = useState("Ankit");
  const [surname, setSurname] = useState("Agnihotri");

  useEffect(() => {
    document.title = name + " " + surname;
  });

  // componentDidMount() {
  //   document.title = this.State.name + ' ' + this.state.surname;
  // }

  // componentDidUpdtae() {
  //   document.title = this.State.name + ' ' + this.state.surname;
  // }

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <section>
        <input value={name} onChange={handleNameChange} />
      </section>
      <section>
        <input value={surname} onChange={handleSurnameChange} />
      </section>
    </div>
  );
};

export default Greetings;
