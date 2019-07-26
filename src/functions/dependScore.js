export default function numGoodSpans(good, bad) {
  return Math.round((good / ((good + bad)) * 100));
}
