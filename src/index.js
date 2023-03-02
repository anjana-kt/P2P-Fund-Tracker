import React from 'react'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './styles/index.css';
import Home from './Home';
import Sponsor from './Sponsor'
import Reciever from './Reciever'
import Vendor from './Vendor'
import AddFund from './Sponsor-Pages/AddFund'
import Monitor from './Sponsor-Pages/Monitor'
import History from './Vendors-Pages/History'
import Pay from './Reciever-Pages/Pay'
import RHistory from './Reciever-Pages/History'

document.title="Fund Track";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="reciever" element={<Reciever />} />
          {/* <Route path="vendor" element={<Vendor />} /> */}
          <Route path="vendor" element={<History/> }/>
          <Route path='sponsor/add-fund' element={<AddFund/>} />
          <Route path='sponsor/monitor' element={<Monitor/>} />
          <Route path='vendor/history' element={<History/>} />
          <Route path='reciever/history' element={<RHistory/>} />
          <Route path='reciever/pay' element={<Pay/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
