class StudyGeneric {
	static printArray<T>(params : T[]) : void {
		console.log(params);
	}
}

StudyGeneric.printArray<number>([3,4,1,2,5].sort(function(x,y){return x-y;}));
StudyGeneric.printArray<string>(["bac", "mna"]);
StudyGeneric.printArray<any>([3,4,1,2,5, "bac", "mna"]);