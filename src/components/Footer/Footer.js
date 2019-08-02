import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div id="Footer" className="Footer">
            <div className="footer--information">
                <div className="footer--information__title">
                    <span id="movie-bonanza">Movie Bonanza</span>
                    <span>Home</span>
                    <span>Discover</span>
                    <span>Our Movies</span>
                </div>
                <div className="footer--information__placeholder">
                    <div className="footer--information__left">
                        <div>Porfolio:</div>
                        <div>Phone Number:</div>
                    </div>
                    <div className="footer--information__right">
                        <div><a href="www.alexandergovea.com" target="_blank" style={{textDecoration: 'none'}}>www.alexandergovea.com</a></div>
                        <div>222-222-2222</div>
                    </div>
                </div>
                <div className="footer--information__allrights">
                    <span>
                    © 2019 Alexander Govea. All rights reserved. 
                    </span>
                    <br/>
                    <span>
                    Designed and built using data provided by TMDb.
                    </span>
                </div>
            </div>
            <div className="footer--social">
                <div className="footer--social__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 407.34 160.81"><defs><style></style></defs><title>PoweredByRectangle_Blue</title><polygon class="cls-1" points="50.38 102.47 57.32 102.47 57.32 74.71 65.96 74.71 65.96 67.82 41.74 67.82 41.74 74.71 50.38 74.71 50.38 102.47"/><polygon class="cls-1" points="88.53 102.47 95.47 102.47 95.47 67.77 88.53 67.77 88.53 81.65 78.14 81.65 78.14 67.77 71.2 67.77 71.2 102.47 78.14 102.47 78.14 88.59 88.53 88.59 88.53 102.47"/><polygon class="cls-1" points="121.25 95.53 108.23 95.53 108.23 88.59 119.35 88.59 119.35 81.65 108.23 81.65 108.23 74.71 120.66 74.71 120.66 67.77 101.28 67.77 101.28 102.47 121.25 102.47 121.25 95.53"/><polygon class="cls-1" points="157.79 82.54 144.1 67.3 141.87 67.3 141.87 102.54 148.9 102.54 148.9 83.17 157.79 92.49 166.67 83.17 166.62 102.54 173.66 102.54 173.66 67.3 171.47 67.3 157.79 82.54"/><path class="cls-1" d="M3309.1,1841.93c-23.88,0-23.88,35.77,0,35.77S3333,1841.93,3309.1,1841.93Zm0,28.59c-13.88,0-13.88-21.45,0-21.45S3323,1870.52,3309.1,1870.52Z" transform="translate(-3111.93 -1774.68)"/><rect class="cls-1" x="254.5" y="67.83" width="6.94" height="34.7"/><polygon class="cls-1" points="274.19 95.6 274.19 88.66 285.32 88.66 285.32 81.72 274.19 81.72 274.19 74.78 286.63 74.78 286.63 67.83 267.25 67.83 267.25 102.54 287.21 102.54 287.21 95.6 274.19 95.6"/><path class="cls-1" d="M3429.48,1842.91h-10.34v34.7h10.34C3452.58,1877.61,3452.58,1842.91,3429.48,1842.91Zm0,27.76h-3.4v-20.82h3.4C3443,1849.85,3443,1870.67,3429.48,1870.67Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3472.7,1860.23c2.18-1.5,3.11-4.22,3.2-6.84,0.15-6.12-3.69-10.53-9.85-10.53h-13.74v34.75H3466a10.32,10.32,0,0,0,10.24-10.44A8.43,8.43,0,0,0,3472.7,1860.23Zm-13.4-10.44h6.17a3.51,3.51,0,0,1,0,7h-6.17v-7Zm6.17,20.87h-6.17v-6.94h6.17a3.41,3.41,0,0,1,3.49,3.45A3.45,3.45,0,0,1,3465.47,1870.67Z" transform="translate(-3111.93 -1774.68)"/><polygon class="cls-1" points="233.13 86.57 224 67.83 215.99 67.83 232.36 103.27 233.91 103.27 250.28 67.83 242.27 67.83 233.13 86.57"/><path class="cls-1" d="M3494.78,1920.93c14.6,0,24.48-9.88,24.48-24.48v-97.28c0-14.6-9.88-24.48-24.48-24.48H3136.41c-14.6,0-24.48,9.88-24.48,24.48V1935.5l12.56-14.56h0V1799.17a11.94,11.94,0,0,1,11.92-11.92h358.37a11.94,11.94,0,0,1,11.92,11.92v97.28a11.94,11.94,0,0,1-11.92,11.92H3155l-12.56,12.56-0.08-.1Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3154.3,1827.53v-15h5.9c5.84,0,5.82,9.26,0,9.26h-2.9v5.73h-3Zm5.65-8.65c2,0,2-3.36,0-3.36h-2.65v3.36h2.65Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3176.07,1812.27c10.33,0,10.33,15.47,0,15.47S3165.74,1812.27,3176.07,1812.27Zm0,3.09c-6,0-6,9.28,0,9.28S3182.08,1815.35,3176.07,1815.35Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3193.12,1827.85l-6.15-15.33h3.38l3,7.66,2.94-7.52h0.15l2.94,7.52,3-7.66h3.38l-6.13,15.26h-0.55l-2.75-6.66-2.73,6.72h-0.52Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3209.53,1827.53v-15H3217v3h-4.51v3h3.95v3h-3.95v3h4.77v3h-7.77Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3229.47,1827.53l-3-5.73H3225v5.73h-3v-15h5.92c5.35,0,5.88,7.54,1.47,8.82l3.49,6.19h-3.4Zm-4.47-8.65h2.65c2,0,2-3.36,0-3.36H3225v3.36Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3236.76,1827.53v-15h7.52v3h-4.51v3h3.95v3h-3.95v3h4.77v3h-7.77Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3253.71,1827.53h-4.47v-15h4.47C3263.7,1812.52,3263.7,1827.53,3253.71,1827.53Zm-1.47-12v9h1.47c5.84,0,5.84-9,0-9h-1.47Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3291.89,1820.77l-5.23-8.25h3.65l3.07,5.17,3.07-5.17h3.67l-5.25,8.25v6.76h-3v-6.76Z" transform="translate(-3111.93 -1774.68)"/><path class="cls-1" d="M3282.58,1820.18a3.68,3.68,0,0,0,1.39-3,4.13,4.13,0,0,0-4.26-4.56h-5.94v15h5.94a4.46,4.46,0,0,0,4.43-4.51A3.65,3.65,0,0,0,3282.58,1820.18Zm-5.79-4.51h2.67a1.52,1.52,0,0,1,0,3h-2.67v-3Zm2.67,9h-2.67v-3h2.67a1.47,1.47,0,0,1,1.51,1.49A1.49,1.49,0,0,1,3279.45,1824.7Z" transform="translate(-3111.93 -1774.68)"/></svg>
                </div>
                <div className="footer--social__media">
                    <a href="https://www.linkedin.com/in/alexander-govea-735774107/" target="_blank"><span className="footer--social__circle"><svg className="footer--social footer--social__circle"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg></span></a>
                    <a href="https://www.linkedin.com/in/alexander-govea-735774107/" target="_blank"><span className="footer--social__circle"><svg className="footer--social footer--social__circle"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  ><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg></span></a>
                    <a href="https://github.com/AlexanderAlatorreGovea/MovieTheaterProject" target="_blank" style={{textDecoration: 'none'}}><span className="footer--social__circle"><svg className="footer--social footer--social__circle"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"></path></svg></span></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;