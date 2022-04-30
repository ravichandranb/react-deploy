import React from "react";
import TodoComponent from "./TodoComponent";
import NewsApp from "./NewsApp";
import SearchNews from "./SearchNews";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

/*import SampleComponent from "./SampleComponent";
import ProductsMenu from "./ProductsMenu";

import LifeCyclemethods from "./LifeCyclemethods";



import Openweather from "./Openweather";
import ClassComponentEg from "./ClassComponentEg";
import ToggleComponent from "./ToggleComponent";
import GreetComponent from "./FunctionalComponents/GreetComponent";



};*/

const tododata = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
    active: true,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
    active: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    active: true,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
    active: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    active: true,
  },
];
/*
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link>NewsApp1</Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}
*/
function App() {
  return (
    <BrowserRouter>
      <Link to="/newsApp">NewsApp1</Link>
      <br></br>
      <Link to="/newsApp1">Search</Link>

      <Routes>
        <Route path="/newsApp" element={<NewsApp></NewsApp>}></Route>
        <Route path="/newsApp1" element={<SearchNews></SearchNews>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
