function bubbleSort(arr){
	var output = arr;
	if(output.length <= 1) return output;
	var hadToSwap = true;
	while(hadToSwap){
		hadToSwap = false;
		//var counter = 0;
		for(var i=0; i<output.length; i++){
			var outcome;			
			if(output[i] > output[i+1]){
				var holder = output[i];
				output[i] = output[i+1];
				output[i+1] = holder;
				outcome = true;
				//counter++;
			} else outcome = false;
			hadToSwap = hadToSwap || outcome;
		}
		//if(counter > 0) hadToSwap = true;
	}
	

	return output;
}