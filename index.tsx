
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  return <Button variant="contained">Hi</Button>;
}

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);