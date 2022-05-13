import { useState } from "react";

interface CounterScreenHelperProps {
  incrementNumber: () => void;
  decrementNumber: () => void;
  initialNumber: number;
}

export const CounterScreenHelper = (): CounterScreenHelperProps => {
  const [initialNumber, setInitialNumber] = useState(0);

  const decrementNumber = () => {
    setInitialNumber(initialNumber - 1);
  };

  const incrementNumber = () => {
    setInitialNumber(initialNumber + 1);
  };

  return {
    initialNumber,
    decrementNumber,
    incrementNumber,
  };
};
