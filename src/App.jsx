import { Navbar } from "./components/navbar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
