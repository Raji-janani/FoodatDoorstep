const About = ()=>{
    return (
            <div className="bg-gray-100 text-gray-800">
             <h1 className="text-3xl font-bold">ABOUT US</h1>
           
       
              <main className="container mx-auto p-6">
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                  <p className="mb-4">
                    Foodoor was born out of a love for food and a passion for bringing delicious meals to your doorstep. Our founders, seasoned food enthusiasts, recognized the need for a reliable and convenient food delivery service that connects people with the best local restaurants.
                  </p>
                  <p>
                    With Foodoor, you can explore a diverse range of cuisines, from classic comfort food to exotic delicacies, all from the comfort of your home. We aim to provide a seamless and delightful experience, making it easier for you to enjoy great food without the hassle of cooking or going out.
                  </p>
                </section>
        
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="mb-4">At Foodoor, our mission is to revolutionize the way you experience food. We are dedicated to:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Offering a wide variety of high-quality meals from trusted local restaurants.</li>
                    <li>Ensuring fast and reliable delivery service to your doorstep.</li>
                    <li>Providing exceptional customer service and support.</li>
                    <li>Fostering a community of food lovers who share our passion for great food.</li>
                  </ul>
                  <p>We believe that everyone deserves access to delicious meals, and we are committed to making that a reality.</p>
                </section>
        
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
                  <p>
                    Are you passionate about food and looking to make a difference? We're always on the lookout for talented individuals to join our team. Check out our <a href="#" className="text-green-500 underline">careers page</a> for current openings and become a part of the Foodoor family.
                  </p>
                </section>
              </main> 
        
              <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024 Foodoor. All rights reserved.</p>
              </footer>
            </div>
    )
};

export default About;