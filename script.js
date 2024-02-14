function getSupport() {
  const messages = [
    "You're doing great, Dania!",
    "Dania, you're amazing just the way you are!",
    "Remember, Dania, you're loved and appreciated!",
    "You've got this, Dania! Keep going!",
    "You bring joy to those around you, Dania!"
  ];

  const travelQuotes = [
    "The world is a book, and those who do not travel read only one page. – Saint Augustine",
    "Travel is the only thing you buy that makes you richer. – Unknown",
    "To travel is to live. – Hans Christian Andersen",
    "Life is short and the world is wide. – Simon Raven",
    "Adventure is worthwhile. – Aesop"
  ];

  const allMessages = messages.concat(travelQuotes);

  const randomIndex = Math.floor(Math.random() * allMessages.length);
  document.getElementById('messageBox').value = allMessages[randomIndex];
}
