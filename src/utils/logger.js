function debbug (label, value) {
  console.log(`%c${label}`,
  `background: blue;
  color: white;`, value)
}

export {
  debbug
}
