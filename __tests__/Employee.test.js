const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('creates an employee name', () => {
    const name = 'Horatio';
    const employee = new Employee(name);
    expect (employee.name).toBe(name);
});

test('creates an employee id', () => {
    const id = 1;
    const employee = new Employee('Horatio', id);
    expect (employee.id).toBe(id);
});

test('creates an employee email', () => {
    const email = 'test@test-email.com';
    const employee = new Employee('Horatio', 1, email);
    expect (employee.email).toBe(email);
});

test('gets employee name', () => {
    const name = 'Horatio';
    const employee = new Employee(name);
    expect (employee.getName()).toBe(name);
});

test('gets employee id', () => {
    const id =1;
    const employee = new Employee('Horatio', id);
    expect (employee.getID()).toBe(id);
});

test('gets employee email', () => {
    const email = 'test@test-email.com';
    const employee = new Employee('Horatio', 1, email);
    expect (employee.getEmail()).toBe(email);
});

test('gets employee role', () => {
    const role = 'Employee';
    const employee = new Employee ('Horatio', 1, 'test@test-email.com');
    expect (employee.getRole()).toBe(role);
});



