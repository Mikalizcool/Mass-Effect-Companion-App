import { useState, useEffect } from "react";

export function UseBackgroundImage(image) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = 'cover';
  }, []);
}