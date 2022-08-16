function handleTextOverflow(length, textClass) {
  document.querySelectorAll(textClass).forEach((element) => {
    const text = element.innerHTML.trim();
    text.length > length
      ? (element.innerHTML = `${text.slice(0, length)}...`)
      : (element.innerHTML = text);
  });
}

handleTextOverflow(13, ".food-card-text1");
handleTextOverflow(15, ".food-card-text");
