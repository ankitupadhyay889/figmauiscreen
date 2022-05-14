import * as React from 'react';
import { Grid,Container,AppBar,Box,Badge,Toolbar,IconButton,Typography,Menu,Button,Tooltip,MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Add.css";
import Lof from "../images/log.png";
import banner from '../images/addnew.png';
import CancelIcon from '@mui/icons-material/Cancel';


const pages = ['Dashboard', 'Menu', 'Order', 'ResturentList'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AddNew = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (
      <Container className="krk" maxWidth="xl">
        <Grid item lg={3} md={6} sm={6} xs={6}>
        <AppBar sx={{ bgcolor: "white" }} position="static">
        <Container className="po" maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                className="koimg"
                variant="h6"
                noWrap
                component="div"
                sx={{mr: 40,color: "black", display: { xs: 'none', md: 'flex' } }}>
                <img src={Lof} alt="logfe" />
                <p>Food Delivery</p>
            </Typography>

            <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <IconButton
                    className="kop"
                    size="large"
                    aria-label="show 17 new notifications"
                    >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
        <Grid className="opa">
        <h5 className='lpa'></h5>
            <Grid className="dko">
                <h4> <CancelIcon /> </h4>
                <Grid container>
                    <p> Product Image </p>
                    <Grid className="ban">
                        <img src={banner} alt="ban"/>
                    </Grid>
                        <Grid className='input'>
                            <h3>Product Name</h3>
                            <p>Pizza</p>
                        </Grid>
                        <Grid className='inp'>
                            <h3>Price</h3>
                            <p>180</p>
                        </Grid>
                        <Grid className='inpt'>
                            <h3>Discount</h3>
                            <p>175</p>
                        </Grid>
                        <Grid className='it'>
                            <h3>Unit</h3>
                            <p>Gms</p>
                        </Grid>
                        <Grid className='pot'>
                            <h3>Stock</h3>
                            <p>15</p>
                        </Grid>
                        <Grid className='pqt'>
                            <h3>Is Veg</h3>
                            <p>True<i className="aw"></i></p>
                        </Grid>
                        <Grid className='pt'>
                            <h3>Discription</h3>
                            <p>Type Here.......</p>
                        </Grid>
                    <Button id="bnt"> Save Product </Button>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    </Container>
  );
}

export default AddNew;