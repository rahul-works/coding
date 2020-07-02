/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function node() {
    let c;
    let ends;
    let word;
    let child = [];
} 

function getNode(c) {
    let n = new node;
    n.c = c;
    n.ends = 0;
    n.word = "";
    for(let i=0;i<26;++i) {
        n.child[i] = null;
    }
    return n;
}
let root = getNode('/');
//Trie INSERT
function insert(s) {
    let curr = root;
    let index,i=0;
    while(s[i])
    {
        index = s[i]-'a';
        if(curr.child[index]==null)
            curr.child[index] = getNode(s[i]);
        
        curr=curr.child[index];
        i+=1;
    }
    curr.ends += 1;
    curr.word = s;
}
function solve(i, j, word){
    //Base case
    let index = gboard[i][j]-'a';
    if(gboard[i][j]=='$')  
        return;
    
    curr = curr.child[index];
    if(curr.ends > 0)
    {
        ans.push(curr.word);
        curr.ends -= 1;
    }
    
    //Body
    let ch = board[i][j];   //Store current char
    board[i][j] = '$';  //Mark current node visited
    
    if(i>0)     //TOP
        solve(i-1,j,r,c,ans,curr);
    if(i<gboard.length()-1)   //DOWN
        solve(i+1,j,r,c,ans,curr);
    if(j>0)     //LEFT
        solve(i,j-1,r,c,ans,curr);
    if(j<gboard[0].length()-1)   //RIGHT
        solve(i,j+1,r,c,ans,curr);
    
    board[i][j] = ch;    //Mark current node as Unvisited by restoring the value
}

let gboard = [];
let ans = []; 
let gword = '';
var findWords = function(board, words) {
    gboard = board.map(function(arr) {
        return arr.slice();
    });
    gword = '';
    //Insert all words in TRIE
    // for(let i=0;i<words.length();++i)
    //     insert(words[i]);
    
    //Now search words
    
    for (const word of words) {
        gword = word;
        for (let i = 0; i < board.length(); i += 1) {
            for (let j = 0; j < board[0].length(); j += 1) {
                solve(i,j);
            }   
        }
    }
    
    return ans;
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
["oath","pea","eat","rain"]));