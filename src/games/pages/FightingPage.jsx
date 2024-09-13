import React from 'react'
import { GameList } from '../components/GameList'

export const FightingPage = () => {
    return (
        <>
            <h1>Duels of Legend</h1>
            <hr />
            <GameList type='fighting' />
        </>
    )
}