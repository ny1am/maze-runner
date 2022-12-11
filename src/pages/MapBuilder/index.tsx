import 'sanitize.css';
import 'sanitize.css/forms.css';

import { createSignal } from 'solid-js';

import Grid from '@/components/Grid';
import RangeInput from '@/components/RangeInput';

import styles from './styles.module.css';

const MapBuilder = () => {
  const [size, setSize] = createSignal(4);

  return (
    <div class={styles.wrapper}>
      <div>
        <RangeInput min={2} max={9} value={size()} onChange={setSize} />
      </div>
      <div class={styles.map}>
        <Grid size={size()} />
      </div>
    </div>
  );
};

export default MapBuilder;
