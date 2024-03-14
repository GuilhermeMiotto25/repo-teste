const randomizer = () => {
  let random = Math.floor(Math.random() * 58) + 1;
  document.getElementById(
    'randomNumber'
  ).innerText = `O numero sorteado foi: ${random}`;
};
