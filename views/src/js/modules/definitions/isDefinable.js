export default function isDefinable(word,list) {
  if (!/\w+/.test(word)) {
    return false;
  }

  return list.includes(word);
}