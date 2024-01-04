import React from 'react';

const AboutUsPage = () => {
    const mainStyle = {
        paddingTop: '6rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        flex: 1,
        color: 'chocolate',
        minHeight: '100vh',
    };

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
                        border: none; /* Remove default border */
                        color: white; /* White text color */
                    }
                    .btn-submit:hover {
                        background-color: darken(#f8c291, 10%);
                        color: white;
                    }
                `}
            </style>
        <br></br>
        <main className="flex-grow-1">
            <div className="container mt-5">
                <h2 className="text-center mb-4">Welcome to Little Village</h2>
                <p className="lead text-center">A place that transcends the ordinary and invites you on a unique journey where commerce meets community, and every visit is a social adventure. Nestled in the heart of our vibrant neighborhood, Little Village is more than just a market—it's a social journey that celebrates the essence of community, culture, and culinary delight.</p>

                <section className="mb-4">
                    <h3 className="mt-4">Our Story</h3>
                    <p>Little Village is inspired by the spirit of bustling markets and the warmth of tight-knit communities. We've curated a haven where commerce and camaraderie coalesce, creating an environment that goes beyond traditional markets. Our roots are firmly planted in the belief that every interaction, every bite, and every discovery should be a social experience.</p>
                </section>

                <section className="mb-4">
                    <h3 className="mt-4">The Marketplace</h3>
                    <p>Explore a marketplace that goes beyond the ordinary. Our stalls are adorned with the finest cuts of meat, gourmet delicacies, and handpicked treasures that reflect the diverse tapestry of our community. From artisanal goods to delectable treats, each item tells a story and adds a unique flavor to our collective journey.</p>
                </section>

                <section className="mb-4">
                    <h3 className="mt-4">Culinary Delights</h3>
                    <p>At Little Village, we take pride in offering an array of culinary delights. From authentic local flavors to international inspirations, our eateries and cafes are a testament to our commitment to creating a diverse culinary experience. Savor the flavors, linger over conversations, and make each meal a social celebration.</p>
                </section>

                <section className="mb-4">
                    <h3 className="mt-4">Community Hub</h3>
                    <p>We believe in fostering connections and creating a sense of belonging. Little Village is more than just a destination; it's a community hub where neighbors become friends, and every gathering is an opportunity to share stories and create lasting memories.</p>
                </section>

                <section className="mb-4">
                    <h3 className="mt-4">Join Us</h3>
                    <p className="lead text-center mt-4">Join us at Little Village—a place where commerce, culture, and community converge to redefine the way we experience markets. It's not just a market, it's a social journey, and we invite you to be a part of it.</p>
                </section>
            </div>
        </main>
        </>
    );
};

export default AboutUsPage;

