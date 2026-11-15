import React, { useState } from "react";
import { FLASHCARDS } from "../data/flashcards";

export const FlashcardDeck = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  const categories = [
    "All",
    "JavaScript",
    "React",
    "Database",
    "TypeScript",
    "Git",
  ];

  const filteredCards = FLASHCARDS.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory,
  );

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredCards.length) % filteredCards.length,
    );
  };

  const handleMastered = () => {
    setMasteredCount((prev) => prev + 1);
    handleNext();
  };

  return (
    <div className="flex-1 max-w-3xl w-full mx-auto p-8 space-y-6 flex flex-col font-mono">
      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs transition-colors border ${
              selectedCategory === cat
                ? "bg-indigo-600 border-indigo-500 text-white font-bold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress & Stats */}
      <div className="flex justify-between items-center text-xs text-slate-400 bg-slate-900/60 border border-slate-800 px-5 py-3 rounded-2xl">
        <span>
          Card {currentIndex + 1} of {filteredCards.length}
        </span>
        <span className="text-emerald-400 font-bold">
          Mastered: {masteredCount}
        </span>
      </div>

      {/* Flashcard Box */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="bg-slate-900/90 border border-slate-800 rounded-3xl p-10 min-h-[260px] flex flex-col justify-between items-center text-center cursor-pointer shadow-2xl hover:border-indigo-500/50 transition-all relative select-none"
      >
        <span className="text-[10px] font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-full uppercase">
          {currentCard.category} &bull; {isFlipped ? "Answer" : "Question"}
        </span>

        <div className="py-6">
          <p className="text-base text-slate-100 font-semibold leading-relaxed">
            {isFlipped ? currentCard.answer : currentCard.question}
          </p>
        </div>

        <span className="text-[11px] text-slate-500">
          Click card anywhere to flip ⟳
        </span>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={handlePrev}
          className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs transition-colors"
        >
          &larr; Previous
        </button>
        <button
          onClick={handleMastered}
          className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 font-bold py-3 rounded-xl text-xs transition-colors"
        >
          ✓ Mark Mastered
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-lg shadow-indigo-950/50"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
