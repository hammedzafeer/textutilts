import { useState } from "react";
import Alert from "./Components/Alert/Alert";
import Nav from "./Components/Navbar/Nav";
import TextForm from "./Components/TextUtilty/TextForm";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  const ModeToggle = () => {
    if(Mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled" , "success");
      setTimeout(setalert(null), 5000)
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#9aa593";
      showAlert("Dark mode has been enabled" , "success");

    }
  }
  const BlueModeToggle = () => {
    if(Mode === "primary") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");

    }
    else{
      setMode("primary");
      document.body.style.backgroundColor = "rgb(4, 39, 67)";
      showAlert("Blue Dark mode has been enabled", "success");
    }
  }
  return (
    <div>
      <Nav mode={Mode} toggle={ModeToggle} BlueToggle={BlueModeToggle} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={Mode}/>
    </div>
  );
}

export default App;
  