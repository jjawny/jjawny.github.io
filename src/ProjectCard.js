import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink } from 'reactstrap';

import './ProjectCard.css'

function ProjectCard(props) {

    return (
        <Card className="shadow-lg" style={{ width: '30vw' }}>
            <img alt="Card" src={props.banner} />
            <CardBody>
                <CardTitle tag="h5">
                {props.title}
                </CardTitle>
                <CardText>
                {props.desc}
                </CardText>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>
                Badges here
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
}

export default ProjectCard;