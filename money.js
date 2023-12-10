const words = [
    "Your future financial success will come from embracing your unique money mindset and developing unconventional wealth-building strategies. Don't be afraid to think outside the box and create your own path to prosperity.",
    "Unexpected financial windfalls will come from the most surprising places, like discovering a forgotten lottery ticket or winning a contest you never entered. Be open to opportunities and don't underestimate the power of serendipity.",
    "You'll find financial security through the support of your loved ones, who will be your cheerleaders and partners in your journey to financial freedom. Embrace their advice and don't be afraid to lean on them for support.",
    "Financial challenges will come and go, but your ability to weather the storms and bounce back stronger will be your greatest asset. Develop a resilient mindset and don't let setbacks define you.",
    "Your financial future will be as unpredictable as the stock market, but with a little bit of planning and foresight, you can navigate the ups and downs and emerge wealthier on the other side. Stay informed and make smart financial decisions.",
    "You'll achieve financial stability when you stop chasing quick fixes and focus on building a solid financial foundation. Invest in your financial literacy and learn how to manage your money effectively.",
    "Financial abundance will find you when you shift your focus from acquiring wealth to appreciating and being grateful for what you already have. Cultivate an abundance mindset and watch your finances flourish.",
    "You'll find financial success when you invest in yourself and your skills. Develop your talents and expertise, and you'll attract opportunities that lead to financial security.",
    "Embrace unconventional income streams like starting a side hustle or monetizing your hobbies. Diversifying your income sources will increase your financial stability and resilience.",
    "Remember, true financial freedom is more than just accumulating wealth. It's about living a life that aligns with your values and gives you the freedom to pursue your passions. Focus on building a life you love, and financial abundance will follow naturally."
  ];
  
  // Function to randomly generate a word without repeating
function generateRandomWord(cardNumber) {
    // Get used words
    const usedWords = [];
    for (let i = 1; i <= 6; i++) {
      const card = document.getElementById(`card${i}`);
      const randomWordElement = card.querySelector(".card-body");
      if (randomWordElement.textContent) {
        usedWords.push(randomWordElement.textContent);
      }
    }
  
    // Generate a random word without repetition
    let randomWord;
    do {
      randomIndex = Math.floor(Math.random() * words.length);
      randomWord = words[randomIndex];
    } while (usedWords.includes(randomWord));
  
    // Update the card content
    const randomWordElement = currentCard.querySelector(".card-body");
    randomWordElement.textContent = randomWord;
  }
  
  const cardContainer = document.getElementById("cardButtons");
  
  function generateRandomWord() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
  
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "w-25",
      "h-25",
      "mb-3",
      "text-light",
      "col",
      "bg-transparent"
    );
  
    // Generate a random card ID
    const randomId = `card${Math.floor(Math.random() * 6) + 1}`;
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = `Money Card`;
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id = `randomWord${randomId}`;
    cardBody.textContent = randomWord;
  
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
  }
  
  // Generate 2 cards
  for (let i = 0; i < 1; i++) {
    generateRandomWord();
  }