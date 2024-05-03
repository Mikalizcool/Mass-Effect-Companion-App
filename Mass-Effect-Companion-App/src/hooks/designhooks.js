import { useState, useEffect } from "react";

import Navbar from '../components/Navbar'

export function UseBackgroundImage(image) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = 'cover';
  }, []);
}

var a = document.getElementsByClassName("navelement");
export function navbarAppear() {
  useEffect(() => {
    a.display = "none";
  }, []);
}