import ReactCalendar from "./components/ReactCalendar";
import ClassSearchBar from "./components/ClassSearchBar";
import Auto from "./components/ClassSearchBar";
import Roster from "./components/roster";

import './App.css';
import React from "react";

function App() {
  return (
      <body>
      <div className="leftside">
          <div className="search">

              <p>Add Classes</p>
              <Auto />
          </div>

          <div className="roster">

              <p>Class Roster</p>
              <Roster/>

          </div>

      </div>

      <ReactCalendar/>

      </body>
  );
}

export default App;
