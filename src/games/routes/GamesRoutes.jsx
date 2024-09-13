import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/components/NavBar"
import { ActionPage, AdventurePage, FightingPage, RpgPage, SportsPage } from "../pages"
import { Gamepage } from "../pages/Gamepage"
import { SearchPage } from "../pages/SearchPage"

export const GamesRoutes = () => {

    return (
        <>
            <NavBar />

            <div className="container">

                <Routes>
                    <Route path="action" element={<ActionPage />} />
                    <Route path="adventure" element={<AdventurePage />} />
                    <Route path="fighting" element={<FightingPage />} />
                    <Route path="rpg" element={<RpgPage />} />
                    <Route path="sport" element={<SportsPage />} />

                    <Route path="search" element={<SearchPage />} />

                    <Route path="game/:id" element={<Gamepage />} />

                    <Route path="/*" element={<Navigate to="/action" />} />
                </Routes>
            </div>
        </>
    )
}
