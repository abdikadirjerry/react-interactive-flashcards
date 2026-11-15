import React from "react";
import { Header } from "./components/Header";
import { FlashcardDeck } from "./components/FlashcardDeck";

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex flex-col selection:bg-indigo-500 selection:text-white">
      <Header />
      <FlashcardDeck />
    </div>
  );
}

export default App;
