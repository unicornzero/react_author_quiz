/** @jsx React.DOM */
(function () {
  'use strict';

  var Quiz = React.createClass({
    propTypes: {
      books: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
      return {
        author: this.props.data[0],
        books: this.props.data[0].books
      };
    },
    render: function () {
      return <div>
          <div className="row">
            <div className="col-md-4">
              <img src={this.state.author.imageUrl} className="authorimage col-md-3" />
            </div>
            <div className="col-md-7">
              {this.state.books.map(function (b) {
                return <Book title={b} />;
              }, this)}
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
    }
  });

  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function () {
      return <div><h4>{this.props.title}</h4></div>;
    }
  })

  var data = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      books: ['The Adventures of Huckleberry Finn']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sourcerers Stone', 'Harry Potter and the Chamber of Secrets']
    }
  ]

  React.render(<Quiz data={data} />, 
    document.getElementById('app'));

})();