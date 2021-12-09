let button = document.querySelector(`button`) //zmienna ma być btnGenerateNumber
console.log(button)

const randomGenerate = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min //funkcja ma mieć blok kodu i return
}

// const compareNumbers = (a, b) => {
//   return a - b
// }

button.onclick = () => {


  // zmień na addEventListener
  // // console.log(`click dziala`)

  // // Removing the DOMElement from the Stage will not affect the related html element it wraps. DOMElement is useful for controlling position, transformation, and visibility of an HTML element, but if you remove it from the stage, the html element is not affected, since the element is never really on the stage in the first place.
  // let removeListEvenDiv = document.querySelector(`.evenNumbers`)
  // // console.log(removeListEvenDiv);
  // let removeListOddDiv = document.querySelector(`.oddNumbers`)
  // // console.log(removeListOddDiv);

  // let remowedElement1 = document.querySelector(`.ulEvenNumbers`)
  // let remowedElement2 = document.querySelector(`.ulOddNumbers`)

  // // removeListEvenDiv.removeChild(remowedElement1)
  // // removeListOddDiv.removeChild(remowedElement2)

  // // removeListEven.parentNode.removeChild(removeListEven)

  let arrEvenSortedNumbers = []
  let arrOddSortedNumbers = []

  // tworzenie tablicy z randomowymi liczbami 20
  let random = []
  do {
    random.push(randomGenerate(1, 101))
  } while (random.length < 20)

  // console.log(random);

  let sortedRandom = random.sort((a, b) => {
    return a - b
  })
  // console.log(sortedRandom)

  for (let i = 0; i < sortedRandom.length; i++) { // zrobić wszystko w jedej pętli
    // console.log(sortedRandom[i]);

    if (sortedRandom[i] % 2 === 0) {
      arrEvenSortedNumbers.push(sortedRandom[i])
    } else {
      arrOddSortedNumbers.push(sortedRandom[i])
    }
  }

  console.log(arrEvenSortedNumbers)
  console.log(arrOddSortedNumbers)

  // Pamiętaj gamoniu!!!! za pomocą querySelector!!! Nie przez id lub class. Nie dziala wtedy.
  let divEvenNumbers = document.querySelector(`.even-numbers`)
  // console.log(divEvenNumbers);
  let divOddNumbers = document.querySelector(`.odd-numbers`)
  // // console.log(divOddNumbers);

  divEvenNumbers.innerHTML = '<span>Your Even Numbers!</span>';
  divOddNumbers.innerHTML = '<span>Your Odd Numbers!</span>'


  let ulEvenNumbers = document.createElement(`ul`)
  // console.log(ulEvenNumbers);
  ulEvenNumbers.className = `ulEvenNumbers`
  let ulOddNumbers = document.createElement(`ul`)
  ulOddNumbers.className = `ulOddNumbers`

  arrEvenSortedNumbers.forEach((evenNumber) => {
    let newLiElem = document.createElement(`li`)
    newLiElem.className = `numbers-list-item`
    newLiElem.innerText = evenNumber

    ulEvenNumbers.appendChild(newLiElem)
  })

  arrOddSortedNumbers.forEach((oddNumber) => {
    let newLiElem = document.createElement(`li`)
    newLiElem.className = `numbers-list-item`
    newLiElem.innerText = oddNumber

    ulOddNumbers.appendChild(newLiElem)
  })

  divEvenNumbers.appendChild(ulEvenNumbers)
  divOddNumbers.appendChild(ulOddNumbers)
}

//  Lamanie tablicy
// function chunkArray(arr, n) {
//   var chunkLength = Math.max(arr.length / n, 1);
//   var chunks = [];
//   for (var i = 0; i < n; i++) {
//     if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
//   }
//   return chunks;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
