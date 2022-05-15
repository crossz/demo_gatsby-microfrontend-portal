import React from 'react';
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import One from '../../components/One'

const Home = () => <p> Home</p>

const Dashboard = () => <div>
    <h1>Dashboard</h1>
    <nav>
        <Link to="/"> Root </Link>
        <Link to="/app/dashboard"> Dashboard </Link>
        {/* <Link to="one"> Page One </Link> */}
        <Link to="/app/dashboard/one"> Page One </Link>
    </nav>
    <Router>
        <Home path="/app/dashboard" />
        <One path="/app/dashboard/one" />
    </Router>
    </div>;


export default Dashboard;
