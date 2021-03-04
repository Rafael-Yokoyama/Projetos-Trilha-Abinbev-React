import React from 'react';
import { Link as RouterLink, } from 'react-router-dom';
import { Box, Button, Drawer, Hidden, List, makeStyles, ListItem } from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  Lock as LockIcon,
  Euro as EuroIcon,
  MonetizationOn as MoneyIcon,
  PersonAdd as PersonAddIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  desktopDrawer: {

    width: 256,
    top: 0,
    height: '100vh'
  },
  item: {
    background:'blue',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
 color: ' white',
    marginRight: theme.spacing(1)
  },


 
  title: {
    color: 'white',
    marginRight: 'auto'
  },
  active: {
    color: 'white',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: 'white'
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          <ListItem
            disableGutters
          >
            <Button
              className={classes.button}
              component={RouterLink}
              to="/dashboard"
            >
              <DashboardIcon
                className={classes.icon }
              />
              <span className={classes.title}>
                Dashboard
        </span>
            </Button>
          </ListItem>

          <ListItem
            disableGutters
          >
            <Button
              className={classes.button}
              component={RouterLink}
              to="/currency"
            >
              <EuroIcon
                className={classes.icon}
              />
              <span className={classes.title}>
            Moedas
        </span>
            </Button>
          </ListItem>

          <ListItem
            disableGutters
          >
            <Button
              className={classes.button}
              component={RouterLink}
              to="/finances"
            >
              <MoneyIcon
                className={classes.icon}
              />
              <span className={classes.title}>
            Finanças
        </span>
            </Button>
          </ListItem>

          <ListItem
            disableGutters
          >
            <Button
              className={classes.button}
              component={RouterLink}
              to="/login"
            >
              <LockIcon
                className={classes.icon}
              />
              <span className={classes.title}>
                Login
        </span>
            </Button>
          </ListItem>

          <ListItem
            disableGutters
          >
            <Button
              className={classes.button}
              component={RouterLink}
              to="/"
            >
              <PersonAddIcon
                className={classes.icon}
                
              />
              <span className={classes.title}>
                Cadastro
        </span>
            </Button>
          </ListItem>

        </List>
      </Box>

    </Box>
  );

  return (
    <>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;