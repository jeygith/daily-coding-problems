let wordSearch = require('./problems/2019-07-29/main');

let board = [['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'], ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']];
console.log(wordSearch.wordSearch(board, 'FOAM'));
console.log(wordSearch.wordSearch(board, 'MOSES'));


