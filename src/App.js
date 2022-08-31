import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VernonHome from "./components/VernonHome";
import WilliHome from "./components/WilliHome";
import WWD from "./components/WWD";
import Insurance from "./components/Insurance";
import Hero from "./components/Hero";
import "./assets/css/style.css";
import "./assets/css/contact.css"
import ContactButton from "./components/ContactButton";
import Contact from "./components/Contact";

function App() {
    const [pages] = useState([
        {
            name: "home",
            display:"Home",
            component: <Home />
        },
      {
          name: "willihome",
          display: "Willimantic",
          component: <WilliHome />
      },
      {
          name: "vernon",
          display: "Vernon",
          component: <VernonHome />
      },
      {
          name: "whatwedo",
          display: "What We Do",
          component: <WWD />
      },
      {
          name: "insurance",
          display: "Insurance",
          component: <Insurance />
      },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [openContact, setOpenContact] = useState(false);

  return (
      <body className="App">
          <Header
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
          <Hero />
            <main>
              {currentPage.component}
            </main>
            <ContactButton />
            {openContact && <Contact />}
          <Footer />
      </body>
  );
}

export default App;
