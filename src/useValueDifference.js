import { useRef } from "react";

function useValueDifference(newValue, valueName) {
  // useRef uses newValue as its initial value the first time it runs in a component
  const oldValueRef = useRef(newValue);
  const oldValue = oldValueRef.current;
  if (!Object.is(oldValue, newValue)) {
    console.log(`"${valueName}" changed from`);
    console.log(oldValue);
    console.log("to");
    console.log(newValue);
  }
  oldValueRef.current = newValue;
}

export default useValueDifference;
