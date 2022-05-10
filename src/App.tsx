import React, { useEffect, useState } from "react";
import TypeInput from "./components/Typing";
import words from "./components/words.json";
import "./App.css";

function App() {
  let [count, setCount] = useState(50);
  let forceUpdate = UpdateWords();
  let randomText = RandomWord(words).join(" ");
  let wordCount = randomText.split(" ").length;

  // set different themes
  const [theme, setTheme] = useState("olivia");
  const themes = ["olivia", "mizu", "bingsu", "botanical", "taro"];

  const renderThemes = (themes: string[]) => {
    return themes.map((theme: string, index: number) => {
      return (
        <li
          key={index}
          onClick={() => setTheme(theme)}
          className="cursor-pointer list-none mx-1 text-primary hover:text-third"
        >
          {theme}
        </li>
      );
    });
  };

  useEffect(() => {
    document.body.classList.add(theme);
    document.body.classList.add("bg-secondary");
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  // set different fonts
  const [font, setFont] = useState("font-mono");
  const fonts = ["font-mono", "font-sans", "font-serif"];

  const renderFonts = (fonts: string[]) => {
    return fonts.map((font: string, index: number) => {
      return (
        <li
          key={index}
          onClick={() => setFont(font)}
          className="cursor-pointer list-none mx-1 text-primary hover:text-third"
        >
          {font.slice(5)}
        </li>
      );
    });
  };

  useEffect(() => {
    document.body.classList.add(font);
    return () => {
      document.body.classList.remove(font);
    };
  }, [font]);

  function RandomWord(array: any) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array.slice(0, count);
  }

  function UpdateWords() {
    let [value, setValue] = useState(true);
    return () => setValue(!value);
  }

  const handleKeyDown = (letter: string, control: boolean) => {
    if (letter === "Enter") {
      forceUpdate();
    }
  };

  function changeWordCount(number: number) {
    setCount(number);
    forceUpdate();
  }

  return (
    <div className="flex flex-col">
      <section className="relative w-full px-8 bg-secondary">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-3xl">
          <a
            href="/"
            className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none text-primary"
            tabIndex={-1}
          >
            minitype
          </a>
          <div>
            <div className="flex flex-row justify-end mr-1">
              <p className="mr-2.5 text-primary">words: </p>
              <button
                onClick={() => {
                  changeWordCount(10);
                }}
                className="mr-2.5 text-primary hover:text-third"
                tabIndex={-1}
              >
                10
              </button>
              <button
                onClick={() => {
                  changeWordCount(25);
                }}
                className="mr-2.5 text-primary hover:text-third"
                tabIndex={-1}
              >
                25
              </button>
              <button
                onClick={() => {
                  changeWordCount(50);
                }}
                className="mr-2.5 text-primary hover:text-third"
                tabIndex={-1}
              >
                50
              </button>
              <button
                onClick={() => {
                  changeWordCount(100);
                }}
                className="text-primary hover:text-third"
                tabIndex={-1}
              >
                100
              </button>
            </div>
            <div className="flex flex-row justify-end">
              <p className="mr-2.5 text-primary">themes: </p>
              {renderThemes(themes)}
            </div>
            <div className="flex flex-row justify-end">
              <p className="mr-2.5 text-primary">fonts: </p>
              {renderFonts(fonts)}
            </div>
          </div>
        </div>
      </section>
      <div className="container flex flex-col flex-wrap mx-auto md:flex-row max-w-3xl bg-secondary fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
        <span className="text-primary mb-4">words: {wordCount}</span>
        <div
          onKeyDown={(e) => handleKeyDown(e.key, e.ctrlKey)}
          className="container max-w-3xl self-center object-center"
          tabIndex={0}
        >
          <TypeInput text={randomText} />
        </div>
      </div>
      <div className="text-primary max-w-3xl text-center fixed left-1/2 bottom-40 -translate-x-2/4">
        <p className="mb-5">
          <span className="bg-primary text-secondary rounded-md border-4 border-primary">
            tab
          </span>{" "}
          +{" "}
          <span className="bg-primary text-secondary rounded-md border-4 border-primary">
            enter
          </span>{" "}
          to reset test
        </p>
        <p>press redo to reset current test</p>
      </div>
      <div className="text-primary absolute bottom-0 w-full px-8">
        <div className="container flex flex-col items-center py-8 mx-auto max-w-3xl sm:flex-row">
          <a href="/" className="text-xl leading-none select-none" tabIndex={-1}>
            minitype
          </a>
          <p className="mt-4 pt-1 text-sm sm:ml-4 sm:pl-4 sm:mt-0">
            © 2022 Machkeys
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.instagram.com/mach_keys/"
              className="hover:text-third"
              tabIndex={-1}
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/mctekno/minitype" className="hover:text-third" tabIndex={-1}>
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
