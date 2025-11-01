import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // <-- required import

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />

      {/* Render UserProfile with props (name, age, bio) */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <Footer />
    </>
  );
}

export default App;
