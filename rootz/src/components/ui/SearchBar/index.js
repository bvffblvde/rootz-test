import React from 'react';
import Find from "../../img/FindMarker";
import {SearchBarWrapper} from "./styles";
import {Button} from "../Button";

type Props = {
  onSearchTermChange?: Function,
};

type State = {
  term: string,
};

class SearchBar extends React.Component<Props, State> {
    props: Props;
    state: State;

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
        <SearchBarWrapper>
          <Find/>
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
                placeholder="Find the place to help"
            />
          <Button variant="primaryOrange" onClick={() => this.props.onSearchTermChange(this.state.term)}>Search</Button>
        </SearchBarWrapper>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;