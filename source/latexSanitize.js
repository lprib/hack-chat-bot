forbiddenCharacters = "@&%$#_{}~^\\";
//returns [true, badCharacter] if not sanititary, else returns false
function latexSanitize(string) {
	for (i = 0; i < forbiddenCharacters.length; i++) {
		if (string.indexOf(forbiddenCharacters[i]) > -1) {
			return [true, forbiddenCharacters[i]];
		}
    }
	return [false];
}

module.exports = latexSanitize;