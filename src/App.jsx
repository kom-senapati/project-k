import { Route, Switch } from "wouter";
import Portfolio from "./pages/Portfolio";
import ProjectGallery from "./pages/ProjectGallery";
import LinkTree from "./pages/Linktree";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/projects" component={ProjectGallery} />
      <Route path="/linktree" component={LinkTree} />

      <Route>404: No such page!</Route>
    </Switch>
  );
};

export default App;
