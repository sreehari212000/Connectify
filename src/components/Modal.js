import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MyModal({openmodal, setOpenmodal}) {

  return (
    <div>
      <Dialog
        open={openmodal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'⚠️'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sorry! This functionality is currently unavailable
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={()=>setOpenmodal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}