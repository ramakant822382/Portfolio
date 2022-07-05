import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>

<footer>
        <div class="row">
            <div class="colam">
                <img src="/img/rk.jpg.png" class="logo"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicin</p>
            </div>
            <div class="colam">
                <h3>office</h3>
                <p>itpl road</p>
                <p>white field</p>
                <p>kalpa pin code 485447</p>
                <p class="emailid">ramakantsharma822382@gmail.com</p>
                <h4>+91-8223829102</h4>
            </div>
            <div class="colam">
                <h3>Link</h3>
                <ul>

                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">feature</a></li>
                    <li><a href="">about</a></li>

                </ul>





            </div>
            <div class="colam">
                <h3>neweslatter</h3>
                <form>
                    <input type="email" placeholder="enter your email id" required/>
                </form>

            </div>
        </div>


    </footer>
    </div>
  )
}

export default Footer