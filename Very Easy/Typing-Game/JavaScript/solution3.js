class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${this.firstname} ${this.lastname}`;
		this.email = `${this.fullname.replace(' ','.').toLowerCase()}@company.com`;
	}
}