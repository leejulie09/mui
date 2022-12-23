import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={() => <div>Home</div>} />
          <Route path="/service" element={() => <div>service</div>} />
          <Route
            path="/customsoftware"
            element={() => <div>customsoftware</div>}
          />
          <Route path="/mobileapps" element={() => <div>mobileapps</div>} />
          <Route path="/websites" element={() => <div>websites</div>} />
          <Route path="/revolution" element={() => <div>revolution</div>} />
          <Route path="/about" element={() => <div>about</div>} />
          <Route path="/contact" element={() => <div>contact</div>} />
          <Route path="/estimate" element={() => <div>estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
