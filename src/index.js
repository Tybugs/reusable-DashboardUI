import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Administrator from './pages/Administrator/Administrator';
import Contributors from './pages/Contributors/Contributors';
import BeneficiaryUser from './pages/BeneficiaryUser/BeneficiaryUser';
import VolunteerUser from './pages/VolunteerUser/VolunteerUser';
import Reports from './pages/Reports/Reports';
import Help from './pages/Help/Help';
import Settings from './pages/Settings/Settings';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

ReactDOM.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="administrator" element={<Administrator />} />
        <Route path="contributors" element={<Contributors />} />
        <Route path="beneficiary-user" element={<BeneficiaryUser />} />
        <Route path="volunteer-user" element={<VolunteerUser />} />
        <Route path="reports" element={<Reports />} />
        <Route path="help" element={<Help />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);


reportWebVitals();
