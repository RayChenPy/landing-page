import React from 'react';
import { Link } from 'react-router-dom';
import Kobe from './components/images/Kobe.jpg'
import './components/Page.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
                <div className="sidebar">
                    <img src={Kobe} className='my-img' />
                    <h1>
                    <Link to='/#about' className='h1_links'>
                        WeiChieh Chen
                    </Link>
                    </h1>

                    <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
                    # huge_Kobe_Bryant_fan
                    </div>
                    <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
                    # tech_enthusiast
                    </div>
                    <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
                    # problem_solver
                    </div>

                    <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
                        <a 
                        href='mailto:raychencssw@gmail.com'
                        rel='opener noreferrer'
                        target='_blank'
                        className='fa fas fa-envelope fa-lg me-2'
                        >                   
                        </a>
                        raychencssw@gmail.com
                    </p>

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#education_experience">Education & Experience</Link>
                        </li>
                    </ul>
                    <div className='flip-card-back'>
                        <ul className='sidebar-nav'>
                            <li className='sidebar-nav-icons'>
                                <a
                                    href='https://github.com/raychencssw'
                                    rel='opener noreferrer'
                                    target='_blank'
                                    className='fa fas fa-github fa-lg'
                                ></a>
                            </li>
                            <li className='sidebar-nav-icons'>
                                <a
                                    href='https://www.linkedin.com/in/ray-chen-cs/'
                                    rel='opener noreferrer'
                                    target='_blank'
                                    className='fa fas fa-linkedin fa-lg'
                                ></a>
                            </li>
                            <li className='sidebar-nav-icons'>
                                <a
                                    href='mailto:raychencssw@gmail.com'
                                    rel='opener noreferrer'
                                    target='_blank'
                                    className='fa fas fa-envelope fa-lg'
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;