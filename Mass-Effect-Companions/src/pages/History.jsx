import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UseBackgroundImage } from "../hooks/designhooks";
function History () {
    UseBackgroundImage('');
    return (
        <p> hi</p>
    )
}
export default History;