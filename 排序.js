var func = function(arr,val,low,high){
	var mid = Math.ceil(low+(high-low)/2);
	debugger;
	if(arr[mid]==val){
		return mid;
	}
	if(arr[mid]<val){
		return func(arr,val,mid+1,high);
	}
	if(arr[mid]>val){
		return func(arr,val,low,mid-1);
	}
	return -1;
}

var sortfunc = function(arr){
	var temparr = [];
	for(item in arr){
		var subarr = [];
		subarr.push(arr[item]);
		temparr.push(subarr);
	}
	
	while(temparr.length !=1){
		var i = 0;
		while(i<temparr.length-1){
			temparr[i] = mergeArr(temparr[i],temparr[i+1]);
			temparr.splice(i+1,1);
			i=i+1;
		}
	}
	return temparr[0];
}

var mergeArr = function(one,two){
	var result = new Array();
	var firstIndex = 0;
	var secondIndex = 0;
	while(firstIndex<one.length && secondIndex<two.length){
		if(one[firstIndex]<two[secondIndex]){
			result.push(one[firstIndex]);
			firstIndex++;
		}else{
			result.push(two[secondIndex]);
			secondIndex++;
		}
	}
	
	while(firstIndex<one.length){
		result.push(one[firstIndex]);
		firstIndex++;
	}
	
	while(secondIndex<two.length){
		result.push(two[secondIndex]);
		secondIndex++;
	}
	return result;
}