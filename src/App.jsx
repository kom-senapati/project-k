import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectGallery from "./pages/ProjectGallery";
import LinkTree from "./pages/Linktree";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="h-8 pt-5 flex flex-row gap-5 items-center justify-center">
        <h1>Select a theme : </h1>
        <button
          data-set-theme="forest"
          data-act-class="ACTIVECLASS"
          className="btn btn-neutral btn-sm"
        >
          DARK
        </button>
        <button
          data-set-theme="emerald"
          data-act-class="ACTIVECLASS"
          className="btn btn-neutral btn-sm"
        >
          LIGHT
        </button>
      </div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/projects" component={ProjectGallery} />
        <Route path="/linktree" component={LinkTree} />

        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
};

export default App;
