export default function (input: string) {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}
