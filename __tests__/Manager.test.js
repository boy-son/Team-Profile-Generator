const { TestScheduler } = require('jest');
const Manager = require('../lib/manager.js');

test('creates an manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});

test('creates an manager name', () => {
    const name = 'Horatio';
    const manager = new Manager(name);
    expect (manager.name).toBe(name);
});

test('creates an manager id', () => {
    const id = 1;
    const manager = new Manager('Horatio', id);
    expect (manager.id).toBe(id);
});

test('creates an manager email', () => {
    const email = 'test@test-email.com';
    const manager = new Manager('Horatio', 1, email);
    expect (manager.email).toBe(email);
});

test('creates an manager office number', () => {
    const officeNum = '888-888-8888';
    const manager = new Manager('Horatio', 1, 'test@test-email.com', officeNum);
    expect (manager.officeNumber).toBe(officeNum);
})

test('gets manager name', () => {
    const name = 'Horatio';
    const manager = new Manager(name);
    expect (manager.getName()).toBe(name);
});

test('gets manager id', () => {
    const id =1;
    const manager = new Manager('Horatio', id);
    expect (manager.getID()).toBe(id);
});

test('gets manager email', () => {
    const email = 'test@test-email.com';
    const manager = new Manager('Horatio', 1, email);
    expect (manager.getEmail()).toBe(email);
});

test('gets manager office number', () => {
    const officeNum = '888-888-8888';
    const manager = new Manager('Horatio', 1, 'test@test-email.com', officeNum);
    expect (manager.getOfficeNumber()).toBe(officeNum);
})

test('gets manager role', () => {
    const role = 'Manager';
    const manager = new Manager ('Horatio', 1, 'test@test-email.com', '888-888-8888');
    expect (manager.getRole()).toBe(role);
});