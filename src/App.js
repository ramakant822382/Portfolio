
import './App.css';
import Footer from './Footer/Footer';



function App() {
  return (
    <div className="App">
   <header>
        <div class="container">
            <nav class="flex items-center justify-between">
                <div class="left flex items-center">
                    <div class="branding">
                        <img src="/img/rk.jpg.png" alt=""/>
                    </div>
                    <div>
                        
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Pages</a>
                        <a href="#">Blog</a>
                    </div>
                </div>
                <div class="right ">
                    <button class="btn btn-primary">Contact</button>

                </div>

            </nav>
            <div class="hero flex items-center justify-between ">


                <div class="left flex-1 flex justify-center"> <img src="/img/hero.jpg" alt=""/> </div>

                <div class="picture flex-1">
                    <h6>Ramakant sharma</h6>
                    <h1>i'am <span>Developer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam cum vero accusamus quo
                        nisi ipsum dolores esse, enim laborum nesciunt aperiam omnis, error voluptatem expedita
                        inventore laboriosam repudiandae et!</p>

                    <div>
                        <button class="btn btn-secondary">DOWNLOAD CV</button>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <section class="about">
        <div class="container flex items-center">
            <div class="flex-1">
                <img class="about-me-img" src="/img/hero-2.jpg" alt=""/>
            </div>
            <div class="flex-1">
                <h1>About <span>Me</span></h1>
                <h3>Hello i'am Ramakant</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias tenetur sint, sequi
                    reiciendis et facilis deleniti beatae, quibusdam ab impedit, quisquam repellendus incidunt voluptas?
                    Ipsum quasi temporibus exercitationem labore.</p>
                <div class="social">
                    <a href="#"><img src="/img/facebook.jpg" alt=""/></a>
                    <a href="#"><img src="/img/linkdin.png" alt=""/></a>
                    <a href="#"><img src="/img/insta.png" alt=""/></a>
                    <a href="#"><img src="/img/whatsapp.jpg" alt=""/></a>
                </div>
            </div>
        </div>

    </section>

    <section class="services">

        <div class="container">
            <h1 class="section-heading"> <span>Our</span>Services</h1>
            <p>We are provide various services</p>
            <div class="card-wrapper">
                <div class="card">
                    <img src="" alt=""/>
                    <h2>Python Developer</h2>
                    <p>Lrit culpa dolorem. Dolor, repellat  nulla quae adipisci voluptatum laborum voluptate .</p>
                </div>
                
                <div class="card">
                    <img src="" alt=""/>
                    <h2>Graphic Desiner</h2>
                    <p>Lrit culpa dolorem. Dolor, repellat corrupti nulla quae adipisci voluptatum laborum voluptate .</p>
                </div>
                <div class="card">
                    <img src="" alt=""/>
                    <h2>Web Design</h2>
                    <p>Lrit culpa dolorem. Dolor, repellat corrupti nulla quae adipisci voluptatum laborum voluptate .</p>
                </div>
                <div class="card">
                    <img src="" alt=""/>
                    <h2>Softwere Testing</h2>
                    <p>Lrit culpa dolorem. Dolor, repellat corrupti nulla quae adipisci voluptatum laborum voluptate .</p>
                </div>
                <div class="card">
                    <img src="" alt=""/>
                    <h2>Django Developer</h2>
                    <p>Lrit culpa dolorem. Dolor, repellat corrupti nulla quae adipisci voluptatum laborum voluptate .</p>
                </div>
                
            </div>
            
        </div>
    </section>

    <section class="freelancer">
        <h1>I am Available for freelancer</h1>
        <p>We provide high standar clean Website for your business solutions</p>
        <button class="btn btn-primary">Download CV</button>

    </section>
    <br></br>
    <br></br>
  <Footer/>
  
    </div>
  );
}

export default App;
