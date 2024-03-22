"use client"
import React, { useEffect, useState } from 'react'
import './DarkMode.css'

export default function Darkmode() {
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("selectedTheme") || "light");
    useEffect(() => {
        if (selectedTheme === "dark") {
            SetDarkMode();
        } else {
            SetLightMode();
        }
    }, [selectedTheme]);


    const toggletheme = (e) => { e.target.checked ? SetDarkMode() : SetLightMode() }

    const SetDarkMode = () => {
        document.querySelector("html").setAttribute('class', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const SetLightMode = () => {
        document.querySelector("html").setAttribute('class', 'light')
        localStorage.setItem("selectedTheme", "light")
    }


    return (
        <input type='checkbox' id="toggle" onChange={toggletheme} defaultChecked={selectedTheme === "dark"} />
    )
}
