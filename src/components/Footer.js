import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineHome } from "react-icons/ai";

export default function Footer() {

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return (
        <>
               <footer className="footer">
                <div className="footer__right">

                    <a href="https://hexyweb.com/"><AiOutlineHome /></a>
                    <a href="https://twitter.com/IIHEXYII"><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/vetle-tessem-6039b1203/"><AiFillLinkedin /></a>
                    <a href="https://github.com/IIHEXYII"><AiOutlineGithub /></a>

                </div>

                <div className="footer__left">
                    
                    <p className="footer__links">
                        <button onClick={topFunction} className="btn__backTop"title="Go to top">Back to top</button>
                    </p>
                    <p className="footer__center">This is my exam project for my year 2</p>
                    <p className="footer__center"><a className="meme" href="https://i.redd.it/riarvfbhtjs61.jpg">It ain't much but it's honest work.</a></p>

                    <p className="footer__center cc">Holidaze @Noroff &copy; 2021</p>
                </div>

                </footer>
            </>
    )
}
