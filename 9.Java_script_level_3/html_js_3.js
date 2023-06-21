var x = 0;
while (x<5) {
    console.log("x is currently running : " + x);
    if (x===3) {
        console.log("x is 3 !!")
        //break;
        //above break will stop loop at 3 
    }
    console.log("x is still less tha 5 , adding 1 to x ");
    x= x+1;
}