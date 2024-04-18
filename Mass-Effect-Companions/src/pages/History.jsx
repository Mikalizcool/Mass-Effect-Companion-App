import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UseBackgroundImage } from "../hooks/designhooks";
import history from '../assets/history.jpg'
function History () {
    UseBackgroundImage(history);
    return (
        <p> hi</p>
    )
}
export default History;