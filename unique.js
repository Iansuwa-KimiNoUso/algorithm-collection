let given = [1, 1, 2, 3, 3, 4, 4, 1, 5, 5];
var result = [];
var counts = [];
given.forEach(function (item) {
    if (result.indexOf(item) < 0) {
        result.push(item);
        counts.push(1);
    }
    else {
        counts[result.indexOf(item)] += 1;
    }
});
var uniq = counts.indexOf(1);
console.log(uniq);
