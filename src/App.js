import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Dialogs from "./Components/Dialogs/Dialogs";

function App(props) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" exact element={<News />} />
            <Route
              path="/dialogs"
              exact
              element={
                //props from the state
                <Dialogs messages={props.messages} dialogs={props.dialogs} />
              }
            />

            <Route
              path="/profile"
              element={
                //props from the state
                <Profile post={props.posts} />
              }
            />
            <Route path="/news" exact element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
