import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider"; // adjust path if needed

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React app with routing and theme support.</p>
    </div>
  );
}

export default Home;