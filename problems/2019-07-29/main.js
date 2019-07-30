/**
 * Returns whether the word can be found in the matrix by going left to right or up to down
 * @param {char[][]} board
 * @param {string} word
 * @return {boolean}
 */
function wordSearch(board, word) {
    if (word.length > board.length && word.length > board[0].length) return false;

    let index = 0;

    // find left to right
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (index === word.length) return true;

            const letter = board[r][c];
            if (letter === word.charAt(index)) {
                index++;
            } else {
                // reset index, if the index does not match letter
                index = 0;
                if (letter === word.charAt(index)) {
                    index = 1;
                }
            }
        }

        // reset index after we finish a row
        if (index === word.length) return true;
        index = 0;
    }

    index = 0;
    // find up to down
    for (let c = 0; c < board[0].length; c++) {
        for (let r = 0; r < board.length; r++) {
            if (index === word.length) return true;

            const letter = board[r][c];
            if (letter === word.charAt(index)) {
                index++;
            } else {
                // reset index, if the index does not match letter
                index = 0;
                if (letter === word.charAt(index)) {
                    index = 1;
                }
            }
        }

        // reset index after we finish a column
        if (index === word.length) return true;
        index = 0;
    }

    return false;
}

module.exports = exports = {
    wordSearch
}
