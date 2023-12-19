package main

import (
	"fmt"
	"time"
)

func v31(input []int) []int {
	o := make(map[int]int)
	result := []int{}
	// Loop through the input array once and store the frequency of each element in a map
	for _, num := range input {
		o[num] = o[num] + 1
	}
	// Loop through the map and push the keys with odd values to the result array
	for key, value := range o {
		if value%2 == 1 {
			result = append(result, key)
		}
	}
	return result
}

func v2(input []int) []int {
	result := []int{}
	xor := 0

	// Loop through the input array once and compute the bitwise XOR of all elements
	for _, num := range input {
		xor ^= num
	}

	// Loop through the input array again and check which elements have the same bit as the XOR result
	for _, num := range input {
		if num&xor == num {
			result = append(result, num)
		}
	}

	return result
}

func v1(input []int) []int {
	uniqueMap := make(map[int]bool)
	for _, val := range input {
		uniqueMap[val] = true
	}
	result := []int{}

	for item := range uniqueMap {
		count := 0
		for _, val := range input {
			if val == item {
				count++
			}
		}
		if count%2 == 1 {
			result = append(result, item)
		}
	}

	return result
}

func main() {
	test1 := []int{7}
	test2 := []int{0}
	test3 := []int{0, 0}
	test4 := []int{1, 1, 2}
	test5 := []int{0, 1, 0, 1, 0}
	test6 := []int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}
	test7 := []int{1, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}
	test8 := []int{0, 7, 3, 9, 6, 5, 7, 4, 8, 0, 3, 2, 8, 9, 1, 2, 4, 5, 9, 8, 5, 9, 3, 4, 9, 3, 7, 7, 1, 5, 3, 6, 8, 8, 4, 0, 3, 5, 4, 1, 3, 8, 1, 8, 3, 4, 9, 6, 1, 0, 9, 3, 0, 2, 2, 9, 5, 0, 2, 4, 2, 3, 7, 0, 2, 6, 0, 1, 2, 1, 0, 1, 0, 5, 2, 8, 6, 2,
		4, 0, 8, 6, 7, 8, 9, 9, 2, 8, 9, 6, 1, 8, 7, 2, 6, 8, 3, 3, 2, 7}
	test9 := []int{5, 4, 0, 9, 1, 4, 3, 1, 6, 4, 0, 8, 0, 4, 2, 2, 3, 3, 7, 4, 8, 0, 2, 1, 8, 3, 4, 2, 5, 7, 8, 1, 5, 2, 4, 9, 7, 4, 9, 4, 9, 5, 7, 3, 9, 3, 4, 7, 7, 0, 7, 3, 4, 1, 9, 2, 4, 4, 1, 4, 3, 3, 4, 0, 0, 4, 1, 0, 9, 4, 6, 0, 4, 9, 1, 5, 2, 4, 7, 2, 5, 2, 1, 7, 4, 6, 5, 3, 8, 5, 9, 3, 5, 6, 8, 1, 9, 2, 8, 8, 2, 5, 3, 9, 3, 2, 8, 6, 7, 3, 2, 2, 6, 4, 7, 0, 0, 5, 5, 5, 1, 6, 9, 1, 2, 6, 0, 8, 1, 3, 3, 4, 3, 9, 5, 2, 9, 4, 9, 8, 8, 6, 0, 7, 0, 7, 0, 5, 0, 4, 4, 7, 5, 4, 6, 6, 0, 2, 2, 6, 7, 4, 7, 0, 4, 4, 7, 2, 6, 8, 1, 9, 7, 4, 3, 4, 0, 9, 7, 1, 7, 4, 5, 8, 5, 5, 4, 0, 5, 8, 2, 1, 1, 8, 7, 0, 0, 1, 3, 2, 2, 5, 1, 6, 1, 6, 9, 9, 6, 8, 7, 9, 2, 7, 6, 4, 7, 0, 6, 6, 7, 7, 7, 0, 1, 7, 2, 7, 2, 5, 9, 1, 5, 3, 8, 3, 6, 0, 0, 8, 5, 8, 0, 7, 0, 6, 0, 0, 6, 0, 2, 7, 2, 3, 7, 5, 0, 8, 0, 6, 5, 2, 2, 5, 3, 6, 5, 7, 7, 7, 8, 1, 5, 6, 2, 9, 4, 9, 4, 8, 8, 1, 0, 2, 6, 7, 5, 7, 4, 8, 3, 1, 7, 6, 4, 8, 1, 3, 8, 9, 5, 6, 2, 6, 1, 8, 0, 0, 3, 7, 6, 6, 6, 0, 7, 2, 8, 0, 8, 1, 2, 3, 4, 7, 4, 3, 2, 3, 1, 2, 1, 2, 7, 4, 0, 6, 9, 9, 6, 6, 5, 1, 0, 8, 3, 1, 8, 5, 3, 9, 6, 1, 9, 9, 4, 0, 6, 7, 4, 1, 4, 0, 3, 5, 9, 6, 8, 9, 1, 2, 8, 8, 5, 2, 7, 6, 9, 1, 2, 4, 9, 1, 5, 1, 0, 5, 8, 0, 0, 5, 9, 1, 1, 9, 6, 9, 1, 6, 3, 9, 7, 5, 1, 5, 8, 5, 0, 3, 6, 4, 3, 3, 0, 2, 4, 7, 1, 1, 0, 1, 8, 1, 7, 5, 5, 0, 8, 6, 7, 3, 4, 1, 9, 0, 9, 6, 6, 0, 9, 3, 2, 5, 8, 2, 6, 2, 0, 8, 0, 4, 4, 8, 0, 6, 6, 5, 6, 2, 7, 3, 0, 6, 3, 9, 5, 6, 0, 4, 9, 0, 0, 1, 6, 7, 8, 2, 7, 2, 6, 8, 0, 3, 1, 7, 9, 4, 3, 7, 5, 3, 2, 1, 1, 3, 8, 4, 3, 8, 9, 8, 5, 2, 8, 9, 6, 8, 7, 5, 6, 2, 9, 4, 8, 2, 8, 8, 3, 7, 4, 9, 0, 3, 4, 6, 3, 2, 4, 9, 2, 3, 9, 2, 4, 8, 7, 7, 8, 6, 8, 7, 0, 3, 8, 5, 0, 9, 3, 7, 8, 6, 7, 9, 1, 2, 9, 9, 1, 1, 7, 7, 2, 4, 6, 6, 8, 4, 3, 8, 7, 6, 6, 6, 0, 1, 8, 7, 1, 2, 0, 2, 0, 6, 1, 9, 2, 7, 1, 4, 5, 0, 1, 8, 3, 9, 4, 9, 0, 0, 1, 7, 4, 3, 4, 6, 7, 6, 1, 3, 5, 6, 8, 2, 0, 7, 7, 3, 1, 8, 0, 4, 3, 1, 4, 5, 1, 5, 1, 0, 3, 8, 7, 6, 8, 0, 9, 7, 5, 4, 1, 6, 5, 8, 0, 8, 0, 3, 4, 4, 6, 3, 2, 7, 8, 8, 6, 0, 8, 5, 1, 4, 9, 5, 2, 7, 7, 7, 1, 7, 8, 1, 7, 6, 0, 6, 5, 3, 7, 3, 6, 8, 5, 2, 6, 1, 0, 4, 4, 8, 4, 8, 0, 6, 9, 0, 0, 8, 8, 2, 4, 7, 7, 7, 7, 7, 8, 2, 5, 2, 4, 5, 5, 8, 8, 3, 4, 0, 8, 3, 2, 2, 6, 2, 1, 1, 7, 6, 5, 8, 5, 8, 0, 7, 9, 1, 2, 5, 8, 5, 9, 0, 7, 3, 0, 8, 7, 8, 0, 1, 7, 5, 8, 4, 6, 6, 4, 6, 5, 9, 6, 5, 1, 4, 5, 7, 0, 6, 1, 0, 6, 1, 7, 1, 4, 6, 6, 0, 2, 0, 9, 0, 3, 6, 6, 4, 1, 8, 0, 4, 0, 6, 6, 6, 0, 5, 8, 4, 9, 8, 1, 1, 5, 5, 8, 8, 5, 2, 4, 7, 7, 1, 9, 9, 5, 3, 3, 3, 6, 2, 1, 3, 7, 9, 9, 8, 8, 5, 9, 8, 8, 1, 2, 4, 7, 3, 7, 3, 8, 0, 4, 8, 5, 2, 1, 3, 7, 6, 7, 1, 0, 0, 3, 1, 7, 3, 0, 3, 0, 0, 1, 5, 4, 4, 1, 3, 8, 9, 9, 5, 4, 4, 5, 8, 9, 6, 5, 8, 7, 3, 2, 5, 3, 2, 0, 8, 8, 8, 8, 6, 2, 4, 2, 2, 5, 9, 2, 8, 5, 0, 3, 5, 9, 4, 9, 7, 2, 2, 6, 6, 9, 3, 5, 9, 6, 1, 3, 7, 0, 2, 7, 5, 5, 5, 4, 4, 7, 0, 3, 0, 8, 6, 6, 1, 7, 3, 1, 9, 8, 3, 5, 1, 5, 1, 5, 2, 4, 4, 7, 4, 7, 8, 2, 2, 2, 4, 3, 3, 1, 8, 9, 5, 7, 5, 9, 0, 6, 0, 9, 3, 7, 8, 8, 4, 0, 6, 8, 4, 4, 3, 6, 5, 9, 3, 6, 9, 1, 4, 8, 8, 1, 1, 6, 9, 6, 5, 3, 1, 2, 2, 6, 8}

	start3 := time.Now()
	fmt.Println(v31(test1))
	fmt.Println(v31(test2))
	fmt.Println(v31(test3))
	fmt.Println(v31(test4))
	fmt.Println(v31(test5))
	fmt.Println(v31(test6))
	fmt.Println(v31(test7))
	fmt.Println(v31(test8))
	fmt.Println(v31(test9))
	end3 := time.Now()

	fmt.Println("Time v3:", end3.Sub(start3))

	start2 := time.Now()
	fmt.Println(v2(test1))
	fmt.Println(v2(test2))
	fmt.Println(v2(test3))
	fmt.Println(v2(test4))
	fmt.Println(v2(test5))
	fmt.Println(v2(test6))
	fmt.Println(v2(test7))
	fmt.Println(v2(test8))
	fmt.Println(v2(test9))
	end2 := time.Now()

	fmt.Println("Time v2:", end2.Sub(start2))

	start1 := time.Now()
	fmt.Println(v1(test1))
	fmt.Println(v1(test2))
	fmt.Println(v1(test3))
	fmt.Println(v1(test4))
	fmt.Println(v1(test5))
	fmt.Println(v1(test6))
	fmt.Println(v1(test7))
	fmt.Println(v1(test8))
	fmt.Println(v1(test9))
	end1 := time.Now()

	fmt.Println("Time v1:", end1.Sub(start1))
}
