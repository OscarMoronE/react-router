import React from 'react'
import { GameList } from '../components/GameList'

export const RpgPage = () => {
    return (
        <>
            <h1>Heroic Destinies</h1>
            <hr />
            <GameList type='rpg' />
        </>
    )
}