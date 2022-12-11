import 'sanitize.css';
import 'sanitize.css/forms.css';

import { createSignal } from 'solid-js';

import Grid from '@/components/Grid';
import RangeInput from '@/components/RangeInput';

const App = () => {
  const [size, setSize] = createSignal(4);

  return (
    <div>
      <RangeInput min={2} max={8} value={size()} onChange={setSize} />
      <Grid size={size} />
    </div>
  );
};

export default App;
