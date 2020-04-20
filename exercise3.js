//Write two functions to chain together.

var wordArray = ['cat', 'dog', 'person', 'cherish'];

// first function, makeAllCaps
// take in an array of words and capitalize them
function allCapital(x){
	return new Promise((resolve, reject)=>{

		let allCapArray = x.map(words =>{
			if(x === ''){
				console.log(x.toUpperCase());
			}else {
				reject('Everything is not a string in this Array!!');
			};
		})
		resolve(allCapArray);
	});
};

console.log(wordArray);
//allCapital(wordArray);

//sortWords, will sort the words in alphabetical order.
function sortFunc(y){
	return new Promise((resolve, reject)=>{
		if(y){
			y.forEach((word)=>{
				if(y === 'number'){
					reject('This array has a number!!');
				}else if(y === 'boolean'){
					reject('This array is not a string!!');
				}else if(y !== 'string'){
					reject('This array is not a string!!');
				}else{
					reject('Sorry, cannot properly sort');
				};
			})
		};
	})
};

console.log(randomArray);

allCapital(wordArray)
	.then(sortFunc)
	.then((result)=> console.log(result))
	.catch((error)=> console.log(reject));


