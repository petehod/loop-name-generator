export const formatLoopName = (
  producerName: string,
  word: string,
  tempo?: string,
  key?: string,
  date?: string
) => {
  return `${word} ${tempo ?? ""} ${key ?? ""} @${producerName} ${date ?? ""}`;
};
