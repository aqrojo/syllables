const syllableRegex = /[^aeiouáéíóúy]*[aeiouáéíóúy]+(?:[^aeiouáéíóúy]*$|[^aeiouáéíóúy](?=[^aeiouáéíóúy]))?/gi

function syllabify(words) {
  return words.match(syllableRegex)
}

console.log(['casa', 'lámpara', 'sal', 'alterado', 'campero', 'alternar', 'coito', 'camión'].map(syllabify))
