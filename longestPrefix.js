const strs = ["flower","flow","flight"];


const longestCommonPrefix = function(strs) {
  let prefix = "";

  for(let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for(let j = 0; j < strs.length; j++) {
      if (char !== strs[i][j]) return prefix;
    }
    prefix += char;
  }

  return prefix;
};

longestCommonPrefix(strs);