

for(let i = 1; i <= 30; i++ )
{
    if(i%3==0 && i%5!=0 && i%15!=0)
    {
        console.log("Hello");
    }
    else if(i%5==0 && i%3!=0 && i%15!=0)
    {
        console.log("World");
    }
    else if(i%15==0)
    {
        console.log("Hello World");
    }
    
}