const words = [
    "January will bring unexpected financial opportunities, like a sudden raise or a profitable investment. Be open to new possibilities and don't be afraid to take risks.",
    "February will be a month of financial growth and prosperity. Your hard work will finally pay off and you'll see a significant increase in your income.",
    "March will be a time to focus on building a solid financial foundation. Pay down debt, invest in your future, and create a budget that works for you.",
    "April will be a month of financial challenges. Unexpected expenses may arise, but you'll be able to weather the storm if you're prepared.",
    "May will be a time of financial abundance. You'll receive a windfall or find new ways to increase your income.",
    "June will be a month of financial stability. You'll finally achieve your financial goals and feel secure about your future.",
    "July will be a time of financial freedom. You'll have the flexibility to spend your money however you want and pursue your passions.",
    "August will be a month of financial growth. You'll learn new things about money and make wise investments that will benefit you in the long run.",
    "September will be a time of financial abundance. You'll receive unexpected gifts or rewards and feel grateful for your good fortune.",
    "October will be a month of financial stability. You'll be able to relax and enjoy the fruits of your labor.",
    "November will be a time of financial challenges. You may have to tighten your belt and make some sacrifices.",
    "December will be a month of financial reflection. You'll review your finances for the year and make plans for the future.",
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
    cardHeader.textContent = `Month Card`;
  
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