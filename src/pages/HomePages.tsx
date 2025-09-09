import {Link} from 'react-router'

const HomePage = () => {
    return (
        <div>
            <h1>ini home</h1>
            <p>setuju syarat ini</p>
            <Link to={"/terms"}>
            Menuju halama terms
            </Link>
        </div>
    )
}

export default HomePage;