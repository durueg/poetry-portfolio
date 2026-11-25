import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./app/App";

const aliveEnoughItalicLines = new Set([
  "Oh, you fool, stuck inside unanswered prayers,",
  "don’t you know this is all you can carry around?",
  "That blank stare, caught in a state of hopelessness",
  "where did the light go? In which passing hour did you leave it?",
]);

function italicizeAliveEnoughLines() {
  document.querySelectorAll("pre").forEach((poem) => {
    if (poem.querySelector("em[data-alive-enough-line]")) return;

    const lines = (poem.textContent ?? "").split("\n");
    if (!lines.some((line) => aliveEnoughItalicLines.has(line))) return;

    const formattedPoem = document.createDocumentFragment();
    lines.forEach((line, index) => {
      if (aliveEnoughItalicLines.has(line)) {
        const emphasis = document.createElement("em");
        emphasis.className = "italic";
        emphasis.dataset.aliveEnoughLine = "true";
        emphasis.textContent = line;
        formattedPoem.append(emphasis);
      } else {
        formattedPoem.append(document.createTextNode(line));
      }

      if (index < lines.length - 1) {
        formattedPoem.append(document.createTextNode("\n"));
      }
    });

    poem.replaceChildren(formattedPoem);
  });
}

const poemObserver = new MutationObserver(italicizeAliveEnoughLines);
poemObserver.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

queueMicrotask(italicizeAliveEnoughLines);
