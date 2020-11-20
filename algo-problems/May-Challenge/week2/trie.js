/**
 * Initialize your data structure here.
 */
var Trie = function(v) {
    this.val = v;
    this.child = {};
    this.endHere = false;
    return this;
};

const root = new Trie('root');

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let parent = root;
    for (const key in word.split('')) {
        if (parent.child[word[key]] === undefined) {
            parent.child[word[key]] = new Trie(word[key]);
        }
        parent = parent.child[word[key]];
        if (parseInt(key) === word.length-1) {
            parent.endHere = true;
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    parent = root;
    for (const char of word.split('')) {
        if (parent.child[char] === undefined) {
            return false;
        }
        parent = parent.child[char];
    }
    return parent.endHere;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    parent = root;
    for (const char of prefix.split('')) {
        console.log(char)
        if (parent.child[char] === undefined) {
            return false;
        }
        parent = parent.child[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */