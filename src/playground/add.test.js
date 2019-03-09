const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonumous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should check output is same as input', () => {
    const result = generateGreeting('Lasse');
    expect(result).toBe('Hello Lasse!');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonumous!');
});