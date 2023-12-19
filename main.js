'use strict'

// function v3(input) {
// 	const uniqueArr = new Map(input.map((num) => [num, false]))

// 	// Loop through the input array once and compute the bitwise XOR of all elements
// 	for (const num of input) uniqueArr.set(num, !uniqueArr.get(num))

// 	// return [...uniqueArr.entries()].filter((entry) => entry[1]).map((entry) => entry[0])
// 	return uniqueArr
// }

// Combined for and map
function v3_5(input) {
	const map = new Map()
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	for (const num of input) {
		map.set(num, (map.get(num) || 0) + 1)
	}

	// Loop through the map and push the keys with odd values to the result array
	for (const [key, value] of map) {
		if (value % 2 === 1) result.push(key)
	}

	return result
}

// Using `else` instead of `=== false`
function v3_4(input) {
	const map = {}
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	input.forEach((num) => {
		map[num] = !(map[num] || false)
	})

	// Loop through the map and push the keys with odd values to the result array
	Object.entries(map).forEach(([key, value]) => {
		if (!value) result.push(key)
	})
}

// Using `Map` instead of `Object` to store the frequency of each element
function v3_3(input) {
	const map = new Map()
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	input.forEach((num) => {
		map.set(num, (map.get(num) || 0) + 1)
	})

	// Loop through the map and push the keys with odd values to the result array
	map.forEach((value, key) => {
		if (value % 2 === 1) result.push(key)
	})

	return result
}

// Using booleans instead of numbers to store the result
function v3_2(input) {
	const map = {}
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	input.forEach((num) => {
		map[num] = !(map[num] || false)
	})

	// Loop through the map and push the keys with odd values to the result array
	Object.entries(map).forEach(([key, value]) => {
		if (!value) result.push(key)
	})

	return result
}

// Using `for` loop instead of `forEach` loop
function v3_1(input) {
	const map = {}
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	for (const num of input) {
		map[num] = (map[num] || 0) + 1
	}

	// Loop through the map and push the keys with odd values to the result array
	for (const [key, value] of Object.entries(map)) {
		if (value % 2 === 1) result.push(key)
	}

	return result
}

// no for, no boolean, no map, no else
function v3(input) {
	const map = {}
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	input.forEach((num) => {
		map[num] = (map[num] || 0) + 1
	})

	// Loop through the map and push the keys with odd values to the result array
	Object.entries(map).forEach(([key, value]) => {
		if (value % 2 === 1) result.push(key)
	})

	return result
}

function v2(input) {
	const map = new Map()
	const result = []
	// Loop through the input array once and store the frequency of each element in a map
	for (const num of input) {
		map.set(num, (map.get(num) || 0) + 1)
	}

	// Loop through the map and push the keys with odd values to the result array
	for (const [key, value] of map) {
		if (value % 2 === 1) result.push(key)
	}

	return result
}

function v1(input) {
	const uniqueArr = [...new Set(input)]
	const result = []

	for (const item of uniqueArr) {
		const count = input.filter((val) => val === item).length
		if (count % 2 === 1) result.push(item)
	}

	return result
}

function eachTestOnce() {
	const test1 = [7]
	const test2 = [0]
	const test3 = [0, 0]
	const test4 = [1, 1, 2]
	const test5 = [0, 1, 0, 1, 0]
	const test6 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
	const test7 = [1, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
	const test8 = [
		0, 7, 3, 9, 6, 5, 7, 4, 8, 0, 3, 2, 8, 9, 1, 2, 4, 5, 9, 8, 5, 9, 3, 4, 9, 3, 7, 7, 1, 5, 3, 6, 8, 8, 4, 0, 3, 5, 4,
		1, 3, 8, 1, 8, 3, 4, 9, 6, 1, 0, 9, 3, 0, 2, 2, 9, 5, 0, 2, 4, 2, 3, 7, 0, 2, 6, 0, 1, 2, 1, 0, 1, 0, 5, 2, 8, 6, 2,
		4, 0, 8, 6, 7, 8, 9, 9, 2, 8, 9, 6, 1, 8, 7, 2, 6, 8, 3, 3, 2, 7,
	]
	const test9 = [
		5, 4, 0, 9, 1, 4, 3, 1, 6, 4, 0, 8, 0, 4, 2, 2, 3, 3, 7, 4, 8, 0, 2, 1, 8, 3, 4, 2, 5, 7, 8, 1, 5, 2, 4, 9, 7, 4, 9,
		4, 9, 5, 7, 3, 9, 3, 4, 7, 7, 0, 7, 3, 4, 1, 9, 2, 4, 4, 1, 4, 3, 3, 4, 0, 0, 4, 1, 0, 9, 4, 6, 0, 4, 9, 1, 5, 2, 4,
		7, 2, 5, 2, 1, 7, 4, 6, 5, 3, 8, 5, 9, 3, 5, 6, 8, 1, 9, 2, 8, 8, 2, 5, 3, 9, 3, 2, 8, 6, 7, 3, 2, 2, 6, 4, 7, 0, 0,
		5, 5, 5, 1, 6, 9, 1, 2, 6, 0, 8, 1, 3, 3, 4, 3, 9, 5, 2, 9, 4, 9, 8, 8, 6, 0, 7, 0, 7, 0, 5, 0, 4, 4, 7, 5, 4, 6, 6,
		0, 2, 2, 6, 7, 4, 7, 0, 4, 4, 7, 2, 6, 8, 1, 9, 7, 4, 3, 4, 0, 9, 7, 1, 7, 4, 5, 8, 5, 5, 4, 0, 5, 8, 2, 1, 1, 8, 7,
		0, 0, 1, 3, 2, 2, 5, 1, 6, 1, 6, 9, 9, 6, 8, 7, 9, 2, 7, 6, 4, 7, 0, 6, 6, 7, 7, 7, 0, 1, 7, 2, 7, 2, 5, 9, 1, 5, 3,
		8, 3, 6, 0, 0, 8, 5, 8, 0, 7, 0, 6, 0, 0, 6, 0, 2, 7, 2, 3, 7, 5, 0, 8, 0, 6, 5, 2, 2, 5, 3, 6, 5, 7, 7, 7, 8, 1, 5,
		6, 2, 9, 4, 9, 4, 8, 8, 1, 0, 2, 6, 7, 5, 7, 4, 8, 3, 1, 7, 6, 4, 8, 1, 3, 8, 9, 5, 6, 2, 6, 1, 8, 0, 0, 3, 7, 6, 6,
		6, 0, 7, 2, 8, 0, 8, 1, 2, 3, 4, 7, 4, 3, 2, 3, 1, 2, 1, 2, 7, 4, 0, 6, 9, 9, 6, 6, 5, 1, 0, 8, 3, 1, 8, 5, 3, 9, 6,
		1, 9, 9, 4, 0, 6, 7, 4, 1, 4, 0, 3, 5, 9, 6, 8, 9, 1, 2, 8, 8, 5, 2, 7, 6, 9, 1, 2, 4, 9, 1, 5, 1, 0, 5, 8, 0, 0, 5,
		9, 1, 1, 9, 6, 9, 1, 6, 3, 9, 7, 5, 1, 5, 8, 5, 0, 3, 6, 4, 3, 3, 0, 2, 4, 7, 1, 1, 0, 1, 8, 1, 7, 5, 5, 0, 8, 6, 7,
		3, 4, 1, 9, 0, 9, 6, 6, 0, 9, 3, 2, 5, 8, 2, 6, 2, 0, 8, 0, 4, 4, 8, 0, 6, 6, 5, 6, 2, 7, 3, 0, 6, 3, 9, 5, 6, 0, 4,
		9, 0, 0, 1, 6, 7, 8, 2, 7, 2, 6, 8, 0, 3, 1, 7, 9, 4, 3, 7, 5, 3, 2, 1, 1, 3, 8, 4, 3, 8, 9, 8, 5, 2, 8, 9, 6, 8, 7,
		5, 6, 2, 9, 4, 8, 2, 8, 8, 3, 7, 4, 9, 0, 3, 4, 6, 3, 2, 4, 9, 2, 3, 9, 2, 4, 8, 7, 7, 8, 6, 8, 7, 0, 3, 8, 5, 0, 9,
		3, 7, 8, 6, 7, 9, 1, 2, 9, 9, 1, 1, 7, 7, 2, 4, 6, 6, 8, 4, 3, 8, 7, 6, 6, 6, 0, 1, 8, 7, 1, 2, 0, 2, 0, 6, 1, 9, 2,
		7, 1, 4, 5, 0, 1, 8, 3, 9, 4, 9, 0, 0, 1, 7, 4, 3, 4, 6, 7, 6, 1, 3, 5, 6, 8, 2, 0, 7, 7, 3, 1, 8, 0, 4, 3, 1, 4, 5,
		1, 5, 1, 0, 3, 8, 7, 6, 8, 0, 9, 7, 5, 4, 1, 6, 5, 8, 0, 8, 0, 3, 4, 4, 6, 3, 2, 7, 8, 8, 6, 0, 8, 5, 1, 4, 9, 5, 2,
		7, 7, 7, 1, 7, 8, 1, 7, 6, 0, 6, 5, 3, 7, 3, 6, 8, 5, 2, 6, 1, 0, 4, 4, 8, 4, 8, 0, 6, 9, 0, 0, 8, 8, 2, 4, 7, 7, 7,
		7, 7, 8, 2, 5, 2, 4, 5, 5, 8, 8, 3, 4, 0, 8, 3, 2, 2, 6, 2, 1, 1, 7, 6, 5, 8, 5, 8, 0, 7, 9, 1, 2, 5, 8, 5, 9, 0, 7,
		3, 0, 8, 7, 8, 0, 1, 7, 5, 8, 4, 6, 6, 4, 6, 5, 9, 6, 5, 1, 4, 5, 7, 0, 6, 1, 0, 6, 1, 7, 1, 4, 6, 6, 0, 2, 0, 9, 0,
		3, 6, 6, 4, 1, 8, 0, 4, 0, 6, 6, 6, 0, 5, 8, 4, 9, 8, 1, 1, 5, 5, 8, 8, 5, 2, 4, 7, 7, 1, 9, 9, 5, 3, 3, 3, 6, 2, 1,
		3, 7, 9, 9, 8, 8, 5, 9, 8, 8, 1, 2, 4, 7, 3, 7, 3, 8, 0, 4, 8, 5, 2, 1, 3, 7, 6, 7, 1, 0, 0, 3, 1, 7, 3, 0, 3, 0, 0,
		1, 5, 4, 4, 1, 3, 8, 9, 9, 5, 4, 4, 5, 8, 9, 6, 5, 8, 7, 3, 2, 5, 3, 2, 0, 8, 8, 8, 8, 6, 2, 4, 2, 2, 5, 9, 2, 8, 5,
		0, 3, 5, 9, 4, 9, 7, 2, 2, 6, 6, 9, 3, 5, 9, 6, 1, 3, 7, 0, 2, 7, 5, 5, 5, 4, 4, 7, 0, 3, 0, 8, 6, 6, 1, 7, 3, 1, 9,
		8, 3, 5, 1, 5, 1, 5, 2, 4, 4, 7, 4, 7, 8, 2, 2, 2, 4, 3, 3, 1, 8, 9, 5, 7, 5, 9, 0, 6, 0, 9, 3, 7, 8, 8, 4, 0, 6, 8,
		4, 4, 3, 6, 5, 9, 3, 6, 9, 1, 4, 8, 8, 1, 1, 6, 9, 6, 5, 3, 1, 2, 2, 6, 8,
	]

	function test(fn) {
		const start = performance.now()
		fn(test1)
		fn(test2)
		fn(test3)
		fn(test4)
		fn(test5)
		fn(test6)
		fn(test7)
		fn(test8)
		fn(test9)
		const end = performance.now()
		return end - start
	}

	return {
		time1: test(v1),
		time2: test(v2),
		time3: test(v3),
		time3_1: test(v3_1),
		time3_2: test(v3_2),
		time3_3: test(v3_3),
		time3_4: test(v3_4),
		time3_5: test(v3_5),
	}
}

const results = {}
for (let i = 0; i < 10_000; i++) {
	const individualTimes = eachTestOnce()

	Object.entries(individualTimes).forEach(([key, value]) => {
		results[key] = (results[key] || 0) + value
	})
}
console.log(results)
