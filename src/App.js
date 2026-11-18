import "./App.css";
import React from "react";
import { ThemeContext } from "./Context/theme";
import Aos from "aos";
import { Header } from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import GitHub from "./Components/GitHub/GitHub";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Gitstat } from "./Components/Gitstat/Gitstat";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // Mirror the theme class onto <body> so CSS variables cascade to it too.
  React.useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themename);
  }, [themename]);

  // Anchor jumps are applied by the browser while the page is still settling.
  // Webfonts and images that land afterwards reflow the layout and leave the
  // section heading off screen, so re-apply the jump once things are stable.
  React.useEffect(() => {
    let cancelled = false;

    // A manual scroll wins over the correction.
    const userScrolled = () => {
      cancelled = true;
    };

    const correct = () => {
      if (cancelled) return;
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      let target;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      // Already where it should be? Leave the browser's own scroll alone.
      if (Math.abs(target.getBoundingClientRect().top - margin) <= 2) return;
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };

    const correctWhenSettled = () => {
      const fonts = document.fonts && document.fonts.ready;
      // setTimeout rather than rAF: rAF is throttled in background tabs.
      const run = () => window.setTimeout(correct, 16);
      if (fonts) fonts.then(run);
      else run();
    };

    // The page can still be reflowing long after the first jump, so retry a
    // few times before giving up.
    const scheduleCorrections = () => {
      correctWhenSettled();
      [300, 900, 2000].forEach((delay) =>
        window.setTimeout(correctWhenSettled, delay)
      );
    };

    // A nav click is a fresh request, so it re-arms the correction.
    const onHashChange = () => {
      cancelled = false;
      scheduleCorrections();
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", userScrolled, { passive: true });
    window.addEventListener("touchmove", userScrolled, { passive: true });
    window.addEventListener("load", scheduleCorrections, { once: true });
    if (window.location.hash) scheduleCorrections();

    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", userScrolled);
      window.removeEventListener("touchmove", userScrolled);
      window.removeEventListener("load", scheduleCorrections);
    };
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <br />
        <GitHub />
        <Gitstat />
        <GetInTouch />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
