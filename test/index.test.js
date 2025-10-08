const hash = require('./testindex');

test('Verificar Hash', () => {
    const message = 'contraseña';
    const hash = hash(message);
    expect(hash).toEqual();
});