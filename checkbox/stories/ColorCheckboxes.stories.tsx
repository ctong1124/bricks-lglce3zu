import * as React from 'react';
import { pink } from '@mui/material/colors';
import { Checkbox } from '~/checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ColorCheckboxes_() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}

export const ColorCheckboxes = () => <ColorCheckboxes_ />;
