import $ from 'jquery';
import getPosts from './read-nav';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/TextPressPosts';

function renderPost () {
  $('container').empty();
  getPosts();
  $.ajax(apiURL + '/' + location.hash.slice(6))
  .then(function(response) {
    console.log(response);
    let $individualPost = $(`
      <article class="individual-post">
        <h2>${response.title}</h2>
        <ul class="post-meta-data">
          <li>${response.author}</li>
          <li>${response.timestamp}</li>
          <li>Like</li>
        </ul>
        <div class="post-content">
          <span>${response.body}</span>
        </div>
      </article>
      `);
      $('.container').append($individualPost);
  });
}

export default renderPost;
