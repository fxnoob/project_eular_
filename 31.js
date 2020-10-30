function nSeq() {
	let count = 0;
	const uniq = {};
	for (let p1 = 0; p1 <= 200; p1++) {
		for (let p2 = 0; p2 <= 100; p2++) {
			if (p1 + 2*p2 > 200) continue;
			for (let p5 = 0; p5 <= 40; p5++) {
				if (p1 + 2*p2 + 5*p5 > 200 ) continue;
				for (let p10 = 0; p10 <= 20; p10++) {
					if (p1 + 2*p2 + 5*p5 + 10*p10 > 200 ) continue;
					for (let p20 = 0; p20 <= 10; p20++) {
						if (p1 + 2*p2 + 5*p5 + 10*p10 + 20*p20 > 200 ) continue;
						for(let p50 = 0; p50 <= 4; p50++) {
							if (p1 + 2*p2 + 5*p5 + 10*p10 + 20*p20  + 50*p50 > 200 ) continue;
							for(let ppound = 0; ppound <= 2; ppound++) {
								const expr = `${p1} + 2 * ${p2} + 5 * ${p5} + 10 * ${p10} + 20 * ${p20} + 50 * ${p50} + 100 * ${ppound}`;
								if (!uniq[expr] && (p1 + 2 * p2 + 5 * p5 + 10 * p10 + 20 * p20 + 50 * p50 + 100 * ppound) == 200) {
									uniq[expr] = true;
								console.log(`${p1} + 2 * ${p2} + 5 * ${p5} + 10 * ${p10} + 20 * ${p20} + 50 * ${p50} + 100 * ${ppound} = 200`);
									count++;
								}
							}
						}
					}
				}
			}
		}
	}
	return count;
}


console.log(nSeq());