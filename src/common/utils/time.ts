export const time2sec = (time:string) => {
	const [h = "0", m = "0", s = "0"] = time.split(":")
	const filteredTime = [h,m,s]
	let totalSeconds = 0

	for (let t = 0; t < filteredTime.length; t++) {
		const exponent = filteredTime.length - 1 - t
		const toMultiply = Math.pow(60, exponent)
		totalSeconds += Number(filteredTime[t]) * toMultiply
	}
	return totalSeconds
}

export const sec2min = (totalSeconds: number) => {
	const minutes = Math.trunc(totalSeconds / 60)
	const seconds = totalSeconds - (minutes * 60)
	return String(minutes).padStart(2, '0') + ':'+ String(seconds).padStart(2,'0')
}

