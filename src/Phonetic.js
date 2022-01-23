import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  function playSound() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <span className="icon">
        <FontAwesomeIcon
          icon={faVolumeUp}
          onClick={playSound}
        ></FontAwesomeIcon>
      </span>
      <span> /{props.phonetic.text}/</span>
    </div>
  );
}
