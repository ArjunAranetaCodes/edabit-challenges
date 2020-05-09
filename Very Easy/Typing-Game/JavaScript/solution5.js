class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname = firstname + " " + lastname
		this.email = firstname.toLowerCase() + "." + lastname.toLowerCase() + "@company.com"
	}
}