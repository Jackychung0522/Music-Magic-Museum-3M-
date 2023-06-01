import React from "react";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./CreateYourselfPage.css";
import * as Tone from "tone";
import tempoRun from "../../image/tempoRun.png";
import { Player } from "tone";
import tempoNoise from "../../mp3/1111.mp3";
import record from "../../image/record.png";

const CreateYourselfPage = () => {
  let pu = [];
  const sound = new Player({
    url: tempoNoise,
  }).toDestination();
  const buttons = document.getElementsByClassName("white");
  const buttons2 = document.getElementsByClassName("black");
  const synth = new Tone.Sampler({
    urls: {
      C3: "C3.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  // document.addEventListener("keydown", function (event) {
  //   const key = event.key;
  //   if (key === "Q") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["C3"], "2n");
  //       if (IsRecord) {
  //         pu.push("Q");
  //       }
  //     });
  //   } else if (key === "W") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["D3"], "2n");
  //     });
  //   } else if (key === "E") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["E3"], "2n");
  //     });
  //   } else if (key === "R") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["F3"], "2n");
  //     });
  //   } else if (key === "T") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["G3"], "2n");
  //     });
  //   } else if (key === "Y") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["A3"], "2n");
  //     });
  //   } else if (key === "U") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["B3"], "2n");
  //     });
  //   } else if (key === "C") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["C4"], "2n");
  //     });
  //   } else if (key === "V") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["D4"], "2n");
  //     });
  //   } else if (key === "B") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["E4"], "2n");
  //     });
  //   } else if (key === "N") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["F4"], "2n");
  //     });
  //   } else if (key === "M") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["G4"], "2n");
  //     });
  //   } else if (key === ",") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["A4"], "2n");
  //     });
  //   } else if (key === ".") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["B4"], "2n");
  //     });
  //   } else if (key === "/") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["C5"], "2n");
  //     });
  //   } else if (key === "2") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["C#3"], "2n");
  //     });
  //   } else if (key === "3") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["D#3"], "2n");
  //     });
  //   } else if (key === "5") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["F#3"], "2n");
  //     });
  //   } else if (key === "6") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["G#3"], "2n");
  //     });
  //   } else if (key === "7") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["A#3"], "2n");
  //     });
  //   } else if (key === "F") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["C#4"], "2n");
  //     });
  //   } else if (key === "G") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["D#4"], "2n");
  //     });
  //   } else if (key === "J") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["F#4"], "2n");
  //     });
  //   } else if (key === "K") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["G#4"], "2n");
  //     });
  //   } else if (key === "L") {
  //     Tone.loaded().then(() => {
  //       sampler.triggerAttackRelease(["A#4"], "2n");
  //     });
  //   }
  // });
  async function handleTempoChange(event) {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    range.addEventListener("input", () => {
      range.value = event.target.value;
      tempoNum.innerHTML = event.target.value + "bpm";
    });
    // setTempoNumber(event.target.value);
  }
  const handleTempoMin = () => {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    if (range.value > 30) {
      range.value = parseInt(range.value) - 1;
      tempoNum.innerHTML = parseInt(range.value) + "bpm";
    }
  };
  const handleTempoPlus = () => {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    if (range.value < 244) {
      range.value = parseInt(range.value) + 1;
      tempoNum.innerHTML = parseInt(range.value) + "bpm";
    }
  };
  const pikachuShot = () => {
    sound.start();
  };
  const handleSwitchOnTempoRun = () => {
    setIsTempoRun((prevIsTempoRun) => !prevIsTempoRun);
    let range = document.getElementById("bpmInput");
    setTempoNumber(parseInt(range.value));
  };
  const [tempoNumber, setTempoNumber] = useState("100");
  const [IsTempoRun, setIsTempoRun] = useState(false);
  const [IsRecord, setIsRecord] = useState(false);
  useEffect(() => {
    let intervalId;
    async function playWithDelay() {
      if (IsTempoRun) {
        intervalId = setInterval(async () => {
          pikachuShot();
        }, 60000 / parseInt(tempoNumber));
      }
    }
    playWithDelay();
    return () => {
      clearInterval(intervalId);
    };
  }, [IsTempoRun, tempoNumber]);

  const handleRecordChange = () => {
    setIsRecord((prevIsRecord) => !prevIsRecord);
    if (IsRecord) {
      console.log(pu);
    }
  };
  window.addEventListener("keydown", (event) => {
    if (event.code === "KeyQ") {
      synth.triggerAttackRelease("C3", "4n");
      buttons[0].classList.add("active-white");
    } else if (event.code === "KeyW") {
      synth.triggerAttackRelease("D3", "4n");
      buttons[1].classList.add("active-white");
    } else if (event.code === "KeyE") {
      synth.triggerAttackRelease("E3", "4n");
      buttons[2].classList.add("active-white");
    } else if (event.code === "KeyR") {
      synth.triggerAttackRelease("F3", "4n");
      buttons[3].classList.add("active-white");
    } else if (event.code === "KeyT") {
      synth.triggerAttackRelease("G3", "4n");
      buttons[4].classList.add("active-white");
    } else if (event.code === "KeyY") {
      synth.triggerAttackRelease("A3", "4n");
      buttons[5].classList.add("active-white");
    } else if (event.code === "KeyU") {
      synth.triggerAttackRelease("B3", "4n");
      buttons[6].classList.add("active-white");
    } else if (event.code === "KeyC") {
      synth.triggerAttackRelease("C4", "4n");
      buttons[7].classList.add("active-white");
    } else if (event.code === "KeyV") {
      synth.triggerAttackRelease("D4", "4n");
      buttons[8].classList.add("active-white");
    } else if (event.code === "KeyB") {
      synth.triggerAttackRelease("E4", "4n");
      buttons[9].classList.add("active-white");
    } else if (event.code === "KeyN") {
      synth.triggerAttackRelease("F4", "4n");
      buttons[10].classList.add("active-white");
    } else if (event.code === "KeyM") {
      synth.triggerAttackRelease("G4", "4n");
      buttons[11].classList.add("active-white");
    } else if (event.code === "Comma") {
      synth.triggerAttackRelease("A4", "4n");
      buttons[12].classList.add("active-white");
    } else if (event.code === "Period") {
      synth.triggerAttackRelease("B4", "4n");
      buttons[13].classList.add("active-white");
    } else if (event.code === "Slash") {
      synth.triggerAttackRelease("C5", "4n");
      buttons[14].classList.add("active-white");
    } else if (event.code === "Digit2") {
      synth.triggerAttackRelease("C#3", "4n");
      buttons2[0].classList.add("active-black");
    } else if (event.code === "Digit3") {
      synth.triggerAttackRelease("D#3'", "4n");
      buttons2[1].classList.add("active-black");
    } else if (event.code === "Digit5") {
      synth.triggerAttackRelease("F#3'", "4n");
      buttons2[2].classList.add("active-black");
    } else if (event.code === "Digit6") {
      synth.triggerAttackRelease("G#3", "4n");
      buttons2[3].classList.add("active-black");
    } else if (event.code === "Digit7") {
      synth.triggerAttackRelease("A#3", "4n");
      buttons2[4].classList.add("active-black");
    } else if (event.code === "KeyF") {
      synth.triggerAttackRelease("C#4", "4n");
      buttons2[5].classList.add("active-black");
    } else if (event.code === "KeyG") {
      synth.triggerAttackRelease("D#4", "4n");
      buttons2[6].classList.add("active-black");
    } else if (event.code === "KeyJ") {
      synth.triggerAttackRelease("F#4", "4n");
      buttons2[7].classList.add("active-black");
    } else if (event.code === "KeyK") {
      synth.triggerAttackRelease("G#4", "4n");
      buttons2[8].classList.add("active-black");
    } else if (event.code === "KeyL") {
      synth.triggerAttackRelease("A#4", "4n");
      buttons2[9].classList.add("active-black");
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === "KeyQ") {
      buttons[0].classList.remove("active-white");
    }
    if (event.code === "KeyW") {
      buttons[1].classList.remove("active-white");
    }
    if (event.code === "KeyE") {
      buttons[2].classList.remove("active-white");
    }
    if (event.code === "KeyR") {
      buttons[3].classList.remove("active-white");
    }
    if (event.code === "KeyT") {
      buttons[4].classList.remove("active-white");
    }
    if (event.code === "KeyY") {
      buttons[5].classList.remove("active-white");
    }
    if (event.code === "KeyU") {
      buttons[6].classList.remove("active-white");
    }
    if (event.code === "KeyC") {
      buttons[7].classList.remove("active-white");
    }
    if (event.code === "KeyV") {
      buttons[8].classList.remove("active-white");
    }
    if (event.code === "KeyB") {
      buttons[9].classList.remove("active-white");
    }
    if (event.code === "KeyN") {
      buttons[10].classList.remove("active-white");
    }
    if (event.code === "KeyM") {
      buttons[11].classList.remove("active-white");
    }
    if (event.code === "Comma") {
      buttons[12].classList.remove("active-white");
    }
    if (event.code === "Period") {
      buttons[13].classList.remove("active-white");
    }
    if (event.code === "Slash") {
      buttons[14].classList.remove("active-white");
    }
    if (event.code === "Digit2") {
      buttons2[0].classList.remove("active-black");
    }
    if (event.code === "Digit3") {
      buttons2[1].classList.remove("active-black");
    }
    if (event.code === "Digit5") {
      buttons2[2].classList.remove("active-black");
    }
    if (event.code === "Digit6") {
      buttons2[3].classList.remove("active-black");
    }
    if (event.code === "Digit7") {
      buttons2[4].classList.remove("active-black");
    }
    if (event.code === "KeyF") {
      buttons2[5].classList.remove("active-black");
    }
    if (event.code === "KeyG") {
      buttons2[6].classList.remove("active-black");
    }
    if (event.code === "KeyJ") {
      buttons2[7].classList.remove("active-black");
    }
    if (event.code === "KeyK") {
      buttons2[8].classList.remove("active-black");
    }
    if (event.code === "KeyL") {
      buttons2[9].classList.remove("active-black");
    }
  });
  return (
    <Container>
      <div className="topOfPiano" style={{ display: "flex" }}>
        <div className="tempo">
          <div className="pikachuButtonBlock">
            <button
              style={{ backgroundColor: IsTempoRun ? "blue" : "" }}
              className="pikachuButton"
              onClick={handleSwitchOnTempoRun}
            >
              <img src={tempoRun} className="pikachu"></img>
            </button>
          </div>
          <div className="bpmBlock">
            <button className="keyMin" onClick={handleTempoMin}>
              -
            </button>
            <input
              id="bpmInput"
              value={tempoNumber}
              max="244"
              min="30"
              type="range"
              onChange={handleTempoChange}
              // onChange={handleChangeTempoNumber}
            ></input>
            <button className="keyPlus" onClick={handleTempoPlus}>
              +
            </button>
          </div>
          <div className="tempoNumberBlock">
            <p id="tempoNumber">100bpm</p>
          </div>
        </div>
        <div className="recordBlock">
          <div style={{ float: "right" }}>
            <button
              className="recordButton"
              style={{ animation: IsRecord ? "colorChange 1s infinite" : "" }}
              onClick={handleRecordChange}
            >
              <img className="record" src={record} />
            </button>
          </div>
        </div>
      </div>

      <div className="pianoBlock">
        <div className="pianoBlockForBlack">
          <button className="black blackType1" id="b2">
            <span className="blackButtonText">2</span>
          </button>
          <button className="black blackType2" id="b3">
            <span className="blackButtonText">3</span>
          </button>
          <button className="black blackType3" id="b5">
            <span className="blackButtonText">5</span>
          </button>
          <button className="black blackType1" id="b6">
            <span className="blackButtonText">6</span>
          </button>
          <button className="black blackType2" id="b7">
            <span className="blackButtonText">7</span>
          </button>
          <button className="black blackType3" id="bG">
            <span className="blackButtonText">F</span>
          </button>
          <button className="black blackType2" id="bH">
            <span className="blackButtonText">G</span>
          </button>
          <button className="black blackType3" id="bK">
            <span className="blackButtonText">J</span>
          </button>
          <button className="black blackType1" id="bL">
            <span className="blackButtonText">K</span>
          </button>
          <button className="black blackType1" id="b">
            <span className="blackButtonText">L</span>
          </button>
        </div>
        <div className="pianoBlockForWhite">
          <button className="white" id="Q">
            <span className="buttonText">Q</span>
          </button>
          <button className="white" id="W">
            <span className="buttonText">W</span>
          </button>
          <button className="white" id="E">
            <span className="buttonText">E</span>
          </button>
          <button className="white" id="R">
            <span className="buttonText">R</span>
          </button>
          <button className="white" id="T">
            <span className="buttonText">T</span>
          </button>
          <button className="white" id="Y">
            <span className="buttonText">Y</span>
          </button>
          <button className="white" id="U">
            <span className="buttonText">U</span>
          </button>
          <button className="white" id="C">
            <span className="buttonText">C</span>
          </button>
          <button className="white" id="V">
            <span className="buttonText">V</span>
          </button>
          <button className="white" id="B">
            <span className="buttonText">B</span>
          </button>
          <button className="white" id="N">
            <span className="buttonText">N</span>
          </button>
          <button className="white" id="M">
            <span className="buttonText">M</span>
          </button>
          <button className="white" id=",">
            <span className="buttonText">,</span>
          </button>
          <button className="white" id=".">
            <span className="buttonText">.</span>
          </button>
          <button className="white" id="/">
            <span className="buttonText">/</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CreateYourselfPage;
