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
      <UserProfile name="Benjamin" age="22" bio="Loves hiking and photographyLove to read my Bible and fellowship with the Holy Spirit" />

      <Footer />
    </>
  );
}

export default App;
