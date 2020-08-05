/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.hash = [];
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.hash.push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if (word.indexOf('.') === -1) {
        for (const wordIn of this.hash) {
            if (wordIn === word) {
                return true;
            }
        }    
    } else {
        for (const wordIn of this.hash) {
            if (wordIn.length === word.length) {
                let flag = true;
                for (let i = 0;i < wordIn.length; i++) {
                    if (word[i] !== '.') {
                        if (word[i] !== wordIn[i]) {
                            flag = false;
                        }
                    }
                }
                if (flag) {
                    return true;
                }
            }
        }
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */