import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile 
        name="Ernest Ampoe" 
        age={25} 
        bio="Aspiring Frontend Developer and Librarian." 
      />
      <MainContent />
      <Counter /> {/* Add Counter here */}
      <Footer />
    </div>
  );
}

export default App;
