import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {Typography, Box} from '@mui/material';
import "./Comment.css"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '0.5px solid ',
  borderColor:'white',
 borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
        
   <Box className='button'>
   <hp>Accepted</hp>
   
 <hq onClick={handleToggle}>Rejected</hq>
 
 </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
       <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" textAlign="center" color="black">
          Reation Of Rejection
          </Typography>
          <form>
        
          <textarea type="text" placeholder='Write a brief description about creator rejection... ' className='input'></textarea>
        </form>
       
          <Typography id="keep-mounted-modal-description" sx={{ mt: 50, alignContent:"center",justifyContent:"center"}}>
         
          </Typography>
         <h1 onClick={handleClose} className="Button">Sumbit</h1>
        </Box>
      </Backdrop>
    </div>
  );
}
