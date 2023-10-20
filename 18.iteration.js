//for loop
for(let i=0; i<=10; i++){
    for(let i=0; i<=10; i++){
        console.log(i)
    }
}

//continue and break statement 
//break: on break it stop intire loop
//continue: it skip that loop 
for(let i=0; i<=20; i++){
    if(i==5){
        console.log(`Hey we found 5`)
        continue
    }
    else if(i==10){
        console.log(`Hey we found 10`)
        break
    }
    console.log(i)
}