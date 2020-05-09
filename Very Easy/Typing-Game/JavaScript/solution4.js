class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${[...arguments].join('.').toLowerCase()}@company.com`;
	}
}