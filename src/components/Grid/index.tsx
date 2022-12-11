import { For } from 'solid-js';

import styles from './styles.module.css';

type GridProps = {
  size: number;
};

function Grid(props: GridProps) {
  const matrix = () =>
    new Array(props.size).fill(null).map(() => new Array(props.size).fill(false));

  return (
    <div
      class={styles.grid}
      style={{ 'grid-template-columns': `repeat(${props.size}, minmax(50px, 100px))` }}
    >
      <For each={matrix()}>
        {(row) => (
          <For each={row}>
            {(cell) => <button type="button" class={styles.cell}>{`${cell}`}</button>}
          </For>
        )}
      </For>
    </div>
  );
}

export default Grid;
