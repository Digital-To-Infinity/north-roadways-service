import './App.css'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App min-h-screen flex flex-col font-poppins selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App
