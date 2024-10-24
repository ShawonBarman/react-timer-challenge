import { useState, useRef } from "react";

export default function Player() {
  const pName = useRef();
  const [playerName, setPlayerName] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const handleInput = (event) => {
  //   setIsSubmitted(false);
  //   setPlayerName(event.target.value);
  // }

  const handleClick = () => {
    // setIsSubmitted(true);
    setPlayerName(pName.current.value);
    pName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={pName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
