import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Home/Home';
import Pokedex from './Pokedex/Pokedex.jsx';
import About from './About/About';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext';
import Families from './List/Families';
import FamilyList from './List/FamilyList';

export default function App() {
  return (
    <Router>
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="familylist" element={<FamilyList />}>
              <Route index element={<Families />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FuzzyBunnyProvider>
    </Router>);
}
