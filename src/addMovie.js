import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle} className="my-card">+</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} className="title">Add new movie</ModalHeader>
                    <ModalBody>
                        <form className="form-group">
                            <input type="text" name="title" placeholder="title" className="form-control input" onChange={this.onChange} />
                            <input type="text" name="poster" placeholder="poster" className="form-control input" onChange={this.onChange} />
                            <input type="text" name="plot" placeholder="plot" className="form-control input" onChange={this.onChange} />
                            <input type="text" name="imdbRating" placeholder="imdbRating" className="form-control input" onChange={this.onChange} />

                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                         onClick={() => this.props.movie
                            ({ ...this.state })}
                        >ADD</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalMovie;