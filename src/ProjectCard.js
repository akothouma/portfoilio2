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
    <div style={{ display: 'flex', flexDirection: "column"  ,maxWidth:'1300px',margin:'auto',paddingLeft:'20px'}}>
     
      <div>

        <h2 style={{ alignItems: 'center', color: "#532980" }}> Recent projects</h2>
      </div>
      <div className='card-container'>
        {data.map((datum, key) => {
          return (
            <Card sx={{ backgroundColor: "transparent", border: "1px solid #3C0061;", borderRadius: "10px" }} key={key}>
              <CardHeader
                title={datum.title}
                titleTypographyProps={{
                  sx: {
                    color: '#3C0061', // Title color
                    fontWeight: "bold",   // Title font weight
                  },
                }}
                subheader={datum.languages}
                subheaderTypographyProps={{
                  sx: {
                    color: "#3C0061;", // Subheader color
                  },
                }}
              />


              <CardContent sx={{ color: "white" }}>
                <Typography variant="body2" sx={{ color: '#532980' }}>
                  {datum.synopsis}
                </Typography>
              </CardContent>
              <a 
                href={datum.url} // Use href to link directly to GitHub
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security feature
              >
                <Button 
                  style={{ 
                    color: "white", 
                    backgroundColor: "#3C0061", 
                    marginBottom: '15px', 
                    fontWeight: "bold", 
                    alignSelf: "center" 
                  }}
                >
                  LINK TO GITHUB
                </Button>
              </a>
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
