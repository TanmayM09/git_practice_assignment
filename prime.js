let num=3;
let fc=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            fc++;
        }
    }
    if(fc==2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }