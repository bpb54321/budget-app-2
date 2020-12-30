import { useRef } from "react";

function useValueDifference(newValueObject) {
  const oldValueObjectRef = useRef(newValueObject);
  const oldValueObject = oldValueObjectRef.current;

  for (const key of Object.keys(newValueObject)) {
    const oldValue = oldValueObject[key];
    const newValue = newValueObject[key];
    if (!Object.is(oldValue, newValue)) {
      console.log(`"${key}" changed from`);
      console.log(oldValue);
      console.log("to");
      console.log(newValue);
    }
  }
  oldValueObjectRef.current = newValueObject;
}

export default useValueDifference;
