import React from 'react';

const GastronomicGemsPage = () => {
    return (
        <>
            <style>
                {`
                    body, html {
                        height: 100%;
                        margin: 0;
                    }
                    body {
                        background-size: cover;
                        background-position: center;
                        background-attachment: fixed;
                        display: flex;
                        flex-direction: column;
                    }
                    .main {
                        flex-grow: 1;
                        color: chocolate;
                        padding-top: 5rem; /* Adjust top padding as needed */
                    }
                    .navbar {
                        background-color: #f8c291;
                    }
                    .footer {
                        background-color: #f9e79f;
                        width: 100%;
                    }
                    .btn-submit {
                        background-color: #f8c291;
                        border: none;
                        color: white;
                    }
                    .btn-submit:hover {
                        background-color: #c47f65; /* Adjusted for standard CSS */
                        color: white;
                    }
                    .img-fluid {
                        max-width: 100%;
                        height: auto;
                    }
                `}
            </style>
            <main className="main">
                <div className="container mt-5">
                    <h2 className="text-center mb-4">Beauty of Simplicity</h2>
                    <p className="lead text-center">Embark on a visual journey...</p>

                    <div className="row">
                        {/* Image gallery sections */}
                        <div className="col-md-4 mb-4">
                            <img src="pictures/1.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/2.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/3.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/4.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/5.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/6.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/7.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/8.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/9.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/10.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/11.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/12.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/13.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/14.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/15.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/16.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/18.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img src="pictures/19.jpg" alt="Image 1" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default GastronomicGemsPage;
