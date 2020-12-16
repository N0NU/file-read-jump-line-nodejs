import nthline from 'nthline';
import readline from 'readline';
import { createReadStream } from 'fs';

const filePath = './assets/input.txt';
const fileStream = createReadStream(filePath);

const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity
});

let counter = 0
rl.on('line', (line) => {
	// just calculating the number of lines
	counter++
});

const linesDone = [];
let acc = 0;
rl.on('close', async() => {
	let index = 0;
	// index must be smaller than length of file lines
	while (index < counter) {
		// get the line at index
		const line = await nthline(index, filePath);
		// if line is not already executed
		if (!linesDone.includes(index)) {
			if (line.includes('acc')) {
				// get the part of string starts from + or -
				const accIndex = line.includes('+') ? line.indexOf('+') : line.indexOf('-');
				acc += Number(line.slice(accIndex - 1));
				linesDone.push(index);
				index++;
			} else
			if (line.includes('jmp')) {
				const jumpIndex = line.includes('+') ? line.indexOf('+') : line.indexOf('-');
				const jumpNumber = Number(line.slice(jumpIndex - 1));
				linesDone.push(index);
				index += jumpNumber;
			} else {
				linesDone.push(index);
				index++;
			}
		} else {
			console.log(acc);
			break;
		}
	}
})