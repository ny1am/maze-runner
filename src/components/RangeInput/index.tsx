import { Accessor, JSX, Setter } from 'solid-js';

type RangeInputProps = {
  value: Accessor<number>;
  onChange: Setter<number>;
  min: number;
  max: number;
};

function RangeInput(props: RangeInputProps) {
  const handleChange: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) =>
    props.onChange(e.currentTarget.valueAsNumber);

  return (
    <input
      type="range"
      value={props.value()}
      min={props.min}
      max={props.max}
      onChange={handleChange}
    />
  );
}

export default RangeInput;
