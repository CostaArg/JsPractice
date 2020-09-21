// function points(games) {
//     let totalLeft = 0;
//     games.forEach(element => {
//         let [left, right] = element.split(":");
//         if (left > right)
//         totalLeft += 3
//         else if (left === right)
//         ++totalLeft;
//     });
//     return totalLeft;
//     }

function points(games) {
    return games.reduce((total, element) => {
      let left, right = element.split(':');
      return (left > right) ? total += 3 : (left === right) ? ++total : total;
    }, 0);
  }

    console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
