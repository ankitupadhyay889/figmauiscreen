import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./Product.css";
import Lof from "../images/log.png";

interface Column {
  id: 'name' | 'productid' | 'quantity' | 'status' | 'price' | 'discountprice';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'productid', label: 'ProductId', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'discountprice',
    label: 'DiscountPrice',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: any;
  productid: any;
  quantity: any;
  discountprice: any;
  price: any;
  status: any;
}

function createData(
  name: any,
  productid: any,
  quantity: any,
  discountprice: any,
  status:any,
  price:any
): Data {
  return { name, productid, quantity,discountprice, price , status };
}

const rows = [
  createData('French Frie', '0251', 132, "Rs.500","InStock", "Rs.63"),
  createData('Noodles', '5654', 135, 61,"InStock","Rs.50"),
  createData('Garlic Bread', '0321', 354, 5,"InStock","Rs.200"),
  createData('Chowmin', '0125', 334, 91,"InStock","Rs.510"),
  createData('Burger', '0154', 303, 61,"InStock","Rs.200"),
  createData('Pizza', '1254', 400, 9,"InStock","Rs.40"),
  createData('Garlic Bread', '0321', 354, 5,"InStock","Rs.200"),
  createData('Chowmin', '0125', 334, 91,"InStock","Rs.510"),
  createData('Burger', '0154', 303, 61,"InStock","Rs.200"),
  createData('Pizza', '1254', 400, 9,"InStock","Rs.40"),
  createData('Garlic Bread', '0321', 354, 5,"InStock","Rs.200"),
  createData('Chowmin', '0125', 334, 91,"InStock","Rs.510"),
  createData('Burger', '0154', 303, 61,"InStock","Rs.200")
];

const pages = ['Dashboard', 'Menu', 'Order', 'ResturentList'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Product = () => {
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
      <Container className="web" maxWidth="xl">
           <AppBar sx={{ bgcolor: "white" }} position="static">
      <Container className="po" maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="koimg"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 30,color: "black", display: { xs: 'none', md: 'flex' } }}>
            <img src={Lof} alt="logfe" />
            <p>Food Delivery</p>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
        <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 840 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                <TableCell align="center" colSpan={1}>
                    Product List
                </TableCell>
                <TableCell  className="sear" colSpan={1}>
                    Search &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a> <SearchIcon /></a>
                </TableCell>
                <TableCell sx={{ bgcolor: "green" , color: "white" }} className="add">
                    Add New Food &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a> <AddIcon /></a>
                </TableCell>
                </TableRow>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    sx={{ bgcolor: "red" }}
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row:any) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column:any) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">6</a>
          <a href="#">5</a>
          <a href="#">4</a>
          <a href="#">3</a>
          <a href="#" className="kopla">2</a>
          <a href="#">1</a>
          <a href="#">&raquo;</a>
        </div>
        </Paper>
      </Container>
  );
}

export default Product;