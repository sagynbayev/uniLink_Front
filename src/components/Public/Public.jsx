import { Link } from "react-router-dom"

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>UniLink</h1>
            </header>
            <main>
                <div>
                    <h2>Welcome to the shit website where you will bored</h2>
                </div>
            </main>
            <footer>
                <Link to={'/login'}>If you're not bored go into this LINK</Link>
            </footer>
        </section>
    )
    return content
}

export default Public