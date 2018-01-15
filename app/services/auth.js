import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  // checks if the users credientals are present
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signUp (credentials) {
    // making the ajax request to /sign-up
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
        },
      },
    });
  },

  signIn (credentials) {
    // making the ajax request to /sign-in
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
        },
      },
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword (passwords) {
    // making the ajax request to /change-password
    return this.get('ajax').patch(`/change-password`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        },
      },
    });
  },

  signOut () {
    // making the ajax request to /sign-out
    return this.get('ajax').del(`/sign-out`)
    .finally(() => this.get('credentials').reset());
  },
});
