import  React,{useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Comment from "../Comment/Comment"
import "./Band.css"


import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
 query GetAllUsers{
  getAllUsers{
     isCreatorApplicationInReview 
      username
      displayName
      userID
      id
      email
      twitter
      telegram
    behance
    linkedIn
    instagram
    }
  }
`;
export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

     const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const { data, loading, error } = useQuery(FILMS_QUERY);
    
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
    <div  className='scrool-1'>
      <div className='hiii'>
     
       {data.getAllUsers.filter(launch =>launch.isCreatorApplicationInReview === true).map((launch) => (
     <div  key={launch.id}>
        <Box className='buc1'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           

          <Box className='top'>
        
            <Box className='top1'>
          
            {Loading ?     <Skeleton className='sk' 
          
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
<Box className='simple'>
       <Box className='simple1'>
       {Loading ?     <Skeleton variant="text" 
            width={200}
            height={25}
            />  :
          <p>ABOUT</p>
            }
          
         </Box>
      <Box className='simple2'>  
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
           
           
           
      
          <Box className='tap'>
            <Box className='tap1'>
            <Box >
    
            {Loading ?     <Skeleton variant="text" className='sk1'
         
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
         
      <Box className='Nama'>
      
      {Loading ?     <Skeleton variant="circular" 
            width={40}
            height={40}
            />  :
          <p>{launch.id}</p>
          
          }
      </Box>
  
        </AccordionSummary>
        
        <AccordionDetails>
<Box className='sim'>
<Box className='sim1'>
       {Loading ?     <Skeleton variant="text" 
            width={200}
            height={25}
            />  :
          <p>ABOUT</p>
            }
          
         </Box>
      <Box className='sim2'>  
        
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
 </Box>  
   </Box>
   <Box className='link'> 
 <Box className='mail'>
 <h4>EMAIL ADDRESS</h4>
  <h5>{launch.email}</h5>
   </Box>
   <Box className='twitter'>
   <h4>TWITTER HANDLE</h4>
   <h5 >{launch.twitter}</h5>
   </Box>
   <Box className='insta'>
   <h4>INSTAGRAM HANDLE</h4>
   <h5 >
{launch.instagram}
</h5>
</Box>
<Box className='dribble'>
   <h4>TELEGRAM HANDLE</h4>
   <h5 >{launch.telegram}</h5>
   </Box>
   <Box className='behance'>
   <h4>BEHANCE HANDLE</h4>
   <h5 >{launch.behance}</h5>
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