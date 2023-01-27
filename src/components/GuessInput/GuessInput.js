import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter a 5 letter word");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={tentativeGuess}
          minLength="5"
          maxLength="5"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
