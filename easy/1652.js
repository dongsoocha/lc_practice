// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!


var decrypt = function(code, k) {
    let decrypted = Array.from(code);

    for (let i = 0; i < code.length; i++) {
        // alter only decrypted values
        let val = 0;
        if (k === 0) {
            decrypted[i] = 0;
        } else if (k > 0) {
            for (let j = 1; j <= k; j++) {
                val += code[((i + j) % code.length)];
            }
            decrypted[i] = val;
        } else if (k < 0) {
            for (let j = -1; j >= k; j--) {
                val += code[((i + code.length - j) % code.length)];
            }
            decrypted[i] = val;
        }
    }

    return decrypted;
};