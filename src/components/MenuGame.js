import {Button, Grid} from "@mui/material";
import {dictIT, dictNature, dictAnimals,dictFood, dictGeneral } from "../app/ressources";
import {useEffect, useState} from "react";

const MenuGame = (props) => {
    const {play, setPlaying, handlePlayClick, setCat, catLabel, raz, setCatLabel} = props;

    const handleSetCat = (cat, e) => {
        setPlaying(false)
        raz()
        // console.log(cat)
        setCatLabel(e.target.value)
     }

    useEffect(() => {
        catLabel === "" && setCatLabel("General")
        switch (catLabel) {
            case "Food":
                setCat(dictFood)
                break;
            case  "Animals":
                setCat(dictAnimals)
                break;
            case "General":
                setCat(dictGeneral)
                break;
            case "IT":
                setCat(dictIT)
                break;
            case "Nature":
                setCat(dictNature)
                break;
            default:
                setCat(dictGeneral)
                break;
        }
    }, [catLabel])

    return (
        <Grid container display={"flex"} flexDirection={"column"}>
            <Grid item md={1} m={1}>
                {play === false
                    ? (<Button
                             color={"success"}

                            variant={"contained"} onClick={handlePlayClick}
                        >
                            {"Play"}
                        </Button>
                    ) : (<Button
                             variant={"contained"} color={"error"} onClick={handlePlayClick}
                            disabled={!play}
                        >
                            {"Restart"}
                        </Button>
                    )
                }
            </Grid>
            <Grid item>
                <hr/>
            </Grid>
            <Grid item m={1}>
                <Button
                     color={"warning"}
                    variant={"contained"}
                    onClick={(e) => handleSetCat(dictFood, e)}
                    value={"Food"}
                >
                    Food
                </Button>
            </Grid>
            <Grid item m={1}>
                <Button
                     color={"warning"}
                    variant={"contained"}
                    className={"btnCat"}
                    // sx={{backgroundColor:"secondary"}}
                    onClick={(e) => handleSetCat(dictIT, e)}
                    value={"IT"}

                >
                    IT
                </Button>
            </Grid>
            <Grid item m={1}>
                <Button
                     color={"warning"}
                    variant={"contained"}
                    onClick={(e) => handleSetCat(dictAnimals, e)}
                    value={"Animals"}
                >
                    Animals
                </Button>
            </Grid>
            <Grid item m={1}>
                <Button
                     color={"warning"}
                    variant={"contained"}
                    onClick={(e) => handleSetCat(dictGeneral, e)}
                    value={"General"}
                >
                    General
                </Button>
            </Grid>
        </Grid>
    )
}

export default MenuGame;