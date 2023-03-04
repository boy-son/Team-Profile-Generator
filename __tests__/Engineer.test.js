const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test('creates an Engineer name', () => {
    const name = 'Horatio';
    const engineer = new Engineer(name);
    expect (engineer.name).toBe(name);
});

test('creates an Engineer id', () => {
    const id = 1;
    const engineer = new Engineer('Horatio', id);
    expect (engineer.id).toBe(id);
});

test('creates an Engineer email', () => {
    const email = 'test@test-email.com';
    const engineer = new Engineer('Horatio', 1, email);
    expect (engineer.email).toBe(email);
});

test('creates an Engineer github', () => {
    const github = 'qwerty';
    const engineer = new Engineer('Horatio', 1, 'test@test-email.com', github);
    expect (engineer.github).toBe(github);
})

test('gets Engineer name', () => {
    const name = 'Horatio';
    const engineer = new Engineer(name);
    expect (engineer.getName()).toBe(name);
});

test('gets Engineer id', () => {
    const id =1;
    const engineer = new Engineer('Horatio', id);
    expect (engineer.getID()).toBe(id);
});

test('gets Engineer email', () => {
    const email = 'test@test-email.com';
    const engineer = new Engineer('Horatio', 1, email);
    expect (engineer.getEmail()).toBe(email);
});

test('gets Engineer github', () => {
    const github = 'qwerty';
    const engineer = new Engineer('Horatio', 1, 'test@test-email.com', github);
    expect (engineer.getGithub()).toBe(github);
})

test('gets Engineer role', () => {
    const role = 'Engineer';
    const engineer = new Engineer ('Horatio', 1, 'test@test-email.com', 'qwerty');
    expect (engineer.getRole()).toBe(role);
});