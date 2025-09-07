import './App.css';
import {Routes, Route} from 'react-router-dom';
import AllProduct from './pages/AllProduct';
import Available from './pages/Available';
import CardHeader from './components/CardHeader';

function App() {

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#111315] relative py-4">
      <div className="absolute top-0 left-0 w-full h-[20%]">
        <img className="w-full h-full object-cover" src="/resources/bg-cafe-lg.jpg" alt="bg-image"/>
      </div>
      <div className="w-[90%] h-[70%] px-6 py-6 flex flex-col z-10 bg-[#1B1D1F] rounded-md shadow-lg">
        <section className="h-[30%] w-full">
          <CardHeader />
        </section>
        <section className="h-[70%] w-full">
          <Routes>
            <Route path='/' element={<AllProduct />} />
            <Route path='/available' element={<Available />} />
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default App
