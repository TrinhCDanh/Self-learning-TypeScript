let showInfo = <T>(x : T) => {
	return x;
}

function showInfo2<T>(x : T) : T {
	return x;
}

let test = showInfo<string>("123");
document.write(test);