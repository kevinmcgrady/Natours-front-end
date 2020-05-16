const urls = {
  homepage: '/',
  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password/:token',
  },
  account: {
    root: '/dashboard',
    settings: '/dashboard/settings',
    bookings: '/dashboard/my-bookings',
    reviews: '/dashboard/my-reviews',
    billing: '/dashboard/billing',
  },
  admin: {
    tours: '/dashboard/manage-tours',
    bookings: '/dashboard/manage-bookings',
    users: '/dashboard/manage-users',
    reviews: '/dashboard/manage-reviews',
  },
  tours: {
    single: '/tour/:id',
  },
  checkout: '/checkout/:id',
};

export default urls;
