import React, { Component } from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // desconstruct withRouter here when doing updates and deletes
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { selectArea } from '../../actions/areas';

class WallList extends Component {
  state={ walls: [] };

  componentDidMount() {
    const { dispatch, area_id } = this.props;
    axios.get(`/api/areas/${area_id}`)
    .then( res => {
      this.setState({ walls: res.data.walls});
      dispatch(selectArea(res.data.area));
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get walls', 'red'));
    })
  }


  render() {
    const { walls } = this.state;

    if ( walls.length === 0) {
      return <Header as='h1' textAlign='center'>Loading...</Header>
    } else {
      return (
        <Container>
          {/* <Button onClick={() => this.toggleCreate()}>Create Area</Button> */}
          <Header as='h1' textAlign='center'>Wall List</Header>
          <List>
            { walls.map( wall => {
              return (
                <List.Item key={wall.id}>
                  <Link to={`/wall/${wall.id}`}> {wall.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

export default connect()(WallList);