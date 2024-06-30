
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import About from './Components/About';
import Features from './Components/Features';
import Showcase from './Components/Showcase';
import Working from './Components/Working';
import Testimonial from './Components/Testimonial';
import Pricing from './Components/Pricing';
import BlogContact from './Components/BlogContact';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <div className="section-bg">
        <Navbar />
        <Home />
      </div>
      <About />
      <Features />
      <Showcase/>
      <Working/>
      <Testimonial/>
      <Pricing/>
      <BlogContact/>
      <Contact/>
    </div>
  );
}

export default App;
