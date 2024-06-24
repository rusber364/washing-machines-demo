import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Fab from '@mui/material/Fab'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { Button } from '@mui/material'
import PaymentIcon from '@mui/icons-material/PaymentRounded'
import PreviewIcon from '@mui/icons-material/PreviewRounded'
import TrendingUpIcon from '@mui/icons-material/TrendingUpRounded'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import touchAndPay from './images/touch-and-pay.png'

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)

  const [value, setValue] = React.useState('1')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 3 new notifications" color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Demo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 3 new notifications" color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['item1', 'item2', 'item3', 'item3'].map((text, index) => (
              <ListItem key={text + index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['item4', 'item5'].map((text, index) => (
              <ListItem key={text + index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Home" value="1" />
            <Tab label="Status" value="2" />
            <Tab label="Control Center" value="3" />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '30px' }}>
              <img width={100} style={{ maxWidth: '100%', height: 'auto' }} src={touchAndPay} alt="touch-and-pay" />
            </div>
            <div>
              <div>Name WFSDS123123</div>
              <div>123456789</div>
              <span
                style={{
                  background: 'blue',
                  color: 'white',
                  borderRadius: 6,
                  padding: '4px 10px',
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                v00.11.22.2
              </span>
            </div>
          </div>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper elevation={3} style={{ marginBlock: 10 }}>
              <Box
                component="section"
                style={{ background: 'blue', borderRadius: 4, color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <div style={{ padding: 20 }}>
                  <TrendingUpIcon fontSize="large" />
                </div>
                <div style={{ paddingBlock: '6px' }}>
                  <div style={{ fontSize: '12px' }}>Total</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold' }}>500,00€</div>
                  <div style={{ fontSize: '12px' }}>20 Sale(en)</div>
                </div>
              </Box>
            </Paper>

            <Paper elevation={3} style={{ marginBlock: 10 }}>
              <Box
                component="section"
                style={{ background: 'red', borderRadius: 4, color: 'white', display: 'flex', alignItems: 'center' }}
              >
                <div style={{ padding: 20 }}>
                  <PreviewIcon fontSize="large" />
                </div>
                <div style={{ paddingBlock: '6px' }}>
                  <div style={{ fontSize: '12px' }}>Cash turnover</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold' }}>200,00€</div>
                  <div style={{ fontSize: '12px' }}>10 Sale(en)</div>
                </div>
              </Box>
            </Paper>

            <Paper elevation={3} style={{ marginBlock: 10 }}>
              <Box
                component="section"
                style={{ background: 'yellow', borderRadius: 4, color: 'black', display: 'flex', alignItems: 'center' }}
              >
                <div style={{ padding: 20 }}>
                  <PaymentIcon fontSize="large" />
                </div>
                <div style={{ paddingBlock: '6px' }}>
                  <div style={{ fontSize: '12px' }}>Bankcard turnover</div>
                  <div style={{ fontSize: '30px', fontWeight: 'bold' }}>100,00€</div>
                  <div style={{ fontSize: '12px' }}>0 Sale(en)</div>
                </div>
              </Box>
            </Paper>

            <Button
              variant="contained"
              style={{ marginBlock: 10, background: 'green', padding: '10px', fontWeight: 'bold' }}
            >
              Loyalty card
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value="2">Status</TabPanel>
        <TabPanel value="3">Control Center</TabPanel>
        <TabPanel value="4">Tab Four</TabPanel>
        <TabPanel value="5">Tab Five</TabPanel>
      </TabContext>

      <Fab color="primary" aria-label="buy" style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <LocalGroceryStoreIcon />
      </Fab>
    </Box>
  )
}
