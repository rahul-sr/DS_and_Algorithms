/*
If the vector has [1, 2, 3]

the returned vector should be [1, 2, 4]

as 123 + 1 = 124.
*/

module.exports = {
    //param A : array of integers
    //return a array of integers
    plusOne: function(A) {
        var l = A.length,
            c = 1,
            k;
        for (var i = l - 1; i >= 0; i--) {
            k = A[i] + c;
            if (k > 9 && i != 0) {
                A[i] = k % 10;
                c = Math.floor(k / 10);
            } else if (k > 9 && i == 0) {
                A[i] = k % 10;
                c = Math.floor(k / 10);
                A.unshift(c);
            } else if (c > 0) {
                A[i] = k;
                c = 0;
            } else {
                break;
            }
        }
        while (A[0] == 0) {
            A.shift();
        }
        return A;
    }
};
