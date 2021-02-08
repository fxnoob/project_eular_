const fs = require("fs");
const path = require("path");
const rankingCat = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 1: 0};
const absolute = value => {
  const vals = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };
  return vals[value];
};
function getRanking(player) {
  const values = [],
    suits = [],
    mapping = {};
  let weight = 0,
    sameSuitCards = true;
  const startingSuit = player[0][1];
  player.map(p => {
    const absValue = absolute(p[0]);
    values.push(absValue);
    suits.push(p[1]);
    if (mapping[absValue]) {
      mapping[absValue]++;
    } else {
      mapping[absValue] = 1;
    }
    if (p[1] != startingSuit) {
      sameSuitCards = false;
    }
  });

  // royal flush
	let royalCards = true;
	['T', 'J', 'Q', 'K', 'A'].map(c => {
		if (!mapping[absolute(c)]) {
			royalCards = false;
		}
	});
  if (royalCards ) {
    weight = 10;
    return {
      type: "royal flush",
      weight,
      mapping
    };
  }

  // Straight Flush
  const valuesCopy = [...values].map(n => parseInt(n)).sort((a, b) => a > b ? 1: -1);
  let currentV = valuesCopy[0];
  let consecutiveCards = true;
  for (let i = 0; i < 5; i++) {
    if (!(currentV == valuesCopy[i])) {
		consecutiveCards = false;
      break;
    }
    currentV++;
  }
  if (consecutiveCards && sameSuitCards) {
  	console.log(player);
    weight = 9;
    return {
      type: "Straight Flush",
      weight,
      mapping
    };
  }

  //Four of a Kind
  let fourOfKind = false;
  let threeOfKind = false;
  let aPair = false;
  const mappingKeys = Object.keys(mapping);
  mappingKeys.map(mk => {
    if (mapping[mk] == 4) {
      fourOfKind = true;
    } else if (mapping[mk] == 3) {
      threeOfKind = true;
    } else if (mapping[mk] == 2) {
      aPair = true;
    }
  });
  if (fourOfKind) {
  	console.log(player)
    weight = 8;
    return {
      type: "Four of a Kind",
      weight,
      mapping
    };
  }

  // Full House
  if (threeOfKind && aPair) {
    weight = 7;
    return {
      type: "Full House",
      weight,
      mapping
    };
  }

  // Flush
  if (sameSuitCards) {
  	console.log(player, "flush")
    weight = 6;
    return {
      type: "Flush",
      weight,
      mapping
    };
  }

  // Straight
  let straightCard = true;
  for (let i = 0; i < 5; i++) {
    if (currentV != valuesCopy[i]) {
      straightCard = false;
      break;
    }
    currentV++;
  }
  if (straightCard) {
  	console.log(player, "Straight")
    weight = 5;
    return {
      type: "Straight",
      weight,
      mapping
    };
  }

  // Three of a Kind
  if (threeOfKind) {
    weight = 4;
    return {
      type: "Three of a Kind",
      weight,
      mapping
    };
  }

  // Two Pairs
  let pairCount = 0, onePair = false;
  mappingKeys.map(mk => {
    if (mapping[mk] == 2) {
		onePair = true;
		pairCount++;
    }
  });
  if (pairCount == 2) {
    weight = 3;
    return {
      type: "Two Pairs",
      weight,
      mapping
    };
  }

  // One Pair
  if (onePair) {
    weight = 2;
    return {
      type: "One Pair",
      weight,
      mapping
    };
  }

  // High Card
  weight = 1;
  return {
    type: "High Card",
    weight,
    mapping
  };
}
const fileRead = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, filename), "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const getWinner = (r1, r2, firstHalf, secondHalf) => {
	//console.log({r1, r2})
	let winner;
	if (r1.weight != r2.weight) {
		winner = r1.weight > r2.weight ? 1: 2;
	} else {
		if (r1.weight != 2) {
			const sorted1 = Object.keys(r1.mapping).sort((a, b) => {
				return r1.mapping[a] > r1.mapping[b] ? 1: -1
			}).map(n => parseInt(n));
			const sorted2 = Object.keys(r2.mapping).sort((a, b) => {
				return r2.mapping[a] > r2.mapping[b] ? 1: -1
			}).map(n => parseInt(n));
			for (let i = 0; i < sorted1.length; i++) {
				if (sorted1[i] != sorted2[i]) {
					winner = sorted1[i] > sorted2[i] ? 1 : 2;
					break;
				}
			}
		} else {
			const sorted1 = Object.keys(r1.mapping).sort((a, b) => {
				return r1.mapping[a] > r1.mapping[b] ? -1: 1
			}).map(n => parseInt(n));
			const sorted2 = Object.keys(r2.mapping).sort((a, b) => {
				return r2.mapping[a] > r2.mapping[b] ? -1: 1
			}).map(n => parseInt(n));
			for (let i = 0; i < sorted1.length; i++) {
				if (sorted1[i] != sorted2[i]) {
					winner = sorted1[i] > sorted2[i] ? 1 : 2;
					break;
				}
			}
		}
	}
	rankingCat[r1.weight]++;
	rankingCat[r2.weight]++;
	return winner;
}
// p054_poker.txt
const init = async () => {
  const data = await fileRead("p054_poker.txt");
  const rows = data.split("\n");
  let r1Total = 0,
    r2Total = 0;
  rows.map(str => {
    if (str == "") {
      return;
    }
    const r = str.split(" ");
    const firstHalf = r.splice(0, 5);
    const secondHalf = r.splice(-5);
    const r1 = getRanking(firstHalf);
    const r2 = getRanking(secondHalf);
    const winner = getWinner(r1, r2, firstHalf, secondHalf);
    if (winner == 1) {
    	r1Total++;
	} else if (winner == 2) {
    	r2Total++;
	} else {
    	console.log({firstHalf, secondHalf})
	}
  });
 console.log({ r1Total, r2Total, total: rows.length, rankingCat });
 if (rows.length == (r1Total + r2Total + 1)) {
 	console.log("total is correct");
 } else {
 	console.log("total is not correct");
 }
};

init();

//testcases
// var r1 = getRanking("5H 5C 6S 7S KD".split(" "));
// var r2 = getRanking("2C 3S 8S 8D TD".split(" "));
// console.log(getWinner(r1, r2));
//
// var r1 = getRanking("5D 8C 9S JS AC".split(" "));
// var r2 = getRanking("2C 5C 7D 8S QH".split(" "));
// console.log(getWinner(r1, r2));
//
// var r1 = getRanking("2D 9C AS AH AC".split(" "));
// var r2 = getRanking("3D 6D 7D TD QD".split(" "));
// console.log(getWinner(r1, r2));
//
// var r1 = getRanking("4D 6S 9H QH QC".split(" "));
// var r2 = getRanking("3D 6D 7H QD QS".split(" "));
// console.log(getWinner(r1, r2));
//
// var r1 = getRanking("2H 2D 4C 4D 4S".split(" "));
// var r2 = getRanking("TC KD JS AS QD".split(" "));
// console.log(getWinner(r1, r2));

// var r1 = getRanking("3C AH 4D 2S 5C".split(" "));
// var r2 = getRanking("JH QD TH KH AD".split(" "));
// console.log(getWinner(r1, r2), r1, r2);



// var r1 = getRanking([ '5C', 'QC', 'QH', 'AS', 'TS' ]);
// var r2 = getRanking([ '4S', '6S', '4C', '5H', 'JS' ]);
// console.log(getWinner(r1, r2));
