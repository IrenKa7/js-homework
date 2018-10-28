
const a = parseFloat (prompt('Enter a'));
const b = parseFloat (prompt('Enter b'));
const c = parseFloat (prompt('Enter c'));

function solveQuardEq (a, b, c) {
    const d = diskr (a, b, c );
    if (d > 0) {
        const x1 = (-b + Math.sqr (d))/ (2 * a);
        const x2 = (-b - Math.sqr (d))/ (2 * a);
        return ('x1 = ' + x1 + ' x2 = ' + x2);
    } else (d < 0 )
    alert ('The equation has no solutions');
    
}

function diskr (a, b, c) {
    return  b * b - 4 * a * c;
}

alert(solveQuardEq (a, b, c));

