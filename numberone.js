function anyTwoNumbers(numbersList, k)
{
    return numbersList
for (i=0; i++; i<numbersList.length)
    {
        numberToFind = k - numbersList[i];
        console.log(numberToFind)
        // if (numbersList.find(number => k-number == numberToFind))
        //     {
        //         console.log(number)
        //         return true
        //     }
        // else 
        //     {
        //         console.log(number)
        //         return false
        //     }
    }
}


anyTwoNumbers([10, 5, 3, 7], 17);