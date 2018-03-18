import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

class WallDetails extends React.Component {
    state={ wall: {} };

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;
       
        axios.get(`/api/walls/${id}`)
        .then( res => {
          this.setState({ wall: res.data.wall});
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get wall', 'red'));
        })

        
      }

      renderNavLinks = () => {
          const { area_id } = this.state.wall;

          return (
            <Container>
                <Link to='/guide'>San Rafael Swell - North > </Link>
                <Link to={`/area/${area_id}`}>
                    Go back to Area </Link>
            </Container>
          )
      }

      render() {
        const { wall } = this.state;

        if ( !wall ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                {this.renderNavLinks()}
                <Header as='h3'>Wall Name: {wall.name} </Header>
                <Header as='h3'>Wall Description: {wall.description} </Header>
            </Container>
        )
    }
}

export default withRouter(connect()(WallDetails));