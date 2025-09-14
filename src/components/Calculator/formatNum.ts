export const formatNum = (num: number): string => {
	let intermediate = "";
	if (num % 1 === 0) {
		intermediate = num.toString();
	} else {
		intermediate = num.toFixed(6).toString();
	}

	return intermediate
		.replaceAll(".", ",")
		.replace(/,0+$/, "")
		.replace(/,$/, "");
};
