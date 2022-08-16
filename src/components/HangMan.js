import {alpha, dictAnimals, dictFood, dictGeneral, dictIT, dictNature} from "../app/ressources";
import {useState, useEffect } from "react";
import Game from "./Game";
import MenuGame from "./MenuGame";
import {Grid, Typography} from "@mui/material";
import Hang0 from "../img/h0.png";
import Hang1 from "./../img/h1.png";
import Hang2 from "./../img/h2.png";
import Hang3 from "./../img/h3.png";
import Hang4 from "./../img/h4.png";
import Hang5 from "./../img/h5.png";
import Hang6 from "./../img/h6.png";
import Hang7 from "./../img/h7.png";
 

export default function HangMan() {
  const [cat, setCat] = useState(dictGeneral)
  const [word, setWord] = useState( cat[Math.floor(Math.random() * cat.length)] );
  const [play, setPlaying] = useState(false);
  const [letterGuess, setLetterGuess] = useState("");
  const [attempt, setAttempt] = useState(0)
  let wordGuess =  word.replace(/([a-z])/mg, '_')
  const [wordHidden, setWordHidden] = useState(wordGuess)
  const [imgHang, setImgHang] = useState(Hang0)
  const [catLabel, setCatLabel] = useState("")

  const handlePlayClick = (e) => {
    e.preventDefault();
    e.persist();
    setPlaying(!play);
    raz()
    console.log(cat)
    setWord(cat[Math.floor(Math.random() * cat.length)]);
    let reg = new RegExp(/btn*/, "gmi")
  };

  const raz = () => {
    setAttempt(0)
    // setWordHidden("")
    setLetterGuess("")
    setImgHang(Hang0)
    alpha.map( letter => document.getElementById("btn" + letter).removeAttribute("style, disabled"))
    alpha && alpha.map( letter => document.getElementById("btn" + letter).setAttribute("style", "background-color:default"))
    alpha && alpha.map( letter => document.getElementById("btn" + letter).removeAttribute("style"))
  }

  useEffect(() => {
    let temp = word.replace(/([a-z])/gm, '_')
    console.log(temp)
    let first = word[0]
    temp.replace(/(_).+/, word[0])
    setWordHidden(temp)
    console.log(wordHidden.length)
  }, [play])

  useEffect(() => {
     console.log(word.toString() )
  }, [word])

  useEffect(() => {
    switch (attempt) {
      case 1:
        setImgHang(Hang1)
        break;
      case 2:
        setImgHang(Hang2)
        break;
      case 3:
        setImgHang(Hang3)
        break;
      case 4:
        setImgHang(Hang4)
        break;
      case 5:
        setImgHang(Hang5)
        break;
      case 6:
        setImgHang(Hang6)
        break;
      case 7:
        setImgHang(Hang7)
        break;
    }
  }, [attempt])

  return (
      <Grid container
            className={"game-container"}

            >
        <Grid item  flexDirection={"column"} alignItems={"flex-start"} >
          <MenuGame
              play={play}
              setPlaying={setPlaying}
              handlePlayClick={handlePlayClick}
              setCat={setCat}
              raz={raz}
              catLabel={catLabel}
              setCatLabel={setCatLabel}
          />
        </Grid>
        <Grid item
              lg={10} sm={10} md={10}
              display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
        >
          <img className={"hangIm-container"} src={imgHang}/>
          <Grid item className={"game-cat"}>
            <Typography variant={"button"}>
            <i>  [ {catLabel} ] </i>
            </Typography>

          </Grid>
            <Game
                wordHidden={wordHidden} word={word}
                setWordHidden={setWordHidden}
                attempt={attempt}
                setAttempt={setAttempt}
                play={play}
                setPlaying={setPlaying}
                letterGuess={letterGuess}
                setLetterGuess={setLetterGuess}
            />

        </Grid>
      </Grid>
  );
}