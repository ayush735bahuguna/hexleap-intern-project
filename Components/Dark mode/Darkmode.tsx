"use client"
import React, { useEffect, useState } from 'react'
import './DarkMode.css'

export default function Darkmode() {
    const [selectedTheme, setSelectedTheme] = useState<String>("light");
    // const [selectedTheme, setSelectedTheme] = useState<String>(localStorage.getItem("selectedTheme") || "light");

    useEffect((): void => {
        if (selectedTheme === "dark") {
            SetDarkMode();
        } else {
            SetLightMode();
        }
    }, [selectedTheme]);

    const toggletheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? SetDarkMode() : SetLightMode()
    }

    const SetDarkMode = (): void => {
        const Html = document.querySelector("html");
        if (Html !== null || Html) {
            Html.setAttribute('class', 'dark');
        }
        // localStorage.setItem("selectedTheme", "dark")
    }
    const SetLightMode = (): void => {
        const Html = document.querySelector("html");
        if (Html !== null || Html) {
            Html.setAttribute('class', 'light');
        }
        // localStorage.setItem("selectedTheme", "light")
    }


    return (
        <input type='checkbox' id="toggle" onChange={toggletheme} defaultChecked={selectedTheme === "dark"} />
    )
}
