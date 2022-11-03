import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import "./Boom.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box,Button } from '@mui/material';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  

  return (
    <div  className='scrool'>
       <Box className='hii'>
        <Box className='buc'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           
      
          <Box className='tope'>
            <Box className='tope1'>
          
            CreateName
         
          </Box>
          <Box>
            <Button>Accepted</Button>
          </Box>
          </Box>
         
      
          <Box className='dete'>
            June21,2022
           </Box>
      
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='simplee'>
       <Box className='simplee1'> ABOUT</Box>
      <Box className='simplee2'>  
        
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
 </Box>  
   </Box>
 
         </AccordionDetails>
     
</Accordion>
</Box>
<Box className='buc1'>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           
           
           
      
          <Box className='tape'>
            <Box className='tape1'>
            CreateName
          </Box>
          <Box>
            <Button>Accepted</Button>
          </Box>
          </Box>
         
      <Box className='Nam'>
       June21,2022
      </Box>
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='sime'>
       <Box className='sime1'> ABOUT</Box>
      <Box className='sime2'>  
        
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
 </Box>  
   </Box>
   <Box className='linke'> 
 <Box className='maile'>
 <h4>EMAIL ADDRESS</h4>
  <h5>creaters@mail.com</h5>
   </Box>
   <Box className='twittere'>
   <h4>TWITTER HANDLE</h4>
   <h5 >https://twitter.com/elonmusk</h5>
   </Box>
   <Box className='instae'>
   <h4>INSTAGRAM HANDLE</h4>
   <h5 >
https://www.instagram.com/kalsdkmfklasmdklfmklsadmfklmlaksfmklmsdklfmksdmlf
</h5>
</Box>
<Box className='dribblee'>
   <h4>DRIBBBLE HANDLE</h4>
   <h5 >https://dribbble.com/shots/18551776-Damascus-Techwear-Apparel-2022-web-redesign-concept</h5>
   </Box>
   <Box className='behancee'>
   <h4>BEHANCE HANDLE</h4>
   <h5 >https://www.behance.net/gallery/119045577/DE_FORM?tracking_source=for_you_feed_featured_category</h5>
   </Box>
   </Box>
   
  </AccordionDetails>
     </Accordion>
     </Box>
     </Box>
    </div>
  );
}
