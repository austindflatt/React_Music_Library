import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

class SongForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            album: '',
            artist: '',
            release_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newSong = {
            id: this.state.id,
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist
        }
        this.props.addSong(newSong);
        this.setState({
            id: '',
            title: '',
            album: '',
            artist: '',
            release_date: ''
        });
    }
    render() {
        return (
        <Segment inverted>
            <Form inverted onSubmit={this.handleSubmit}>
            <Form.Field>
                    <label>ID</label>
                    <input type="text" name="id" value={this.state.id}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Artist</label>
                    <input type="text" name="artist" value={this.state.artist}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Album</label>
                    <input type="text" name="album" value={this.state.album}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Release Date</label>
                    <input type="text" name="release_date" value={this.state.release_date}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Genre</label>
                    <input type="text" name="genre" value={this.state.genre}
                        onChange={this.handleChange}/>
                </Form.Field>
                <Button positive type='submit'>Add Song</Button>
            </Form>
        </Segment>
        );
    }
}

export default SongForm;