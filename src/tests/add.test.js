const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => (`Hello ${name}!`)

test('should add 2 numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('should generate greeting from name', () => {
  const name = generateGreeting('Ken')
  expect(name).toBe('Hello Ken!')
})

test('should generate greeting for no name', () => {
  const name = generateGreeting()
  expect(name).toBe('Hello Anonymous!')
})
