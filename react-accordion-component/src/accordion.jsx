import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAccordionId: 1
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(event) {
    // if it's not an integer
    if (!this.state.openAccordionId.isInteger()) {
      // console.log('not an integer');
    } else {
      // console.log.log(event.target);
    }
  }

  render() {
    const arrayOfData = [{
      id: 1,
      header: 'JavaScript',
      body: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
    },
    {
      id: 2,
      header: 'HTML',
      body: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
    },
    {
      id: 3,
      header: 'CSS',
      body: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]'
    }];

    return (
      <div className="accordion">
        {arrayOfData.map(obj =>
          <Topic key={obj.id} header={obj.header} body={obj.body} handleClick={this.toggleAccordion}/>
        )}
      </div>
    );
  }
}

class Topic extends React.Component {
  render() {
    return (
      <div className="topic">
        <div className="header" onClick={this.props.handleClick}>
          <h3>{this.props.header}</h3>
        </div>
        <div className="body">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
