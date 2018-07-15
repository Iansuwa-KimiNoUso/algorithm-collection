var given = [1, 1, 1, 2, 3, 3, 1,4, 4];
var res = [];
res.push(given[0]);
var resCounter = 0;
given.sort(function(a,b){return a - b});
for (var i = 1; i < given.length; i++) {
    if (res[resCounter] == given[i]) {
        res.push('*');
    }
    else {
        res.push(given[i]);
        resCounter = res.length - 1;
    }
}
console.log(res);
for (var i = 0; i < res.length; i++) {
    if (res[i] != '*' && res[i + 1] != '*') {
        console.log(`${res[i]} is a unique number`);
    }
}


//this sol = O(3n);