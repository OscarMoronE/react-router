import React from 'react'
import { GameList } from '../components/GameList'

export const AdventurePage = () => {
    return (
        <>
            <h1>Worlds to Discover</h1>
            <hr />
            <GameList type='adventure' />
        </>
    )
}
