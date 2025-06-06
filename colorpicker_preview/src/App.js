import React, { useState } from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer for ColorPicker Preview.
 * Allows user to pick a color and see the preview update.
 */
function App() {
  // Default color is the accent from the provided palette or a blue fallback
  const palette = {
    primary: "#ffffff",
    secondary: "#f0f0f0",
    accent: "#007bff",
  };
  const [color, setColor] = useState(palette.accent);

  // Handler for color input
  // PUBLIC_INTERFACE
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="colorpicker-app-bg">
      <div className="colorpicker-center-wrapper">
        <div className="colorpicker-card">
          <h2 className="colorpicker-title">ColorPicker Preview</h2>
          <label
            htmlFor="color-picker"
            className="colorpicker-label"
          >
            Choose a Color
          </label>
          <input
            id="color-picker"
            className="colorpicker-input"
            type="color"
            value={color}
            onChange={handleColorChange}
            aria-label="Pick a color"
          />
          <div className="colorpicker-preview-label">Preview:</div>
          <div
            className="colorpicker-preview"
            style={{
              backgroundColor: color,
              boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
              border: `2px solid ${palette.secondary}`,
              transition: "background 0.25s",
            }}
            data-testid="color-preview"
          >
            <span className="colorpicker-color-code">{color.toUpperCase()}</span>
          </div>
        </div>
      </div>
      <footer className="colorpicker-footer">
        <small>
          © {new Date().getFullYear()} ColorPicker Preview • Powered by React
        </small>
      </footer>
    </div>
  );
}

export default App;
