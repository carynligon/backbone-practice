import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

import $ from 'jquery';
import router from '../router';
import Post from '../models/post';
import User from '../models/user';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  },
  render() {
    var {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

function postForm() {
  ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
  );

  $('.container').empty();
  let $newPost = $(`
    <div class="new-post-form">
      <button id="back-to-read"><a href="#read">back</a></button>
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
      author: sessionStorage.username,
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
