import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  function playSound() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <FontAwesomeIcon icon={faVolumeUp} onClick={playSound}></FontAwesomeIcon>
      <span> {props.phonetic.text}</span>
    </div>
  );
}
