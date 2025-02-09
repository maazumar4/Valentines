function getSupport() {
  const messages = [
    "You're doing great, Eisha!",
    "Eisha, you're amazing just the way you are!",
    "Remember, Eisha, you're loved and appreciated!",
    "You've got this, Eisha! Keep going!",
    "You bring joy to those around you, Eisha!"
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
