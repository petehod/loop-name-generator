export const trimExcessSpaces = (input: string): string => {
  return input.trim().replace(/\s+/g, " ");
};

export const formatLoopName = (
  producerName: string,
  word: string,
  tempo?: string,
  key?: string,
  date?: string
) => {
  return trimExcessSpaces(
    `${word} ${tempo ?? ""} ${key ?? ""} @${producerName} ${date ?? ""}`
  );
};
