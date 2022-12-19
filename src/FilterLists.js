import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import './FilterLists.css';

const listHeading=[
    'Related Category', 
    'Related Brands', 
    'Business Type', 
    'Strength', 
    'Manufacturer', 
    'Precription/Non-Precription'
]

const listsItems = [
    [
        'Paracetamol Tablets',
        'Paracetamol Syrup',
        'Paracetamol Powder',
        'Aceclofenac',
        'Magaladrate Simethicone Oral Suspension',
        'Mefanamic Paracetamol Syrup'
    ],
    [
        'Cipmol Paracetamol',
        'Pandal Paracetamol Tablets',
        'Combiflam',
        'Crocin Tablets',
        'Calpol Paracetamol Tablets',
        'Sumo'
    ],
    [
        'Wholesaler',
        'Manufacturer',
        'Retailer',
        'Exporter'
    ],
    [
        '500 mg',
        '650 mg'
    ],
    [
        'Intas Pharmaceutical Ltd.',
        'Alkem Laboratories Ltd.',
    ],
    [
        'Intas Pharmaceutical Ltd.',
        'Alkem Laboratories Ltd.',
    ]
]

function FilterLists() {
  return (
    <div>

            {listHeading.map((item, index) => {
                return(
                    <List sx={{minWidth:'12rem'}}>
                        <ListItem className='headListItem' disablePadding>
                            <ListItemButton className='listItemHeadBtn'>
                                <ListItemText primaryTypographyProps={{ fontSize: 15, fontWeight:'700', textAlign:'center' }} primary={item} />
                            </ListItemButton>
                        </ListItem>
                        {listsItems[index].map((itemlist,index) => {
                            return(
                                <>
                                {itemlist=="Aceclofenac" || itemlist=="500 mg" ? 
                                <ListItem className='highlightListItem' disablePadding>
                                    <ListItemButton className='listItemBtn'>
                                    <div className='listItemText'>
                                        <ListItemText primaryTypographyProps={{ fontSize: 13, color:'white' }} primary={itemlist} />
                                        <CloseIcon className='closeIcn' />
                                    </div>
                                    </ListItemButton>
                                </ListItem> 
                                : 
                                <ListItem className='basicListItem' disablePadding>
                                    <ListItemButton className='listItemBtn'>
                                    <div className='listItemText'>
                                        <ListItemText primaryTypographyProps={{ fontSize: 13 }} primary={itemlist} />
                                        <CloseIcon className='closeIcn'/>
                                    </div>
                                    </ListItemButton>
                                </ListItem>
                                }
                                
                                </>
                            )
                        })}
                    </List>
                )
            })}

    </div>
  )
}

export default FilterLists