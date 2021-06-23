import React from 'react';
import './musicTable.css';
import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const MusicTable = (props) => {
    return (
        <Table inverted>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
        {props.songs.map((song, info) => { 
        return (
            <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td><Button color='yellow' onClick={() => {props.update(song.id)}}>Update</Button>
                <Button negative onClick={() => {props.delete(song.id)}}>Delete</Button></td>
            </tr>
        )}
    )}
            </tbody>
        </Table>
        
    )
}

export default MusicTable;