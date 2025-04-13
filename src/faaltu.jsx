import React, { useState } from "react";
const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("C");
    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value);
    };
    const handleScaleChange = (event) => {
        setScale(event.target.value);
    };
    const convertTemperature = () => {
        if (temperature === "") return "";
        const temp = parseFloat(temperature);
        if (isNaN(temp)) return "Invalid Input";
        return scale === "C"
            ? ((temp * 9) / 5 + 32).toFixed(2) + " °F"
            : (((temp - 32) * 5) / 9).toFixed(2) + " °C";
    };
    return (
        <div style={{ textAlign: "center", paddingLeft: "500px", fontSize: "30px" }}>
            <h2>Temperature Converter</h2>
            <input
                type="text"
                placeholder="Enter temperature"
                value={temperature}
                onChange={handleTemperatureChange}
            />
            <select value={scale} onChange={handleScaleChange}>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
            </select>
            <h3>Converted Temperature: {convertTemperature()}</h3>
        </div>
    );
};
export default TemperatureConverter;

