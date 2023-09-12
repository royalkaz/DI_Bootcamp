//Daily Challenge: JS Arrays & Methods lesson1
    const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
    //Remove Banana from the array.
    let fruit = fruits.slice(1,4)
    // ! splice ve ya shift metodundan istifade et
    console.log(fruit)
    //Sort the array in alphabetical order.
    fruit.sort()
    console.log(fruit)
    //Add “Kiwi” to the end of the array.
    fruit.push("Kiwi")
    //Remove “Apples” from the array. Don’t use the same method as in part 1.
    fruit.shift()
    console.log(fruit)
    //Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
    //At the end you should see this outcome:
    fruit.reverse();
    console.log(fruit)
//Daily Challenge: JS Arrays & Methods lesson1

//Daily Challenge: JS Arrays & Methods lesson2
    const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
    let [,[,[orange]]] = moreFruits
    //! moreFruits[1][1][0] correct way
    console.log(orange)
//Daily Challenge: JS Arrays & Methods lesson2


