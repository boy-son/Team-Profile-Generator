const { TestScheduler } = require('jest');
const Intern = require('../lib/intern.js');

test('creates an intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});

test('creates an intern name', () => {
    const name = 'Horatio';
    const intern = new Intern(name);
    expect (intern.name).toBe(name);
});

test('creates an intern id', () => {
    const id = 1;
    const intern = new Intern('Horatio', id);
    expect (intern.id).toBe(id);
});

test('creates an intern email', () => {
    const email = 'test@test-email.com';
    const intern = new Intern('Horatio', 1, email);
    expect (intern.email).toBe(email);
});

test('creates an intern school', () => {
    const school = 'Drummond';
    const intern = new Intern('Horatio', 1, 'test@test-email.com', school);
    expect (intern.school).toBe(school);
})

test('gets intern name', () => {
    const name = 'Horatio';
    const intern = new Intern(name);
    expect (intern.getName()).toBe(name);
});

test('gets intern id', () => {
    const id =1;
    const intern = new Intern('Horatio', id);
    expect (intern.getID()).toBe(id);
});

test('gets intern email', () => {
    const email = 'test@test-email.com';
    const intern = new Intern('Horatio', 1, email);
    expect (intern.getEmail()).toBe(email);
});

test('gets intern school', () => {
    const school = 'Drummond';
    const intern = new Intern('Horatio', 1, 'test@test-email.com', school);
    expect (intern.getSchool()).toBe(school);
})

test('gets intern role', () => {
    const role = 'Intern';
    const intern = new Intern ('Horatio', 1, 'test@test-email.com', 'Drummond');
    expect (intern.getRole()).toBe(role);
});