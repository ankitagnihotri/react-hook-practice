import React, { useState, useEffect } from "react";

const Greetings = props => {
  const name = useFormInput("Ankit");
  const surname = useFormInput("Agnihotri");
  const width = useWindowWidth();
  useDocumentTitle(name.value + " " + surname.value);

  // const handleNameChange = e => {
  //   setName(e.target.value);
  // };

  // const handleSurnameChange = e => {
  //   setSurname(e.target.value);
  // };

  // useEffect(() => {
  //   document.title = name + " " + surname;
  // });

  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <section>
        <input {...name} />
      </section>
      <section>
        <input {...surname} />
      </section>
      <section>
        Window width:
        {width}
      </section>
    </div>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

export default Greetings;
