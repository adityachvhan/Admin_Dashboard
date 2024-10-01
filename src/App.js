import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './scenes/global/TopBar';
import { Route, Routes } from 'react-router-dom'

import Dashboard from './scenes/dashboard/Dashboard';
import SideBar from './scenes/global/SideBar';
import { useState } from 'react';
// import Team from './scenes/team/Team';
// import Contacts from './scenes/contacts/Contacts';
// import Invoices from './scenes/invoices/Invoices';
// import Form from './scenes/form/Form';
// import Bar from './scenes/bar/Bar';
// import Pie from './scenes/pie/Pie';
// import Line from './scenes/line/Line';
// import FAQ from './scenes/faq/FAQ';
// import Geography from './scenes/geography/Geography';
// import Calendar from './scenes/calendar/Calendar';


function App() {

  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar isSidebar={isSidebar} />
          <main className='content'>
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={< Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}

              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;