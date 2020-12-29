export default function incrementCount(setCount) {
  setCount(previousCount => ++previousCount);
}