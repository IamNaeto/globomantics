import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';

function App() {
 const allHouses = useHouses();
 const featuredHouse = useFeaturedHouse(allHouses)

  return (
    <Router>
      <div className="container py-4">
        <Header subtitle="Providing houses all over the world"/>
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses = {allHouses} />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery allHouses = {allHouses} />
          </Route>

          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
