import React from "react"

import Header from "./Header"
import Hero from "./Hero"
import Card from "./Card"

function App() {
    return (
        <>
            <header>
                <Header />
                <Hero />
            </header>
            <main>
                <Card />
            </main>
        </>       
    )
}

export default App