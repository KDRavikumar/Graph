import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 240, backgroundColor: '#1e1e2f', color: 'white', height: '100vh', p: 2 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Icons" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Map" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="User Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Table List" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Typography" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="RTL Support" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Upgrade to PRO" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
