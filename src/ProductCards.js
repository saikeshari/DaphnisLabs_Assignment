import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './img.png';
import './ProductCards.css';
import Divider from '@mui/material/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';

function ProductCards() {
  return (
    <>
    <Card sx={{ maxWidth: 345}} className="cardBox">
      <CardMedia
        component="img"
        height="100%"
        image={img}
        alt="green iguana"
        sx={{
            objectFit:'contain',
            padding:'0.5rem',
            width:'96%'
        }}
      />
      <CardContent className='contentCard' sx={{p:0, pb:0}}>
        <Typography className='cardHead'>
            Favipiravir 400mg (Fabiflu) Tablets
        </Typography>
        <Typography>
            <span className='cardPrice'>Rs 1,775 </span> <span className='priceStripe'>/ stripe</span>
        </Typography>

        <Typography className='pharmaName'>
            Glenmark Pharmaceutical Limited
        </Typography>
        <Typography className='pharmaLocation'>
            PARVAT PATIYA, SURAT, GUJARAT
        </Typography>

        <Divider sx={{backgroundColor:'#A2A2A2', mt:'2rem'}}/>
        <div className='contactSup'>
            <TelegramIcon/>
            <Typography sx={{fontWeight:'700'}}>
                &nbsp;
                Contact Suppliers
            </Typography>
        </div>
      </CardContent>
    </Card>
    </>
  )
}

export default ProductCards