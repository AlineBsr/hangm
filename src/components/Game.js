import {alpha, dict} from "../app/ressources";
import {Button, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function Game(props) {
  const {play, wordHidden, setWordHidden, attempt, setAttempt, setPlaying, setLetterGuess, letterGuess, word } = props;

  const handleLetter = (e) => {
    e.type === "keydown" && e.key.match(/^[a-z]$/gmi) && setLetterGuess(e.key);
    e.type === "click" && setLetterGuess(e.target.value);
    // console.log(e.target)

  };

  useEffect(() => {
      if(!play){
          if(attempt===0){
              alpha && alpha.map( letter => document.getElementById("btn" + letter).removeAttribute("style"))
              alpha.map( letter => document.getElementById("btn" + letter).removeAttribute("disabled"))
          }
      }
    if (play) {
      let reg = new RegExp(letterGuess, 'gmi')
      let res = word && word.match(reg)
      let temp = Array.from(wordHidden)

      if (letterGuess) {
        if (word.includes(letterGuess)) {
          document.getElementById("btn" + letterGuess).setAttribute("style", "background-color:green")
          document.getElementById("btn" + letterGuess).setAttribute("disable", "true")
        } else {
            setAttempt((attempt) => attempt + 1)
            document.getElementById("btn" + letterGuess).setAttribute("style", "background-color:red")
        }
      }

      if (word.includes(letterGuess)) {
        for (let i = 0; i < word.length; i++) {
          if (res[0] === word[i]) {
            temp[i] = letterGuess
            temp && setWordHidden(temp)
            if(temp.join("") === Array.from(word).join("") ){
              alert("WINNER!")
            }
          }
        }
      }

      if (attempt === 7){
        alert("LOOSER!")
        setWordHidden(word);
        setPlaying(play) ;
      }

    }
  }, [letterGuess])

  return (
    <Grid item id="board" onKeyDown={(e) => handleLetter(e)}>
      <div className="word">

        {wordHidden && Array.from(wordHidden).map((letter, key) => (
          <Typography key={key} variant={"h5"}
                      // sx={{margin:"0.35em", fontSize:"1.5rem"}}
                      className="word">
            {letter}
          </Typography>
        ))}

      </div>
      <div id="btnletter" className="letters" >
        {alpha.map((letter, i) => (
          <Button
            className="buttonLetter"
            key={i}
             id={"btn"+letter}
            value={letter}
            disabled={!play}
            // margin={2}
            sx={{margin:"7px"}}
            onClick={(e) => handleLetter(e)}
            variant={"contained"}
          >
            {letter}
          </Button>
        ))}
      </div>
    </Grid>
  );
}
