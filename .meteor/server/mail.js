/**
 * Created by Mishkanader on 10/8/2015.
 */

Meteor.startup(function () {
  smtp = {
    username: 'dan@danyll.com',
    password: 'y3Z8TQxpxCiYsJJsCwyV0A',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});