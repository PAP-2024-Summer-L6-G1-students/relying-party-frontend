import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Flexible" />
      <FormControlLabel control={<Checkbox unChecked />} label="Part-Time" />
      <FormControlLabel control={<Checkbox unChecked />} label="Full-Time" />
      <FormControlLabel control={<Checkbox unChecked />} label="Event(s)" />
    
        <h2> Work Location </h2>

      <FormControlLabel control={<Checkbox defaultChecked />} label="Virtual" />
      <FormControlLabel control={<Checkbox unChecked />} label="In-Person" />
      <FormControlLabel control={<Checkbox unChecked />} label="Group Project" />

      <h2> Availability </h2>
      <FormControlLabel control={<Checkbox unChecked />} label="Monday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Tuesday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Wednesday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Thursday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Friday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Saturday" />
      <FormControlLabel control={<Checkbox unChecked />} label="Sunday" />




    </FormGroup>
  );
}
