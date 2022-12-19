import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './Homepage.css';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterLists from './FilterLists';
import ProductCards from './ProductCards';

function Homepage() {
  return (
    <Box className="homepageBox">

        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
            <Typography>Medical Darpan</Typography>
            <Typography>Search</Typography>
            <Typography sx={{fontWeight:'700'}}>Fabiflu Tablet</Typography>
        </Breadcrumbs>

        <Box className="TextField-without-border-radius searchBox">

            <TextField
                color="secondary"
                sx={{borderRadius:'0'}}
                defaultValue="Paracetamol"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                }}
            />

            <Button className='Button-without-border-radius' variant="contained" color="secondary">
                <Typography>
                    Search
                </Typography>
            </Button>
        
        </Box>

        <Box className="searchResult">
            <Typography className='searchResultText'>
                Paracetamol
            </Typography>
            <Typography>
                &nbsp; (128 Products) &nbsp; &nbsp; &nbsp;
            </Typography>
            <Button className='searchResultsBox' variant="contained" color="secondary">Aceclofenac &nbsp;<CloseIcon sx={{
                fontSize:'0.7rem'
            }}/></Button>
            <Typography>&nbsp;</Typography>
            <Button className='searchResultsBox' variant="contained" color="secondary">500 mg &nbsp;<CloseIcon sx={{
                fontSize:'0.7rem'
            }}/></Button>
            <Typography className='searchResultsRemove' color="primary">&nbsp; Remove all</Typography>
        </Box>

        <Grid container spacing={2} sx={{my:'0.7rem'}}>

            <Grid container item xs={2}>
                <FilterLists/>
            </Grid>
            <Grid item xs={10}>
                <Grid container rowSpacing={2} columnSpacing={3}>
                    <Grid item xs={4}><ProductCards/></Grid>
                    <Grid item xs={4}><ProductCards/></Grid>
                    <Grid item xs={4}><ProductCards/></Grid>
                    <Grid item xs={4}><ProductCards/></Grid>
                    <Grid item xs={4}><ProductCards/></Grid>
                    <Grid item xs={4}><ProductCards/></Grid>
                </Grid>
            </Grid>

        </Grid>



    </Box>
  )
}

export default Homepage