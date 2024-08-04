const LOCAL_STORAGE = {
	ratio: {
		key: "ratio",
		default: "1",
	},
} as const;

export function setRatioInLocalStorage(ratio: number | string) {
	localStorage.setItem(LOCAL_STORAGE.ratio.key, ratio.toString());
}

export function getRatioFromLocalStorage(): number {
	return parseFloat(
		localStorage.getItem(LOCAL_STORAGE.ratio.key) ??
			LOCAL_STORAGE.ratio.default,
	);
}
