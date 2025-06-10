// User API
export const LOGIN_API = '/login';
export const GET_LOGGED_IN_USER_API = '/users/user/get-logged-in-user'; // userId
export const REGISTER_API = '/users/register';
export const RESET_PASSWORD_API = '/users/user/reset-password'; // userId
export const DELETE_ACCOUNT_API = '/users/user/delete-account'; // userId
export const VERIFY_EMAIL_API = '/users/verify-email-address'; // userId

// Contact forms API
export const SUBMIT_CONTACT_FORM_API = '/contact/create-new-contact-form';
export const GET_ALL_CONTACT_FROMS_API = '/contact/get-all-contact-forms';
export const DELETE_CONTACT_FORM_API = '/contact/delete-contact-form';
export const DELETE_ALL_CONTACT_FORM_API = '/contact/delete-all-contact-forms';

// Callback forms API
export const SUBMIT_CALLBACK_FORM_API = '/contact/create-new-callback-form';
export const GET_ALL_CALLBACK_FROMS_API = '/contact/get-all-callback-forms';
export const DELETE_CALLBACK_FORM_API = '/contact/delete-callback-form';
export const DELETE_ALL_CALLBACK_FORM_API =
  '/contact/delete-all-callback-forms';

// Review API routes
export const GET_REVIEWS_API = '/reviews/get-all-reviews';
export const CREATE_NEW_REVIEW_API = '/reviews/create-new-review';
export const DELETE_REVIEW_API = '/reviews/delete-review'; // /:reviewId

// Newsletter API routes
export const SUBSCRIBE_TO_NEWSLETTER_API =
  '/newsletter/subscribe-to-newsletter';
export const GET_ALL_NEWSLETTER_SUBSCRIBERS_API =
  '/newsletter/get-subscriber-list';
export const DELETE_SUBSCRIBER_BY_ID_API =
  '/newsletter/delete-subscriber-by-id';
export const DELETE_SUBSCRIBER_BY_EMAIL_API =
  '/newsletter/delete-subscriber-by-email';
export const DELETE_ALL_SUBSCRIBERS_API = '/newsletter/delete-all-subscribers';
export const CREATE_NEW_NEWSLETTER_API = '/newsletter/create-new';
export const SAVE_NEWSLETTER_API = '/newsletter/save-draft';
export const PUBLISH_NEWSLETTER_API = '/newsletter/publish';

// Blog API routes
export const GET_BLOG_POSTS_API = '/blog/get-all-blog-posts';
export const GET_BLOG_POST_BY_TITLE_API = '/blog/get-all-blog-posts';

// Booking routes
export const GET_BOOKING_DATA_API = '/bookings/get-booking-data';
export const GET_BOOKING_ADMIN_API = '/bookings/get-all-bookings-admin';
export const CREATE_NEW_BOOKING_API = '/bookings/create-new-booking';
export const CONFIRM_BOOKING_API = '/bookings/confirm-booking';
export const SET_BOOKING_DAY_CLOSED_API = '/bookings/set-day-closed';
export const SET_BOOKING_DAY_OPEN_API = '/bookings/remove-day-closed';
export const EDIT_OPENING_TIMES_API = '/bookings/edit-opening-times';
export const DENY_BOOKING_API = '/bookings/deny-booking';
export const CANCEL_BOOKING_API = '/bookings/cancel-booking';
export const EDIT_BOOKING_API = '/bookings/edit-booking';
export const DELETE_BOOKING_API = '/bookings/delete-booking';
export const DELETE_ALL_BOOKING_API = '/bookings/delete-all-bookings';
