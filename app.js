console.log("Hello World!\n==========\n");

// Exercise 1 Section----------------------------------------------------------
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) 
{
    for (let i = 1; i <= count; i++)
    {
        if (i % 2 != 0) 
        {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);
// Exercise 2 Section----------------------------------------------------------
console.log("EXERCISE 2:\n==========\n");

function oldEnough( age, targetAge)
{
    return age >= targetAge;
}

function checkLicense(name, age)
{
    let canDrive = oldEnough(age, 16);
    let canHavepermit = oldEnough(age, 15);
    let canDrink = oldEnough( age, 21);

    if(canDrink)
    {
        console.log(`${name} can drive. ${name} can legally drink. `);

    }
    else if (canDrive)
    {
        console.log(`${name} can drive.`)
    }
    else if (canHavepermit)
    {
        console.log(`${name} can drive with a someone older.`)
    }
    else 
    {
        console.log(`${name} too young to drive.`)
    }
}
checkLicense("Joe, 32");
checkLicense("Jake, 19");
checkLicense("Jude, 7");

// Exercise 3 Section--------------------------------------------------------
console.log("EXERCISE 2:\n==========\n");
function checkQuadrant(x, y)
{
    if(x > 0 && y  > 0)
    {
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0)
    {
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0)
    {
        return "Quadrant 3";
    }
    else if (x > 0 && y < 0)
    {
        return "Quadrant 4";
    }
    else if ( x = 0 && y != 0)
    {
        return "X axis";
    }
    else if ( x != 0 && y == 0)
    {
        return "y axis";
    }
    else
    {
        return "origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section--------------------------------------------------------
console.log("EXERCISE 2:\n==========\n");
function isValidTriangle(a, b, c)
{
    return a + b > c && a + c > b && b + c > a
}
function checkTriangle(a, b, c)
{
let isValid = isValidTriangle(a, b, c);
if (isValid)
{
    if (a == b && b == c)
    {
        return "Equilateral";
    }

    else if (a == b || b == c || a == c)
    {
        return "Isosceles";
    }
    else 
    {
        return "Scalene";
    }
}
else 
{
    return "Not a valid triangle";
}
}

console.log(isValidTriangle(3, 3, 3));
console.log(isValidTriangle(2, 3, 4));
console.log(isValidTriangle(1, 2, 3));
console.log(isValidTriangle(1, 1, 2));
