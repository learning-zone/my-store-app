import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import classNames from 'classnames';

// Import custom components
import Header from '../header/Header';
import MiniDrawer from '../drawer/MiniDrawer';

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
} from '@mui/icons-material';


const menuItems = [
  {
    key: 'catalog',
    label: 'Catalog',
    icon: LocalOffer,
    items: [
      {
        key: 'categories',
        label: 'Categories',
        icon: DoubleArrow,
        url: '/categories',
      },
      {
        key: 'products',
        label: 'Products',
        icon: DoubleArrow,
        url: '/products',
      },
      {
        key: 'recuring_profiles',
        label: 'Recuring Profiles',
        icon: DoubleArrow,
        url: '/recuring-profiles',
      },
      {
        key: 'filters',
        label: 'Filters',
        icon: DoubleArrow,
        url: '/filters',
      },
      {
        key: 'attribues',
        label: 'Attribues',
        icon: DoubleArrow,
        url: '/attribues',
      },
      {
        key: 'options',
        label: 'Options',
        icon: DoubleArrow,
        url: '/options',
      },
      {
        key: 'manufacturers',
        label: 'Manufacturers',
        icon: DoubleArrow,
        url: '/manufacturers',
      },
      {
        key: 'downloads',
        label: 'Downloads',
        icon: DoubleArrow,
        url: '/downloads',
      },
      {
        key: 'reviews',
        label: 'Reviews',
        icon: DoubleArrow,
        url: '/reviews',
      },
      {
        key: 'information',
        label: 'Information',
        icon: DoubleArrow,
        url: '/information',
      },
    ],
  },
  {
    key: 'extensions',
    label: 'Extensions',
    icon: Extension,
    items: [
      {
        key: 'marketplace',
        label: 'Marketplace',
        icon: DoubleArrow,
        url: '/marketplace',
      },
      {
        key: 'installer',
        label: 'Installer',
        icon: DoubleArrow,
        url: '/installer',
      },
      {
        key: 'extension',
        label: 'Extensions',
        icon: DoubleArrow,
        url: '/extensions',
      },
      {
        key: 'modifictions',
        label: 'Modifications',
        icon: DoubleArrow,
        url: '/modifictions',
      },
      {
        key: 'events',
        label: 'Events',
        icon: DoubleArrow,
        url: '/events',
      },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    icon: Computer,
    items: [
      {
        key: 'layouts',
        label: 'Layouts',
        icon: DoubleArrow,
        url: '/layouts',
      },
      {
        key: 'theme_editor',
        label: 'Theme Editor',
        icon: DoubleArrow,
        url: '/theme-editor',
      },
      {
        key: 'language_editor',
        label: 'Language Editor',
        icon: DoubleArrow,
        url: '/language-editor',
      },
      {
        key: 'banners',
        label: 'Banners',
        icon: DoubleArrow,
        url: '/banners',
      },
      {
        key: 'seo_url',
        label: 'SEO URL',
        icon: DoubleArrow,
        url: '/seo-url',
      },
    ],
  },
  {
    key: 'sales',
    label: 'Sales',
    icon: ShoppingCart,
    items: [
      {
        key: 'orders',
        label: 'Orders',
        icon: DoubleArrow,
        url: '/orders',
      },
      {
        key: 'recurring_profiles',
        label: 'Recurring Profiles',
        icon: DoubleArrow,
        url: '/recurring-profiles',
      },
      {
        key: 'returns',
        label: 'Returns',
        icon: DoubleArrow,
        url: '/returns',
      },
      {
        key: 'gift_vouchers',
        label: 'Gift Vouchers',
        icon: DoubleArrow,
        url: '/gift-vouchers',
      },
    ],
  },
  {
    key: 'customers',
    label: 'Customers',
    icon: PermIdentity,
    items: [
      {
        key: 'customer',
        label: 'Customers',
        icon: DoubleArrow,
        url: '/customers',
      },
      {
        key: 'customers_groups',
        label: 'Customers Groups',
        icon: DoubleArrow,
        url: '/customers-groups',
      },
      {
        key: 'customers_approvals',
        label: 'Customers Approvals',
        icon: DoubleArrow,
        url: '/customers-approvals',
      },
      {
        key: 'custom_fields',
        label: 'Custom Fields',
        icon: DoubleArrow,
        url: '/custom-fields',
      },
    ],
  },
  {
    key: 'marketings',
    label: 'Marketing',
    icon: Share,
    items: [
      {
        key: 'marketing',
        label: 'Marketing',
        icon: DoubleArrow,
        url: '/marketing',
      },
      {
        key: 'coupons',
        label: 'Coupons',
        icon: DoubleArrow,
        url: '/coupons',
      },
      {
        key: 'email',
        label: 'Email',
        icon: DoubleArrow,
        url: '/email',
      },
    ],
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: Settings,
    items: [
      {
        key: 'api',
        label: 'API',
        icon: DoubleArrow,
        url: '/api',
      },
      {
        key: 'user_groups',
        label: 'User Groups',
        icon: DoubleArrow,
        url: '/user-groups',
      },
      {
        key: 'users',
        label: 'Users',
        icon: DoubleArrow,
        url: '/users',
      },
      {
        key: 'stores',
        label: 'Stores',
        icon: DoubleArrow,
        url: '/stores',
      },
      {
        key: 'localization',
        label: 'Localization',
        icon: DoubleArrow,
        url: '/localization',
      },
      {
        key: 'maintenance',
        label: 'Maintenance',
        icon: DoubleArrow,
        url: '/maintenance',
      },
    ],
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: InsertChart,
    items: [
      {
        key: 'report',
        label: 'Reports',
        icon: DoubleArrow,
        url: '/reports',
      },
      {
        key: 'online_users',
        label: "Who's Online",
        icon: DoubleArrow,
        url: '/online-users',
      },
      {
        key: 'statistics',
        label: 'Statistics',
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
    marginLeft: '45px',
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
  contentShift: {
    marginLeft: '250px',
  }
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
        <main className={classNames(classes.content, open && classes.contentShift)}>{children}</main>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(MainLayout);
