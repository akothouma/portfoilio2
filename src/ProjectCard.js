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
    <div style={{ display: 'flex', flexDirection: "column" }}>
     
      <div>

        <h2 style={{ alignItems: 'center', color: "rgb(255,92,0)" }}> Recent projects</h2>
      </div>
      <div className='card-container'>
        {data.map((datum, key) => {
          return (
            <Card sx={{ backgroundColor: "transparent", border: "1px solid rgb(255,92,0)", borderRadius: "10px" }} key={key}>
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


              <CardContent sx={{ color: "white" }}>
                <Typography variant="body2" sx={{ color: 'white' }}>
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
                    backgroundColor: "rgb(255,92,0)", 
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
