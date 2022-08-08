import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import UserAuth from './UserAuth/UserAuth.jsx';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Pokedex from '../components/Pokedex/Pokedex.jsx';
import About from './About/About.jsx';
import ProtectRoutes from './UserAuth/ProtectRoutes.jsx';
import Profile from './UserAuth/Profile.jsx';
import FamilyList from './List/FamilyList.jsx';


export default function Routes() {
  return (
    <RRoutes>
      <Route path="user/*" element={<UserAuth />} />
      <Route element={<Layout />}>
        <Route element={<ProtectRoutes />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="familylist" element={<FamilyList />}></Route>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="contact" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
