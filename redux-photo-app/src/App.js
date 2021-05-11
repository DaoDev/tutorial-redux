import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

//Lazy load
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          {/* TODO: Remove after testing */}
          <ul>
            <li>
              <Link to="/photos">Go to photo pages</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add new photo pages</Link>
            </li>
            <li>
              <Link to="/photos/edit">Go to Edit photo pages</Link>
            </li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
