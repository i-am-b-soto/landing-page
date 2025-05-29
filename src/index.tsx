import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import 'antd';

import Router from "./router";


const App = () => (
  <BrowserRouter>
      <Router />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
