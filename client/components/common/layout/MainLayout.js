import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Import custom components
import Header from '../header/Header';
import MiniDrawer from '../drawer/MiniDrawer';
import Footer from '../footer/Footer';
import HomeIcon from '@material-ui/icons/Home';
import {
  DoubleArrow,
  LocalOffer,
  Extension,
  Computer,
  ShoppingCart,
  PermIdentity,
  Share,
  Settings,
  InsertChart,
} from '@material-ui/icons';


const menuItems = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    url: '/dashboard',
  },
  {
    name: 'Catalog',
    icon: LocalOffer,
    children: [
      {
        name: 'Categories',
        icon: DoubleArrow,
        url: '/categories',
      },
      {
        name: 'Products',
        icon: DoubleArrow,
        url: '/products',
      },
      {
        name: 'Recuring Profiles',
        icon: DoubleArrow,
        url: '/recuring-profiles',
      },
      {
        name: 'Filters',
        icon: DoubleArrow,
        url: '/filters',
      },
      {
        name: 'Attribues',
        icon: DoubleArrow,
        url: '/attribues',
      },
      {
        name: 'Options',
        icon: DoubleArrow,
        url: '/Options',
      },
      {
        name: 'Manufacturers',
        icon: DoubleArrow,
        url: '/manufacturers',
      },
      {
        name: 'Downloads',
        icon: DoubleArrow,
        url: '/downloads',
      },
      {
        name: 'Reviews',
        icon: DoubleArrow,
        url: '/reviews',
      },
      {
        name: 'Information',
        icon: DoubleArrow,
        url: '/information',
      },
    ],
  },
  {
    name: 'Extensions',
    icon: Extension,
    children: [
      {
        name: 'Marketplace',
        icon: DoubleArrow,
        url: '/marketplace',
      },
      {
        name: 'Installer',
        icon: DoubleArrow,
        url: '/installer',
      },
      {
        name: 'Extensions',
        icon: DoubleArrow,
        url: '/extensions',
      },
      {
        name: 'Modifications',
        icon: DoubleArrow,
        url: '/modifictions',
      },
      {
        name: 'Events',
        icon: DoubleArrow,
        url: '/events',
      },
    ],
  },
  {
    name: 'Design',
    icon: Computer,
    children: [
      {
        name: 'Layouts',
        icon: DoubleArrow,
        url: '/layouts',
      },
      {
        name: 'Theme Editor',
        icon: DoubleArrow,
        url: '/theme-editor',
      },
      {
        name: 'Language Editor',
        icon: DoubleArrow,
        url: '/language-editor',
      },
      {
        name: 'Banners',
        icon: DoubleArrow,
        url: '/banners',
      },
      {
        name: 'SEO URL',
        icon: DoubleArrow,
        url: '/seo-url',
      },
    ],
  },
  {
    name: 'Sales',
    icon: ShoppingCart,
    children: [
      {
        name: 'Orders',
        icon: DoubleArrow,
        url: '/orders',
      },
      {
        name: 'Recurring Profiles',
        icon: DoubleArrow,
        url: '/recurring-profiles',
      },
      {
        name: 'Returns',
        icon: DoubleArrow,
        url: '/returns',
      },
      {
        name: 'Gift Vouchers',
        icon: DoubleArrow,
        url: '/gift-vouchers',
      },
    ],
  },
  {
    name: 'Customers',
    icon: PermIdentity,
    children: [
      {
        name: 'Customers',
        icon: DoubleArrow,
        url: '/customers',
      },
      {
        name: 'Customers Groups',
        icon: DoubleArrow,
        url: '/customers-groups',
      },
      {
        name: 'Customers Approvals',
        icon: DoubleArrow,
        url: '/customers-approvals',
      },
      {
        name: 'Custom Fields',
        icon: DoubleArrow,
        url: '/custom-fields',
      },
    ],
  },
  {
    name: 'Marketing',
    icon: Share,
    children: [
      {
        name: 'Marketing',
        icon: DoubleArrow,
        url: '/marketing',
      },
      {
        name: 'Coupons',
        icon: DoubleArrow,
        url: '/coupons',
      },
      {
        name: 'Email',
        icon: DoubleArrow,
        url: '/email',
      },
    ],
  },
  {
    name: 'System',
    icon: Settings,
    children: [
      {
        name: 'Settings',
        icon: DoubleArrow,
        url: '/settings',
      },
      {
        name: 'Localization',
        icon: DoubleArrow,
        url: '/localization',
      },
      {
        name: 'Maintenance',
        icon: DoubleArrow,
        url: '/maintenance',
      },
    ],
  },
  {
    name: 'Reports',
    icon: InsertChart,
    children: [
      {
        name: 'Reports',
        icon: DoubleArrow,
        url: '/reports',
      },
      {
        name: "Who's Online",
        icon: DoubleArrow,
        url: '/who-is-online',
      },
      {
        name: 'Statistics',
        icon: DoubleArrow,
        url: '/statistics',
      },
    ],
  },
];


const styles = (theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const MainLayout = (props) => {
  const { classes, children } = props;
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header navDrawerOpen={open} handleToggleDrawer={handleToggle} />
        <MiniDrawer navDrawerOpen={open} menuItems={menuItems} />
        <main className={classes.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(MainLayout);
