const words = [
    "You'll discover your true potential when you least expect it, while you're busy working on a project or simply taking a walk in nature. Put yourself out there and don't give up on your dreams. They might come true when you're least expecting it.",
    "You'll find your true self when you stop looking for it and start living your life to the fullest. Focus on your own growth and happiness. Your future self will thank you for it.",
    "You'll be more confident and comfortable in your own skin. You'll learn to embrace your unique qualities and appreciate your individuality.",
    "You'll develop a strong sense of purpose and direction in life. You'll know what you want to achieve and you'll be motivated to go after your goals.",
    "You'll build stronger and more meaningful relationships with the people you care about. You'll be more open and honest in your communication, and you'll be more supportive and understanding of others.",
    "You'll learn to overcome challenges and setbacks with grace and resilience. You'll develop a growth mindset and you'll see failures as opportunities to learn and grow.",
    "You'll become more grateful for the good things in your life. You'll learn to appreciate the simple things and you'll find joy in the everyday moments.",
    "You'll develop a healthier and more balanced lifestyle. You'll make time for the things that are important to you, and you'll learn to say no to the things that aren't.",
    "You'll become more aware of your own thoughts and feelings. You'll learn to manage your emotions in a healthy way, and you'll develop a greater sense of peace and inner calm.",
    "You'll make a positive impact on the world around you. You'll use your talents and abilities to help others, and you'll make a difference in the lives of the people you care about."
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
    cardHeader.textContent = `2024 Prediction Card`;
  
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