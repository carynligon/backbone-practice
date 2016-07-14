import $ from 'jquery';
import Backbone from 'backbone';

function renderLikes () {
  let $addNewBtn = (`
    <form id="add-link">
      <input type="text" name="link" placeholder="Add a new post link" />
      <input type="submit" name="submit" value="add" />
    </form>
    `);
    $('.container').empty().append($addNewBtn);
}

export default renderLikes;
