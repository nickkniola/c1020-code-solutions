import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAccordionId: null
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(event) {
    const prevAccordionId = this.state.openAccordionId;
    const element = this.props.arrayOfData.filter(obj => {
      return event.target.textContent === obj.header;
    });

    if (prevAccordionId === element[0].id) {
      this.setState({ openAccordionId: null });
    } else {
      this.setState({ openAccordionId: element[0].id });
    }
  }

  render() {
    const arrayOfData = this.props.arrayOfData;
    const id = this.state.openAccordionId;
    return (
      <div className="accordion">
        {arrayOfData.map(obj => {
          if (id === obj.id) {
            return <Topic key={obj.id} header={obj.header} bodyName="body" body={obj.body} handleClick={this.toggleAccordion} />;
          } else {
            return <Topic key={obj.id} header={obj.header} bodyName="body closed" handleClick={this.toggleAccordion} />;
          }
        }
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
        <div className={this.props.bodyName}>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
