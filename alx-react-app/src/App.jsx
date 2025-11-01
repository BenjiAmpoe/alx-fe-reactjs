import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />   {/* Kept from previous task */}
      <Footer />
    </>
  );
}

export default App;
