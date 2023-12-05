import React, { useId } from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import { DatePicker } from "antd";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Tạo component App
function App() {
  return <div><DatePicker />
    <h1>chau dang</h1>
    <div class="alert alert-dark" role="alert">
      A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
  </div>;
}

// Render component App vào #root element
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
