import React from 'react'
import { GameList } from '../components/GameList'

export const SportsPage = () => {
    return (
        <>
            <h1>Unlimited</h1>
            <hr />
            <GameList type='sports' />
        </>
    )
}