function retrieveMajor(semver) {
		return semver.charAt(0)
}

function retrieveMinor(semver) {
		return semver.charAt(2)
}

function retrievePatch(semver) {
		return semver.charAt(4)
}