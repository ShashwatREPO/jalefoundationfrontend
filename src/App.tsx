import "./App.css";
import EnrollNow from "./components/EnrollNow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Works from "./components/Works";

function App() {
  return (
    <>
      <main className="font-inter scroll-smooth">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <Works />
        <Impact />
        <EnrollNow />
        <Footer />
      </main>
    </>
  );
}

export default App;
