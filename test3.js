
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
//console.log(nod(a, b));
process.stdout.write(String(nod(a, b)));


function nod(n, m) {
    if(m > 0) {
        var k = n%m;
        return nod(m, k);
    }
    else {
        return Math.abs(n);
    }
}
