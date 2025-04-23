// let set = new Set(iterable); // – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value); // – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value); // – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value); // – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear(); // – удаляет все имеющиеся значения.
// set.size; // – возвращает количество элементов в множестве.

// // Перебор Set

//  for (let value of set) alert(value);
// set.forEach((value, valueAgain, set) => {
//     alert(value);
//  });

 // Задачи

 function unique(arr) {
    return Array.from(new Set(arr));
 }

 let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );

function sortPolyphil(arr) {
  let sortItem = arr.map(item => {item.toLowerCase().split('').sort((a, b) => a - b).join('');
  });
  console.log(sortItem)
  let setWithArr = new Set(sortItem);
  console.log(setWithArr);
}

let arrs = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
sortPolyphil(arrs)
