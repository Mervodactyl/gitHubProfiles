$(document).ready(function(){
  $('#add-profile').on('submit', function(e){
    e.preventDefault();
    var url = 'https://api.github.com/users/' + $('#username').val() + '?access_token=73cb7811fcc34c769d0585da0f8f50d8bb0f61bc';

    var userData = $.get(url, function(user) {
      var template = $('#profile-template').html();
      $('.profile-container').append(Mustache.render(template, user));


      // $('<article class="profile"><section class="pic"><img src="' + user.avatar_url + '"></section><section class="statistics"><h3><a href="https://github.com/' + user.login + '">' + user.login + '</a></h3><strong>Repos: ' + user.public_repos + '</strong><strong>Followers: ' + user.followers + '</strong></section><br clear="all"></article>').appendTo('.profile-container');

    }).fail(function(){
      alert('Could not find this user.');
    }).always(function() {
      $('#username').val('');
    })
  })
})