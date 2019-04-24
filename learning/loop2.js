/*var x = 0;

while (x < 5)
{
    x++;

    if (x == 2 || x == 4){
        continue;
    }
    
    console.log( x );
}*/

console.log("Entering the loop!");

outerloop: // This is the label name
for (var i = 0; i < 5; i++)
{
    console.log("Outerloop: " + i);

    innerloop:
    for (var j = 0; j < 5; j++)
    {
        if (j > 3 ) break ; // Quit the innermost loop
        if (i == 2) break innerloop; // Do the same thing
        if (i == 4) break outerloop; // Quit the outer loop
        console.log("Innerloop: " + j);
    }
}

console.log("Exiting the loop!");