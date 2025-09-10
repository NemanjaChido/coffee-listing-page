import './App.css';
import {Routes, Route} from 'react-router-dom';
import AllProduct from './pages/AllProduct';
import Available from './pages/Available';
import CardHeader from './components/CardHeader';

function App() {
  const imageLink = import.meta.env.BASE_URL + "resources/bg-cafe-lg.jpg";

  return (
    <div className="min-h-screen md:h-screen w-screen flex items-center justify-center bg-[#111315] relative">
      <div className="absolute top-0 left-0 w-full h-[20%]">
        <img className="w-full h-full object-cover" src={imageLink} alt="bg-image"/>
      </div>
      <div className="w-[80%] h-[85%] px-6 py-6 flex flex-col gap-2 items-center justify-center z-10 bg-[#1B1D1F] rounded-md shadow-lg">
        <section className="h-[30%] w-full overflow-y-auto">
          <CardHeader />
        </section>
        <section className="h-[70%] w-full overflow-y-auto">
          <Routes>
            <Route path='/coffee-listing-page' element={<AllProduct />} />
            <Route path='/available' element={<Available />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </div>
  )
}

// Simple NotFound component to handle unmatched routes
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default App
