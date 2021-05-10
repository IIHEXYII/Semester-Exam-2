import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineHome } from "react-icons/ai";

export default function Footer() {

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return (
        <>
               <footer class="footer">
                <div class="footer__right">

                    <a href="https://hexyweb.com/" target="_blank"><AiOutlineHome /></a>
                    <a href="https://twitter.com/IIHEXYII" target="_blank" ><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/vetle-tessem-6039b1203/" target="_blank"><AiFillLinkedin /></a>
                    <a href="https://github.com/IIHEXYII" target="_blank"><AiOutlineGithub /></a>

                </div>

                <div class="footer__left">
                    
                    <p class="footer__links">
                        <button onClick={topFunction} class="btn__backTop"title="Go to top">Back to top</button>
                    </p>
                    <p className="footer__center">This is my exam project for my year 2</p>
                    <p className="footer__center"><a class="meme" target="_blank" href="https://i.redd.it/riarvfbhtjs61.jpg">It ain't much but it's honest work.</a></p>

                    <p className="footer__center cc">Holidaze @Noroff &copy; 2021</p>
                </div>

                </footer>
            </>
    )
}
