import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerPage from './pages/CustomerPage';
import DeadBodyPage from './pages/DeadBodyPage';
import { CustomerProvider } from './contexts/CustomerContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <CustomerProvider>
        <Toaster /> 
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto mt-8 flex-grow">
          <Routes>
            <Route path="/" element={<CustomerPage />} />
            <Route path="/dead-bodies" element={<DeadBodyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </CustomerProvider>
    </Router>
  );
}

export default App;



