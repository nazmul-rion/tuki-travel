import './Navigationbar.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useHistory, NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import logo from '../../images/favicon.ico'

const Navigationbar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth();

    return (
        <>
            <Navbar className="bg-custom" expand="lg">
                <Container fluid>
                    <Navbar.Brand >
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <NavLink className="text-decoration-none text-highlighted" exact to="/"><b>Travel Mania</b></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink
                                activeClassName="navbarlink--active"
                                className="text-decoration-none text-dark mx-3 my-3 my-md-0"
                                to="/home" activeStyle>Home</NavLink>
                            <NavLink activeClassName="navbarlink--active" className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/myorders">My Orders</NavLink>

                            <NavLink activeClassName="navbarlink--active" className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/manageallorders">Manage All Orders</NavLink>
                            <NavLink activeClassName="navbarlink--active" className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/addnewPackage">Add New Package</NavLink>
                        </Nav>
                        {user.displayName ? (
                            <>
                                <Navbar.Text>
                                    <img className="rounded rounded-circle" height="40" width="40" src={user.photoURL} alt="N/A" />
                                    <b className="mx-3">{user.displayName}</b>
                                    <Button variant="danger" onClick={signOutUser}>Sign Out <i className="fas fa-sign-out-alt"></i></Button>{' '}
                                </Navbar.Text>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    <div className="d-flex">
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signin')}>Sign In</Button>{' '}
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signup')}>Sign Up</Button>{' '}
                                    </div>
                                </Navbar.Text>
                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar
