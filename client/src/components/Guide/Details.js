import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';

class Details extends React.Component {

    render() {
        const { selectedArea, walls, toggleUpdate } = this.props;
    
        if(selectedArea == null) {
            return <Header as='h1' textAlign='center'>Welcome to the San Rafael Swell Guide</Header>
        } else {
            return (
                <Container>
                    <List>
                        <List.Item>
                            <Header as='h1' textAlign='center'>Area Name: {selectedArea.name}</Header>
                        </List.Item>
                        <List.Item>
                            {selectedArea.description}
                        </List.Item>
                        <List.Item>
                            <Button secondary onClick={() => toggleUpdate()}>Update</Button>
                        </List.Item>
                        <List.Item>
                            <Header as='h3' textAlign='center'>Walls in {selectedArea.name}:</Header>
                            {walls.map( wall => 
                                 <List.Item key={wall.id}>
                                     {wall.name}
                                </List.Item>
                            )}
                        </List.Item>
                    </List>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return { 
        selectedArea: state.selectedArea,
        walls: state.walls, 
    };
  };


export default connect(mapStateToProps)(Details);