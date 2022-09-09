import Nav from './Nav';
import BottomBar from './BottomBar';

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <section>{ children }</section>
            <BottomBar />
        </>
    )
}