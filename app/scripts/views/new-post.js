import $ from 'jquery';
import router from '../router';
import Post from '../models/post';


function postForm() {
  let $newPost = $(`
    <div class="new-post-form">
      <h2>Create a New Post</h2>
      <form>
        <input type="text" name="title" class="new-post-title" placeholder="Title">
        <textarea name="body" placeholder="And begin!"></textarea>
        <input type="submit" name="submit" value="submit">
      </form>
    </div>
  `);

  $newPost.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    var post = new Post({
      author: 'username',
      title: $('.new-post-title').val(),
      body: $('textarea').val()
    });
    post.save(null, {
      success: function(response) {
        console.log(response);
        router.navigate('read', {trigger: true});
      },
      error: function() {}
    });
  });

  return $newPost;
}
export default postForm;
