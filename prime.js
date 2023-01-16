let a=0;
    for(let i=1; i<=num;i++){
        if(num%i===0){
            a++;
        }
    }
    if(a>1){
        console.log("No");
    }
    else{
        console.log("Yes");
    }