import './App.css';
import {Article, Navbar, Brand, Cta} from './components'
import { Header, Footer, Blog, Possibility, Features, Formation } from './containers'

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
        <Navbar />
        <Header />
     </div>
     <Brand />
      <Formation />
     <Features />
     <Possibility />
     <Cta />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
