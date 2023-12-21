import { main } from './test_suite.mjs'

export const lineup = [
	{
		name: 'Florian',
		solution: (input) => {
			const map = {}
			const result = []
			// Loop through the input array once and store the frequency of each element in a map
			for (const num of input) {
				map[num] = (map[num] || 0) + 1
			}

			// Loop through the map and push the keys with odd values to the result array
			for (const [key, value] of Object.entries(map)) {
				if (value % 2 === 1) result.push(Number(key))
			}

			return result
		},
	},
	{
		name: 'Ivan',
		solution: (input) => {
			const oddEl = input.reduce((acc, el) => {
				if (!acc.has(el)) {
					acc.add(el)
				} else {
					acc.delete(el)
				}
				return acc
			}, new Set())
			return Array.from(oddEl.values())
		},
	},
	// {
	// 	name: 'Viet',
	// 	solution: (input) => {
	// 		input.forEach((numberArray) => {
	// 			if (!numberArray || numberArray.length === 0) {
	// 				console.log([])
	// 				return
	// 			}

	// 			return numberArray.filter(
	// 				(num, index) => numberArray.indexOf(num) === index && numberArray.filter((n) => n === num).length % 2 !== 0,
	// 			)
	// 		})
	// 	},
	// },
	// {
	// 	name: 'Lukas',
	// 	solution: (input) => {
	// 		return input
	// 	},
	// },
	{
		name: 'Dylan',
		solution: (input) => {
			return Object.entries(Object.groupBy(input, (item) => item))
				.filter((item) => item[1].length % 2 !== 0)
				.map((item) => +item[0])
		},
	},
	{
		name: 'Stefanie',
		solution: (input) => {
			const integerIsOdd = {}
			/*
			 integerIsOdd = {
					1: true
					2: false
					3: false
			 }
			 */
			input.forEach((integer) => {
				if (integerIsOdd[integer]) {
					integerIsOdd[integer] = !integerIsOdd[integer]
				} else {
					integerIsOdd[integer] = true
				}
				return true
			})

			const filteredArray = []
			Object.entries(integerIsOdd).forEach(([integer, isOdd]) => {
				if (isOdd === true) {
					filteredArray.push(Number(integer))
				}
			})

			return filteredArray
		},
	},
	{
		name: 'Lino',
		solution: (input) => {
			const counts = {}
			for (const num of input) {
				counts[num] = counts[num] ? counts[num] + 1 : 1
			}

			return Object.entries(counts)
				.filter(([_, value]) => Number(value) % 2)
				.map(([key, _]) => Number(key))
		},
	},
]

main(lineup, 10_000)
