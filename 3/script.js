// Checking if input matches. Best to do as you stream in

import { readFileSync } from 'fs'
function q1 (file) {
    // replaces carriage returns with empty string
    const data = readFileSync(file, 'utf8').toString().replace(/\r/g, '').trimEnd()
    console.log(data)

    const regex = /mul\(\d+,\d+\)/g;
    // matchAll vs match - matchAll returns an iterator, match returns an array
    const instructions = data.match(regex)
    console.log(instructions)

    let sum = 0
    for (const instruct of instructions) {
        const nums = instruct.match(/\d+/g)
        sum += parseInt(nums[0]) * parseInt(nums[1])
    }
    console.log(sum)
}

const testFile = '3/tempinput.txt'
const inputFile = '3/input.txt'

// q1(inputFile)




function q2 (file) {
    // replaces carriage returns with empty string
    const data = readFileSync(file, 'utf8').toString().replace(/\r/g, '').trimEnd()
    console.log(data)

    const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
    // matchAll vs match - matchAll returns an iterator, match returns an array
    const instructions = data.match(regex)
    console.log(instructions)

    let sum = 0
    let enabled = true
    for (const instruct of instructions) {
        if (instruct === 'do()') { // turn on
            enabled = true 
            continue
        } else if (instruct === 'don\'t()') { // turn off
            enabled = false
            continue
        } else if (!enabled) { // If currently off, skip
            continue
        }

        // console.log(instruct)
        const nums = instruct.match(/\d+/g)
        sum += parseInt(nums[0]) * parseInt(nums[1])
    }

    console.log(sum)
}

q2(inputFile)