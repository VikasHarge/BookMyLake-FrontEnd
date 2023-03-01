import * as React from 'react';
import {useState} from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StyledButton } from '../../../MainSite/dashboard-components/StyledComponents/Button/Button';

export default function BasicDatePicker({value, setValue}) {
    const [isForcePickerOpen, setIsOpen] = useState(false);


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} > 
      <DatePicker
        open = {isForcePickerOpen}
        onClose={() => setIsOpen(false)}
        label="Basic example"
        value={value}
        minDate={Date.now()+1*24*60*60*1000}
        maxDate={Date.now()+25*24*60*60*1000}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={({
            ref,
            inputProps,
            disabled,
            onChange,
            value,
            ...other
        })=>(
            <div ref={ref} {...other}>
              <input
                style={{ display: "none" }}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...inputProps}
              />
              <StyledButton
                color="var(--color-primary-head)"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {"Select Date"}
              </StyledButton>
            </div>
        )}
      />
    </LocalizationProvider>
  );
}