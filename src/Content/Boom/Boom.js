import  React,{useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box,Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Comment from "../Comment/Comment"
import "./Boom.css"


import { useQuery, gql } from "@apollo/client";

const FILMS = gql`
 query GetAllUsers{
  getAllUsers{
      isCreator
      username
      displayName
      userID
      id
      
    }
  }
`;

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }
   const { data, loading, error } = useQuery(FILMS);
    
    const [Loading,SetLoading]=useState(true)
     useEffect(() => {
      setTimeout(()=>{   
        SetLoading(false);
      },5000)
    })
    if (loading)
 
  return;
  if (error) return <pre>{error.message}</pre>


  return (
    <div  className='scrool'>
      <div className='hii'>
     
       {data.getAllUsers.filter(launch =>launch.isCreator === true).map((launch) => (
     <div  key={launch.id}>
        <Box className='buc1'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           

          <Box className='tope'>
        
            <Box className='tope1'>
          
            {Loading ?     <Skeleton className='sk' 
                 width={250}
                 height={25}
          />  :
        <p>{launch.displayName}</p>
          }
        
           </Box>
        
          <Box>

  
{Loading ?     <Skeleton variant='text'

          width={100}
          height={15}
          />  :
          <Button>  pending</Button>
          }

          </Box>
          </Box>
         
      
          <Box className='date'>
         
          {Loading ?     <Skeleton variant="circular" 
            width={40}
            height={40}
            />  :
          <p>{launch.id}</p>
          
          }
  </Box>
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='simplee'>
       <Box className='simplee1'>
       {Loading ?     <Skeleton variant="text" 
            width={200}
            height={25}
            />  :
          <p>ABOUT</p>
            }
          
        
         </Box>
      <Box className='simplee2'>  
      {Loading? <Skeleton variant='text'
      width="100%"
      height="250px"
      /> :
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.</p>
    }
   
 </Box>  
   </Box>
 
         </AccordionDetails>
     
</Accordion>
</Box>
<Box className='buc2'>
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           
           
           
      
          <Box className='tape'>
            <Box className='tape1'>
            <Box >
    
            {Loading ?     <Skeleton variant="text" className='sk1'
          width={250}
          height={25}
            />  :
         
  <p>{launch.displayName}</p>
        }
        </Box>
          </Box>
          <Box>
           
{Loading ?     <Skeleton variant='text'

width={100}
height={15}
/>  :
<Button>  pending</Button>
}

          </Box>
          </Box>
         
      <Box className='Nam'>
      
      {Loading ?     <Skeleton variant="circular" 
            width={40}
            height={40}
            />  :
          <p>{launch.id}</p>
          
          }
      </Box>
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='sime'>
<Box className='sime1'>
       {Loading ?     <Skeleton variant="text" 
            width={200}
            height={25}
            />  :
          <p>ABOUT</p>
            }
          
        
         </Box>
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
   <Comment/>
  </AccordionDetails>
     </Accordion>
     </Box>
     </div>
       ))}
       </div>
    </div>
  );
}
