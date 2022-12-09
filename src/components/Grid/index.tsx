import { Accessor } from 'solid-js';

type GridProps = {
  size: Accessor<number>;
};

function Grid(props: GridProps) {
  return <div>grid: {props.size()}</div>;
}

export default Grid;
