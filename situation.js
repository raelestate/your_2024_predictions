const words = [
    // Personal Growth and Learning
    "You will overcome a significant challenge that has been holding you back.",
    "You will embark on a journey of self-discovery that leads you to a greater understanding of yourself.",
    "You will learn a new skill or take up a new hobby that brings you joy and fulfillment.",
    "You will step outside your comfort zone and take a risk that leads to positive growth.",
    "You will develop a deeper sense of self-compassion and acceptance.",
  
    // Relationships and Social Life
    "You will strengthen your existing relationships and build new ones that are meaningful and supportive.",
    "You will finally set boundaries with someone who has been draining your energy.",
    "You will reconnect with old friends or family members who you haven't seen in a while.",
    "You will stand up for yourself and speak your truth, even when it is difficult.",
    "You will forgive yourself and others for past mistakes and move on with love and understanding.",
  
    // Health and Wellbeing
    "You will make a significant improvement in your diet and exercise habits.",
    "You will prioritize your mental and emotional health by practicing self-care and seeking support when needed.",
    "You will overcome a health challenge and emerge stronger and more resilient.",
    "You will learn to manage stress and anxiety in a healthy way.",
    "You will experience a deep sense of peace and happiness in your life.",
  
    // Career and Finances
    "You will land your dream job or take a major step forward in your career.",
    "You will achieve financial stability and security.",
    "You will find a way to work that is both fulfilling and financially rewarding.",
    "You will overcome a career setback and bounce back stronger than ever.",
    "You will learn new skills and knowledge that help you advance in your career.",
  
    // Personal Goals and Aspirations
    "You will finally achieve a long-held goal or dream.",
    "You will travel to a new and exciting place.",
    "You will make a positive impact on the world around you.",
    "You will learn to live with more gratitude and appreciation for the good things in your life.",
    "You will experience a new level of personal growth and fulfillment.",
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
    cardHeader.textContent = `Situation Card`;
  
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