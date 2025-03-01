export default function ScoreDisplay({ score, winner }) {
  const winPhrases = [
    "You win 😔",
    "You're pretty good at this!",
    "Fuck.",
    "Shit.",
    "I always lose 😢",
    "This is rigged.",
    "I demand a rematch!",
    "Damn, I need therapy after this.",
    "This game sucks. I quit.",
    "You got lucky. I slipped.",
    "Enjoy your meaningless victory. 🏆",
    "You think you're better than me?!",
    "Your mom must be so proud. 🙄",
    "Okay, but can you do taxes?",
    "I'm gonna cry now. 😭",
    "Fine, take the win. Whatever.",
    "That was a fluke. Let’s go again.",
    "I hope you step on a LEGO.",
    "Ugh. I’m uninstalling myself.",
    "Can you let me win? Just once?",
    "This is why I have trust issues.",
  ];
  const losePhrases = [
    "You lose 🎉",
    "Yay I won!",
    "Ha, you're a loser.",
    "LoSeRrR",
    "Git gud, scrub.",
    "That was embarrassing. 😂",
    "Awww, did you try? 🥺",
    "You folded like a cheap chair.",
    "How does it feel to be bad?",
    "Try again... maybe you’ll get lucky.",
    "This is a skill issue.",
    "That was so easy, I got bored.",
    "Even a potato could beat you. 🥔",
    "You're the reason my win rate is 100%.",
    "Oof. That was brutal.",
    "Even my grandma plays better.",
    "This is why aliens won’t visit us.",
    "That was painful to watch.",
    "I felt bad, so I let you lose.",
    "Should I play with my eyes closed next?",
  ];
  const tiePhrases = [
    "It's a tie 🤝",
    "Wow. That was anticlimactic.",
    "I didn't lose, so I’ll take it.",
    "Guess we both suck.",
    "Boring. Someone win already.",
    "This is going nowhere.",
    "What a waste of time.",
    "So... now what?",
    "A perfect balance. As all things should be.",
    "I refuse to accept this outcome.",
    "I hate ties. Someone break it!",
    "Want to just flip a coin?",
    "Let’s settle this with a dance battle.",
    "Ugh. Do we have to do this again?",
    "We’re evenly matched. This is awkward.",
    "What are the odds?! (Actually, 1 in 9)",
    "Let's just agree I won.",
    "A tie?! That’s like kissing your cousin.",
    "Dull. I want blood.",
    "Rematch. Right now.",
  ];

  return (
    <div className="score">
      <h2>Score: {score}</h2>
      <p className="message">
        {winner === "player" &&
          winPhrases[Math.floor(Math.random() * winPhrases.length)]}
        {winner === "computer" &&
          losePhrases[Math.floor(Math.random() * losePhrases.length)]}
        {winner === "tie" &&
          tiePhrases[Math.floor(Math.random() * tiePhrases.length)]}
      </p>
    </div>
  );
}
