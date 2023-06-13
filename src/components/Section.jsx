import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const Section = (children ) => {
   
 return(
  <div>

<LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>;
  </div>
 )


};