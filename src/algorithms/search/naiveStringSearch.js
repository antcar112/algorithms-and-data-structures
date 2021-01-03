/**
 * Searches a string to find how many times a substring occurs in it.
 *
 * @param {string} str The string to search
 * @param {string} find The substring to find and count
 * @returns {number} How many times the string `find` occurs in `str`
 */
const naiveStringSearch = (str, find) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < find.length; j++) {
      if (find[j] !== str[i + j]) {
        break
      }
      if (j === find.length - 1) {
        count++
      }
    }
  }
  return count
}

module.exports = { naiveStringSearch }
