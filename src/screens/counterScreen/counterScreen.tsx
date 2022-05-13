import { findByLabelText } from "@testing-library/react";
import { CounterScreenHelper } from "./counterScreen.helper";

export const CounterScreen: React.FC = () => {
  const { initialNumber, decrementNumber, incrementNumber } =
    CounterScreenHelper();

  return (
    <div className="counterContainer">
      <button className="counterButton" onClick={decrementNumber}>
        Decrement
      </button>
      <h1 className="counterNumber">{initialNumber}</h1>
      <button className="counterButton" onClick={incrementNumber}>
        Increment
      </button>
    </div>
  );
};
