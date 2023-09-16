import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/scss/bootstrap.scss"
import "styles.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
