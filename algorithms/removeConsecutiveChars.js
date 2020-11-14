/**
 * Given a string s, recursively remove adjacent duplicate characters from the string s.
 * The output string should not have any adjacent duplicates.
 *
 * ex: 'abbcddc' = 'a'
 * ex: 'acdeffedcb' = 'ab'
 */
const removeConsecutiveChars = (str) => {
  const originalLength = str.length

  for (let i = 0, j = 1; j < str.length; i++, j++) {
    while (str[i] === str[j]) {
      j++
    }
    if (j > i + 1) {
      str = str.substring(0, i) + str.substring(j)
      j = i--
    }
  }

  return str.length === originalLength ? str : removeConsecutiveChars(str)
}

// const str1 = 'abbc'
// const str2 = 'abbcddc'
// const str3 = 'myydoggodbooii'

// console.log(removeConsecutiveChars(str1)) // 'ac'
// console.log(removeConsecutiveChars(str2)) // 'a'
// console.log(removeConsecutiveChars(str3)) // 'mb'
