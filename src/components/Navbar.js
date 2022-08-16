import React, { useContext } from "react";
import { AppContext } from "../app/context";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {Grid, Typography} from "@mui/material";

export default function Navbar() {
  const app = useContext(AppContext);

  return (
      <Grid container className={"HeaderTheme"}>
          <Grid item>
              <FontAwesomeIcon
                  className="themeIcoNav"
                  onClick={app.toggleTheme}
                  icon={app.theme === "dark" ? faSun : faMoon}
              />
          </Grid>
          <Grid item alignItems={"center"}>
              <Typography variant={"h3"}>Hang-Man v.0.2</Typography>
          </Grid>
      </Grid>
  );
}
