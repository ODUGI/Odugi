import { ChangeEvent, useCallback, useState } from "react";

type InputAndTextAreaType = [
  string,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => void
];

const useInput = (initial = ""): InputAndTextAreaType => {
  const [value, setValue] = useState(initial);

  const changeValue = useCallback(
    ({
      target: { value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
      setValue(value),
    [value]
  );

  const resetValue = useCallback(() => {
    setValue("");
  }, []);

  return [value, changeValue, resetValue];
};

export default useInput;
