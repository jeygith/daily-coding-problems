/*This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.*/


function solution(string) {

    let firstZero = string[0] == '0';

    let strlength = string.length;

    // console.log(strlength);

    // console.log(firstZero);

    switch (strlength) {
        case 1:
            return canDecode(string);
            break;
        case 2:
            if (firstZero) {
                // edge case for strings like '01'
                return canDecode(string);
            }
            return canDecode(string) + 1;
            break;
        default:
            return canDecode(string.slice(0, 1)) * solution(string.slice(1)) +
                canDecode(string.slice(0, 2)) * solution(string.slice(2));
    }
}

function canDecode(s) {
    if (s[0] == '0') {
        return 0
    }

    let i = parseInt(s);
    /*    if err != nil {
            return 0
        }*/
    if (i >= 0 && i <= 26) {
        return 1
    }
    return 0
}


console.log(solution("11"));
