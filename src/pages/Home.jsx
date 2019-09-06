import React, { Component } from 'react'
import { Header } from '../components/Header';
import { Movies } from '../components/Movie';
import { Characters } from '../components/Character';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Movies />
                    <Characters />
                </main>
            </>
        )
    }
}