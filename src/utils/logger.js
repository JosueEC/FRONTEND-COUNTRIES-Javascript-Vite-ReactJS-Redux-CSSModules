function debbug (label, value) {
  console.log(`%c${label}`,
  `background: blue;
  color: white;`, value)
}

function actionFetch (value) {
  console.log(`%c${value}`,
  `background: green;
  color: white;`)
}

function errorFetch (value) {
  console.log(`%c${value}`,
  `background: red;
  color: white;`)
}

export {
  debbug,
  actionFetch,
  errorFetch
}
