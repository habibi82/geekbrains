
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);

process.stdout.write(String(nod(a, b)));


function nod(a, b) {
    while (a !=0 && b !=0){
        if(a > b) {
            a = a%b;

        }else b=b%a;
    }
    return a+b;

}
