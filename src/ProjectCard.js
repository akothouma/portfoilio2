import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { data } from "./Data"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./ProjectCard.css"




export default function ProjectCard() {
  const handleClick = (url) => {
    <Link to={url}></Link>
  }
  return (
    <div style={{ display: 'flex', flexDirection: "column"}}>
      <div>
        <h3 style={{alignItems:'center',color:"rgb(255,92,0)"}}> Recent projects</h3>
      </div>
      <div className='card-container'>
        {data.map((datum, key) => {
          return (
            <Card sx={{backgroundColor:"transparent",border:"1px solid rgb(255,92,0)",borderRadius:"10px"}}> 
              <CardHeader
               title={datum.title}
               titleTypographyProps={{
                 sx: {
                   color: "rgb(255,92,0)", // Title color
                   fontWeight: "bold",   // Title font weight
                 },
               }}
               subheader={datum.languages}
               subheaderTypographyProps={{
                 sx: {
                   color: "rgb(255,92,0)", // Subheader color
                 },
               }}
              />

                  
              <CardContent sx={{color:"white"}}>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {datum.synopsis}
                </Typography>
              </CardContent>
              <Button style={{ color: "white",backgroundColor:"rgb(255,92,0)",marginBottom:'15px',fontWeight:"bold",alignSelf:"center"}} onClick={handleClick(datum.url)}>
                LINK TO GITHUB
              </Button>
            </Card>
          )
        })
        }
        </div>
        <div>
         
      </div>
    </div>
  );
}
