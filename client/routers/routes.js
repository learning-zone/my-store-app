import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));

/** Catalog Module **/
const AsyncDashboard = loadable(() => import('../containers/dashboard/dashboardContainer'));
const AsyncCategories = loadable(() => import('../containers/catalog/categoriesContainer'));
const AsyncProducts = loadable(() => import('../containers/catalog/productsContainer'));
const AsyncRecuringProfiles = loadable(() => import('../containers/catalog/recuringProfilesContainer'));
const AsyncFilters = loadable(() => import('../containers/catalog/filtersContainer'));
const AsyncAttribues = loadable(() => import('../containers/catalog/attribuesContainer'));
const AsyncOptions = loadable(() => import('../containers/catalog/optionsContainer'));
const AsyncManufacturers = loadable(() => import('../containers/catalog/manufacturersContainer'));
const AsyncDownloads = loadable(() => import('../containers/catalog/downloadsContainer'));
const AsyncReviews = loadable(() => import('../containers/catalog/reviewsContainer'));
const AsyncInformation = loadable(() => import('../containers/catalog/informationContainer'));

/** Extensions Module **/
const AsyncMarketplace = loadable(() => import('../containers/extension/marketplaceContainer'));
const AsyncInstaller = loadable(() => import('../containers/extension/installerContainer'));
const AsyncExtensions = loadable(() => import('../containers/extension/extensionsContainer'));
const AsyncModifictions = loadable(() => import('../containers/extension/modificationsContainer'));
const AsyncEvents = loadable(() => import('../containers/extension/eventsContainer'));

/** Design Module **/
const AsyncLayouts = loadable(() => import('../containers/design/layoutsContainer'));
const AsyncThemeEditor = loadable(() => import('../containers/design/themeEditorContainer'));
const AsyncLanguageEditor = loadable(() => import('../containers/design/languageEditorContainer'));
const AsyncBanners = loadable(() => import('../containers/design/bannersContainer'));
const AsyncSeoUrl = loadable(() => import('../containers/design/seoUrlContainer'));

/** Sales Module **/
const AsyncOrders = loadable(() => import('../containers/sales/ordersContainer'));
const AsyncRecurringProfiles = loadable(() => import('../containers/sales/recurringProfilesContainer'));
const AsyncReturns = loadable(() => import('../containers/sales/returnsContainer'));
const AsyncGiftVouchers = loadable(() => import('../containers/sales/giftVouchersContainer'));

/** Customers Module **/
const AsyncCustomers = loadable(() => import('../containers/customers/customerContainer'));
const AsyncCustomersGroups = loadable(() => import('../containers/customers/customersGroupsContainer'));
const AsyncCustomersApprovals = loadable(() => import('../containers/customers/customersApprovalsContainer'));
const AsyncCustomFields = loadable(() => import('../containers/customers/customFieldsContainer'));

/** Marketing Module **/
const AsyncMarketing = loadable(() => import('../containers/marketing/marketingContainer'));
const AsyncCoupons = loadable(() => import('../containers/marketing/couponsContainer'));
const AsyncEmail = loadable(() => import('../containers/marketing/emailContainer'));

/** Settings Module **/
const AsyncAPI = loadable(() => import('../containers/settings/apiContainer'));
const AsyncUserGroups = loadable(() => import('../containers/settings/userGroupsContainer'));
const AsyncUsers = loadable(() => import('../containers/settings/usersContainer'));
const AsyncStores = loadable(() => import('../containers/settings/storesContainer'));
const AsyncLocalization = loadable(() => import('../containers/settings/localizationContainer'));
const AsyncMaintenance = loadable(() => import('../containers/settings/maintenanceContainer'));

/** Reports Module **/
const AsyncReports = loadable(() => import('../containers/reports/reportsContainer'));
const AsyncOnlineUsers = loadable(() => import('../containers/reports/onlineUsersContainer'));
const AsyncStatistics = loadable(() => import('../containers/reports/statisticsContainer'));


const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path='/' component={AsyncLoginForm} />
      <RestrictRoute exact path='/signup' component={AsyncSignUpForm} />

      {/** Catalog Module **/}
      <PrivateRoute exact path='/dashboard' layout={MainLayout} component={AsyncDashboard} />
      <PrivateRoute exact path='/categories' layout={MainLayout} component={AsyncCategories} />
      <PrivateRoute exact path='/products' layout={MainLayout} component={AsyncProducts} />
      <PrivateRoute exact path='/recuring-profiles' layout={MainLayout} component={AsyncRecuringProfiles} />
      <PrivateRoute exact path='/filters' layout={MainLayout} component={AsyncFilters} />
      <PrivateRoute exact path='/attribues' layout={MainLayout} component={AsyncAttribues} />
      <PrivateRoute exact path='/options' layout={MainLayout} component={AsyncOptions} />
      <PrivateRoute exact path='/manufacturers' layout={MainLayout} component={AsyncManufacturers} />
      <PrivateRoute exact path='/downloads' layout={MainLayout} component={AsyncDownloads} />
      <PrivateRoute exact path='/reviews' layout={MainLayout} component={AsyncReviews} />
      <PrivateRoute exact path='/information' layout={MainLayout} component={AsyncInformation} />
      
      {/** Extensions Module **/}
      <PrivateRoute exact path='/marketplace' layout={MainLayout} component={AsyncMarketplace} />
      <PrivateRoute exact path='/installer' layout={MainLayout} component={AsyncInstaller} />
      <PrivateRoute exact path='/extensions' layout={MainLayout} component={AsyncExtensions} />
      <PrivateRoute exact path='/modifictions' layout={MainLayout} component={AsyncModifictions} />
      <PrivateRoute exact path='/events' layout={MainLayout} component={AsyncEvents} />

      {/** Design Module **/}
      <PrivateRoute exact path='/layouts' layout={MainLayout} component={AsyncLayouts} />
      <PrivateRoute exact path='/theme-editor' layout={MainLayout} component={AsyncThemeEditor} />
      <PrivateRoute exact path='/language-editor' layout={MainLayout} component={AsyncLanguageEditor} />
      <PrivateRoute exact path='/banners' layout={MainLayout} component={AsyncBanners} />
      <PrivateRoute exact path='/seo-url' layout={MainLayout} component={AsyncSeoUrl} />

      {/** Sales Module **/}
      <PrivateRoute exact path='/orders' layout={MainLayout} component={AsyncOrders} />
      <PrivateRoute exact path='/recurring-profiles' layout={MainLayout} component={AsyncRecurringProfiles} />
      <PrivateRoute exact path='/returns' layout={MainLayout} component={AsyncReturns} />
      <PrivateRoute exact path='/gift-vouchers' layout={MainLayout} component={AsyncGiftVouchers} />

      {/** Customers Module **/}
      <PrivateRoute exact path='/customers' layout={MainLayout} component={AsyncCustomers} />
      <PrivateRoute exact path='/customers-groups' layout={MainLayout} component={AsyncCustomersGroups} />
      <PrivateRoute exact path='/customers-approvals' layout={MainLayout} component={AsyncCustomersApprovals} />
      <PrivateRoute exact path='/custom-fields' layout={MainLayout} component={AsyncCustomFields} />

      {/** Marketing Module **/}
      <PrivateRoute exact path='/marketing' layout={MainLayout} component={AsyncMarketing} />
      <PrivateRoute exact path='/coupons' layout={MainLayout} component={AsyncCoupons} />
      <PrivateRoute exact path='/email' layout={MainLayout} component={AsyncEmail} />
      
      {/** Settings Module **/}
      <PrivateRoute exact path='/api' layout={MainLayout} component={AsyncAPI} />
      <PrivateRoute exact path='/user-groups' layout={MainLayout} component={AsyncUserGroups} />
      <PrivateRoute exact path='/users' layout={MainLayout} component={AsyncUsers} />
      <PrivateRoute exact path='/stores' layout={MainLayout} component={AsyncStores} />
      <PrivateRoute exact path='/localization' layout={MainLayout} component={AsyncLocalization} />
      <PrivateRoute exact path='/maintenance' layout={MainLayout} component={AsyncMaintenance} />

      {/** Reports Module **/}
      <PrivateRoute exact path='/reports' layout={MainLayout} component={AsyncReports} />
      <PrivateRoute exact path='/online-users' layout={MainLayout} component={AsyncOnlineUsers} />
      <PrivateRoute exact path='/statistics' layout={MainLayout} component={AsyncStatistics} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
