const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*()_+=-{}[]<>?/";

document.getElementById("generate").addEventListener("click", () => {
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const length = parseInt(document.getElementById("length").value);

  let chars = "";
  if (includeUpper) chars += uppercase;
  if (includeLower) chars += lowercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password || "Selecione ao menos uma opção!";
});
