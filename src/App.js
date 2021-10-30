import "./App.css";
import NavBar from "./components/side-bars/NavBar";
import FriendActivity from "./components/side-bars/FriendActivity";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far, faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faBookmark,
  faCalendarAlt,
  faCompass,
  faUser,
  faUsers,
  faCog,
  faUserPlus,
  faLaptop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

// Adds icons to be globally used
library.add(
  fab,
  faHome,
  faBookmark,
  faCompass,
  faCalendarAlt,
  faUser,
  faUsers,
  faCog,
  faUserPlus,
  faLaptop,
  faMobileAlt
);

function App() {
  return (
    <div>
      <NavBar />
      <FriendActivity />
    </div>
  );
}

export default App;
