module.exports = function longestConsecutiveLength(array) {
	let value = 1, greatest = 0;
	let lowToHigh = (a,b) => a - b;
	array = array.sort(lowToHigh);
	array_length = array.length;
	
	array.forEach(function(item,i,arr){
		if(item+1===arr[i+1]){
			value+=1;
		}
		else {
			if(value<=greatest){value = 1;}
			else if(array_length>0){
				greatest = value;
				value = 1;
			}						
		}
	});
	return greatest;
}