import $ from 'jquery';
import User from '../models/user';
import Backbone from 'backbone';
import router from '../router';

const apiURLUsers = 'https://tiny-za-server.herokuapp.com/collections/TextPressUsers';

function renderLogin() {
  let $login = $(`
    <div class="login">
      <form class="login-form">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username"/>
        <input type="submit" name="submit" value="submit">
      </form>
      <a href="#register">Aren't a member? Sign up here!</a>
    </div>
  `);
  $('.container').empty();
  $('.container').append($login);
  $login.find('input[type="submit"]').on('click', function (evt) {
    evt.preventDefault();
    $.ajax(apiURLUsers).then(function(response){
      response.forEach(function(member) {
        if (member.username === $login.find('input[type="text"]').val()) {
          sessionStorage.id = member._id;
          router.navigate('read', {trigger: true});
        } else {
          $login.find('input[type="text"]').addClass('error');
        }
      });
    });
  });
}

export default renderLogin;
