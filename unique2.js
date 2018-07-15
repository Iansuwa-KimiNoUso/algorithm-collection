let given = [1, 1, 2, 3, 3, 4, 4, 1, 5, 5];
var m = new Map();

function uniq(given, map) {
    given.forEach(function (el) {
        if (map.has(el)) {
            m.set(el, m.get(el) + 1);
        }
        else {
            m.set(el, 1);
        }
    });
    var keys = m.keys();
    for (var key of keys) {
        if (m.get(key) == 1) {
            console.log(`unique = ${key}`);
        }
    }
}
uniq(given, m);