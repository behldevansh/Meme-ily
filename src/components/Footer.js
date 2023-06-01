import React from "react";
export default function Footer(){
    return(
        <footer className="footer" >
            <img 
                src="/images/foot1.png" 
                className="footer--image"
            />
            <p className="footer--title" >Created with 💖 </p>
            <p>@behldevansh</p>
            <a href="https://www.linkedin.com/in/devansh-behl-127756213/" target="_blank"><i class="social-icon fa-brands fa-linkedin "></i></a>
            <a href="https://github.com/behldevansh" target="_blank"><i class="social-icon fa-brands fa-github "></i></a>
            <img 
                src="/images/foot2.png" 
                className="footer--image"
            />

        </footer>
        
        
    )
}