const words = [
    "Your future soulmate will share your love for cheesy puns and dad jokes. Embrace your sense of humor and don't be afraid to laugh with your partner.",
    "You'll find love in the most unexpected place, like while you're alphabetizing your spice rack or trying to parallel park a bumper car. Be open to new possibilities and don't be afraid to step outside your comfort zone.",
    "Your partner will be the one person who can tolerate your questionable fashion choices and questionable dance moves. Be yourself and don't try to be someone you're not. The right person will love you for who you are.",
    "You'll know you've found the right person when you can argue with them for hours about the best way to fold a fitted sheet and still end up laughing together. Healthy communication and the ability to disagree respectfully are essential for a strong relationship.",
    "Your future love life will be as unpredictable as a box of chocolates, but with more surprises and less sugar. Embrace the ups and downs of love and enjoy the ride.",
    "You'll find love when you least expect it, while you're busy swiping left on every dating app profile that comes your way. Put yourself out there and don't give up on love. It might find you when you're not looking.",
    "Your future soulmate will be someone who can make you laugh until you cry, even when you're crying because you're laughing so hard. Find someone who makes you happy and brings joy to your life.",
    "You'll find love when you stop looking for it and start living your life to the fullest. Focus on yourself and your own happiness. Love will find you when you're least expecting it.",
    "Your future partner will be someone who can appreciate your unique sense of humor, even when it involves making fun of yourself. Be confident in your own skin and don't be afraid to be your silly self.",
    "You'll know you've found true love when you can be your complete and true self around them, without fear of judgment or ridicule. Find someone who accepts you for who you are, flaws and all.",
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
    cardHeader.textContent = `Love Card`;
  
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