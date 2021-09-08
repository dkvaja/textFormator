import React, { useState } from "react";
import Loader from "./Loader";

const TextArea = () => {

  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleTextChange = (event) => {
    console.debug(event.target.value);
    setText(event.target.value);
  };

  const clearText = () => setText("");

  const changeTextToUpperCase = () => setText(text.toUpperCase());

  const changeTextToLowerCase = () => setText(text.toLowerCase());

  const copyText = () => navigator.clipboard.writeText(text);

  const removeSpace = () => setText(text.trim().split("  ").join(""));

  const changeTextToSentenceCase = () =>
    setText(
      text
        .split(".")
        .map((c) => c.trim().charAt(0).toUpperCase() + c.slice(1))
        .join(". ")
    );

  const handleTextToSpeech = () => {
    if (window.responsiveVoice.voiceSupport()) window.responsiveVoice.speak(text);
    else alert(`Sorry! Your Browser doesn't Supported for Text2Speech.`)
  }

  const handleSpeechToText = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => setIsListening(true);

    recognition.start();

    recognition.onspeechend = () => {
      setIsListening(false)
      alert("stopped listening, hope you are done...`");
      recognition.stop();
    }

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript;
      setText(transcript);
    };
  }
  return (
    <>
      {isListening &&
        <Loader />
      }
      <div className="container my-4 text-center" style={{ maxHeight: '70vh' }}>
        <h3>Enter Your Text Here</h3>
        <textarea
          className="form-control my-3"
          onChange={handleTextChange}
          style={{ resize: "none" }}
          placeholder={"Enter your text here :-)"}
          value={text}
          rows="15"
        />
        <div className="container">
          <p className="m-1 fw-bold">
            Total Characters : {text.length ? text.length : 0}
          </p>
          <p className="m-1 fw-bold">
            Total Words :{" "}
            {text.length
              ? text
                .split(" ")
                .filter((c) => (c.charAt(0) === "" ? false : true)).length
              : 0}
          </p>
        </div>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={clearText}
            disabled={!text.length}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={changeTextToUpperCase}
            disabled={!text.length}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={changeTextToLowerCase}
            disabled={!text.length}
          >
            Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={copyText}
            disabled={!text.length}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={removeSpace}
            disabled={!text.length}
          >
            Remove Spaces
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={changeTextToSentenceCase}
            disabled={!text.length}
          >
            Sentence Case
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleTextToSpeech}
            disabled={!text.length}
          >
            Text to Speech
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={handleSpeechToText}
          >
            Speech To Text
          </button>
        </div>
      </div>
    </>
  );
};

export default TextArea;
