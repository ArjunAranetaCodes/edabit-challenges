function retrieveMajor(semver) {
const [mj, mi, p] = semver.split('.')
return mj
}

function retrieveMinor(semver) {
const [mj, mi, p] = semver.split('.')
return mi
}

function retrievePatch(semver) {
	const [mj, mi, p] = semver.split('.')
	return p

}