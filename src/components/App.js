import React, { useState, useContext } from "react";
import { AppContext } from "../app/context";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HangMan from "./HangMan";
import {Grid} from "@mui/material";

export default function App() {
  const app = useContext(AppContext);

  return (
    <main  className={app.theme === "dark" ? "dark" : "light"}>
      <Navbar />
      <HangMan />
      <Footer />
    </main>
  );
}
