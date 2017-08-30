import React, { PropTypes } from 'react';
import moment from 'moment';
import { DateInput } from '@blueprintjs/datetime';

import '@blueprintjs/datetime/dist/blueprint-datetime.css';

class DateField extends React.Component {
  constructor(props) {
    super(props);
    const initialValue = props.value;
    this.state = { value: initialValue };
  }

  render() {
    return (<div className="DateField">
      <DateInput
        format="MMMM Do, YYYY"
        value={this.state.value}
        onChange={value => this.setState({ value })}
        name={this.props.name}
        minDate={(new Date(moment().subtract(90, 'years').format()))}
        maxDate={(new Date(moment().add(2, 'years').format()))}
      />
    </div>);
  }
}

DateField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default DateField;
