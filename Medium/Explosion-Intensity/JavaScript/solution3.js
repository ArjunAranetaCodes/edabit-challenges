function boomIntensity(n) {
	return n<2 ? 'boom'
	      :n%2=== 0 && n%5=== 0 ? 'B'+'O'.repeat(n)+'M!'
				:n%2=== 0 ? 'B'+'o'.repeat(n)+'m!'
	      :n%5=== 0 ? 'B'+'O'.repeat(n)+'M'
				: 'B'+'o'.repeat(n)+'m'
}