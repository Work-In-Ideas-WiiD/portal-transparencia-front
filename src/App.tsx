import { Routes } from "./Routes"
import './styles/global.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}

export default App
