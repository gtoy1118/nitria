export function PlayAudioFromLink(link) {
  const audio = new Audio(link);
  audio.play()
}