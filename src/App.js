import React, { useState, useEffect } from "react";
import Greetings from "./Greeting";

function useMedia(query) {
  let [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

function App() {
  let small = useMedia("(max-width: 400px)");
  let large = useMedia("(min-width: 800px)");
  console.log(small, large);
  return (
    <div className="media">
      <h1>Media</h1>
      <p>Small ? {small ? "yes" : "no"}</p>
      <p>Large ? {large ? "yes" : "no"}</p>
      <Greetings />
    </div>
  );
}

export default App;
