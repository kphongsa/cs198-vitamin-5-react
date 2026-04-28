import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { ThemeProvider } from "../../context/ThemeContext";
import { ThemeContext } from "../../ThemeProvider";

// TODO: Add navigation links to Home and CounterPage
// TODO: Add a theme toggle button
// TODO: Use useContext to access theme and toggle function
// TODO: Apply class "navbar-light" or "navbar-dark" using ternary operator based on theme
// TODO: Create Navbar.css with styles for navbar-light and navbar-dark
function Navbar() {

    const { theme, toggleTheme} = useContext(ThemeContext)

  return (
  <nav className={theme === "light" ? "navbar-light" : "navbar-dark"}>
    <Link to = "/">Home</Link>
    <Link to = "/counter">CounterPage</Link>

    <button onClick = {toggleTheme}>
        Toggle Theme
    </button>
  </nav>
  );
}

export default Navbar;