var a,b,resultaat;

a=0;
b=1;
resultaat=b;

for (var i=1; i<11; i++){
    resultaat=a+b;
    a=b;
    b=resultaat;
    console.log(resultaat);
}

