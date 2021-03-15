import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import AnimationTest from './components/AnimationTest'
import NavBarStandard from './components/NavbarStandard'
import Shop from './pages/Shop'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <NavBarStandard />
          <Route exact path="/" component={AnimationTest} />
          <Route exact path="/shop-online" component={Shop} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
