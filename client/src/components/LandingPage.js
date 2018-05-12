
import React, { Component } from 'react';
import RightCarousel from './RightCarousel';
// import logo from '../assets/images/logo.svg';
// import githubLogo from '../assets/images/github_logo.svg';
// import pusherLogo from '../assets/images/pusher_logo.svg';
require('../styles/landing_page.css');

export default class LandingPage extends Component {


    render() {

        return(
            <div className="landing_page">
                <div className="left_container">
                    <header className="nav_container">
                        <h4 className="app_name">Livetable.</h4>
                    </header>
                    <div className="content">
                        <h1>Realtime&mdash;tables</h1>
                        <p>Create timetables and watch them update realtime with your friends/colleagues.</p>
                    </div>
                    <div className="box_container">
                        <div className="box_rooms">
                            <h3>Rooms</h3>
                        </div>
                    </div>
                    {/* Need a way to use inlineSVG to import all of svg content into the file 
                    and not just the reference. This way I could adjust the fill. */}
                    <div className="project_references_container">
                        <div className="project_references_inner">
                            {/* <img className="github_logo" src={githubLogo}/> */}
                            {/* <img src={pusherLogo}/> */}
                            <svg className="github_logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>github</title><g id="post_stamp" data-name="post stamp"><g id="border_stamp" data-name="border stamp"><path d="M420.78,512a26.73,26.73,0,0,0-48.69,0h-7.81a26.74,26.74,0,0,0-48.7,0H307.8a26.74,26.74,0,0,0-48.7,0H251.3a26.74,26.74,0,0,0-48.7,0h-7.79a26.74,26.74,0,0,0-48.7,0h-7.79a26.75,26.75,0,0,0-48.71,0H81.82a26.74,26.74,0,0,0-48.69,0H0V493a25.29,25.29,0,0,0,15-23.2,25.3,25.3,0,0,0-15-23.2v-6.94a25.28,25.28,0,0,0,15-23.2A25.27,25.27,0,0,0,0,393.29v-7a25.28,25.28,0,0,0,15-23.2A25.29,25.29,0,0,0,0,340v-7.6a25,25,0,0,0,15-22.81,25.08,25.08,0,0,0-15-23v-7.79a25,25,0,0,0,15-22.66A25.14,25.14,0,0,0,0,233.22v-7.79a25,25,0,0,0,15-22.81,25.08,25.08,0,0,0-15-23V172a25.29,25.29,0,0,0,15-23.19,25.28,25.28,0,0,0-15-23.2v-7A25.27,25.27,0,0,0,15,95.51,25.28,25.28,0,0,0,0,72.32V65.37a25.29,25.29,0,0,0,15-23.2A25.29,25.29,0,0,0,0,19V0H33.13A26.47,26.47,0,0,0,57.47,15.69,26.46,26.46,0,0,0,81.82,0h7.79A26.48,26.48,0,0,0,114,15.69,26.49,26.49,0,0,0,138.32,0h7.79a26.48,26.48,0,0,0,24.35,15.69A26.45,26.45,0,0,0,194.81,0h7.79A26.49,26.49,0,0,0,227,15.69,26.45,26.45,0,0,0,251.3,0h7.81a26.45,26.45,0,0,0,24.35,15.69A26.48,26.48,0,0,0,307.8,0h7.79a26.48,26.48,0,0,0,24.35,15.69A26.43,26.43,0,0,0,364.29,0h7.81a26.49,26.49,0,0,0,24.36,15.69A26.45,26.45,0,0,0,420.78,0h7.81a26.45,26.45,0,0,0,24.35,15.69A26.45,26.45,0,0,0,477.28,0H512V19a25.46,25.46,0,0,0,0,46.39v6.94a25.46,25.46,0,0,0,0,46.39v7A25.46,25.46,0,0,0,512,172v7.6a25,25,0,0,0,0,45.79v7.79a25.06,25.06,0,0,0-15,22.67c.24,10.35,6.18,19.16,15,22.89v7.79a25,25,0,0,0,0,45.79V340a25.45,25.45,0,0,0,0,46.39v7a25.46,25.46,0,0,0,0,46.39v6.94A25.46,25.46,0,0,0,512,493v19H477.28a26.74,26.74,0,0,0-48.7,0Z" fill="rgba(198,185,155,0)"/></g><path id="inner_color_stamp" data-name="inner color stamp" d="M481.3,505.34a33.5,33.5,0,0,0-56.61-.18,33.5,33.5,0,0,0-56.49,0,33.5,33.5,0,0,0-56.5,0,33.5,33.5,0,0,0-56.49,0,33.5,33.5,0,0,0-56.49,0,33.51,33.51,0,0,0-56.5,0,33.5,33.5,0,0,0-56.49,0,33.5,33.5,0,0,0-56.61.19H6.65V497a32.16,32.16,0,0,0,15-27.2A32.19,32.19,0,0,0,7.46,443.15a32.17,32.17,0,0,0,14.16-26.67A32.17,32.17,0,0,0,7.46,389.82a32.18,32.18,0,0,0,14.16-26.67A32.16,32.16,0,0,0,7,336.17a31.82,31.82,0,0,0,14.62-26.53v-.38a31.81,31.81,0,0,0-14.74-26.6,31.87,31.87,0,0,0,14.74-26.41v-.51A31.87,31.87,0,0,0,6.87,229.33a31.83,31.83,0,0,0,14.74-26.61v-.37A31.83,31.83,0,0,0,7,175.83a32.17,32.17,0,0,0,14.63-27A32.19,32.19,0,0,0,7.46,122.18,32.17,32.17,0,0,0,21.62,95.51,32.18,32.18,0,0,0,7.46,68.85,32.19,32.19,0,0,0,21.62,42.18,32.15,32.15,0,0,0,6.65,15V6.66H29.11A33.39,33.39,0,0,0,57.47,22.34,33.4,33.4,0,0,0,85.72,6.86,33.43,33.43,0,0,0,114,22.34,33.39,33.39,0,0,0,142.21,6.84a33.41,33.41,0,0,0,28.25,15.49A33.41,33.41,0,0,0,198.71,6.86,33.41,33.41,0,0,0,227,22.34,33.39,33.39,0,0,0,255.2,6.84a33.39,33.39,0,0,0,28.25,15.49A33.39,33.39,0,0,0,311.69,6.84a33.39,33.39,0,0,0,28.25,15.49A33.37,33.37,0,0,0,368.19,6.84a33.41,33.41,0,0,0,28.26,15.49A33.4,33.4,0,0,0,424.68,6.84a33.4,33.4,0,0,0,28.25,15.49A33.41,33.41,0,0,0,481.31,6.66h24V15a32.2,32.2,0,0,0-.82,53.87,32.2,32.2,0,0,0,0,53.33,32.2,32.2,0,0,0,.47,53.65,31.87,31.87,0,0,0-14.61,26.52v.39a31.88,31.88,0,0,0,14.73,26.6,31.89,31.89,0,0,0-14.72,26.41v.52a31.9,31.9,0,0,0,14.72,26.41,31.86,31.86,0,0,0-14.73,26.6v.38A31.85,31.85,0,0,0,505,336.17a32.2,32.2,0,0,0-.47,53.64,32.2,32.2,0,0,0,0,53.34,32.2,32.2,0,0,0,.82,53.87v8.32Z" fill="#f9ecce"/><g id="inner_color" data-name="inner color"><rect id="brown" x="47.02" y="47.02" width="417.96" height="417.96" fill="rgba(85,85,85,0.3)"/></g><path id="inner_border" data-name="inner border" d="M466.28,466.28H45.71V45.72H466.28V466.28Zm-418-2.61H463.68V48.33H48.33V463.67Z" fill="#d9c7b2"/></g><g id="Github"><path d="M256,126.07A133.24,133.24,0,0,0,213.88,385.7c6.66,1.23,9.11-2.89,9.11-6.41,0-3.18-.12-13.67-.19-24.81-37.06,8.06-44.88-15.72-44.88-15.72-6.06-15.4-14.79-19.49-14.79-19.49-12.09-8.27.91-8.1.91-8.1,13.38.94,20.42,13.73,20.42,13.73,11.88,20.36,31.17,14.48,38.77,11.07,1.2-8.6,4.65-14.48,8.46-17.81C202.1,314.8,171,303.38,171,252.33a51.53,51.53,0,0,1,13.73-35.76c-1.38-3.36-5.95-16.91,1.29-35.26,0,0,11.19-3.57,36.65,13.66a126.28,126.28,0,0,1,66.72,0c25.43-17.24,36.6-13.66,36.6-13.66,7.25,18.35,2.69,31.9,1.31,35.26A51.44,51.44,0,0,1,341,252.33c0,51.17-31.17,62.43-60.83,65.73,4.78,4.13,9,12.24,9,24.67,0,17.82-.15,32.17-.15,36.56,0,3.55,2.4,7.7,9.15,6.39A133.24,133.24,0,0,0,256,126.07Z" fill="#f9ecce" fillRule="evenodd"/><path d="M173.24,317.35c-.3.66-1.34.86-2.29.41s-1.51-1.34-1.19-2,1.33-.87,2.29-.41,1.52,1.34,1.19,2Zm-1.64-1.22" fill="#f9ecce"/><path d="M178.63,323.37c-.63.59-1.88.31-2.72-.62s-1-2.17-.39-2.77,1.86-.31,2.73.62,1,2.17.38,2.77ZM177.36,322" fill="#f9ecce"/><path d="M183.88,331c-.82.57-2.15,0-3-1.15s-.82-2.61,0-3.17,2.14-.06,3,1.12.81,2.63,0,3.21Zm0,0" fill="#f9ecce"/><path d="M191.08,338.45c-.72.81-2.28.59-3.42-.51s-1.49-2.6-.76-3.41,2.31-.58,3.46.51,1.51,2.61.72,3.4Zm0,0" fill="#f9ecce"/><path d="M201,342.75c-.32,1-1.82,1.52-3.33,1.07s-2.49-1.68-2.19-2.73,1.82-1.54,3.34-1.07,2.49,1.66,2.18,2.73Zm0,0" fill="#f9ecce"/><path d="M211.91,343.55c0,1.1-1.24,2-2.82,2s-2.89-.86-2.9-1.94,1.25-2,2.84-2,2.88.86,2.88,1.94Zm0,0" fill="#f9ecce"/><path d="M222.06,341.82c.19,1.07-.91,2.17-2.48,2.47s-3-.38-3.18-1.44.93-2.2,2.47-2.48,3,.37,3.19,1.46Zm0,0" fill="#f9ecce"/></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="pusher_logo" viewBox="125 90 750 210"><g id="Layer_1"><path fill="rgba(48,13,79,0.3)" d="M327.7 256.6V133.5c0-1.3 1-2.3 2.3-2.3h35.8c22.7 0 36.8 13.5 36.8 36.1s-16 37-37 37h-19.1c-.6 0-1.2.5-1.2 1.2v51.2c0 1.3-1 2.3-2.3 2.3h-13c-1.2 0-2.3-1.1-2.3-2.4zm38.2-67.4c12 0 18.8-10.2 18.8-21.8 0-12-6.2-21.1-18.8-21.1h-19.3c-.6 0-1.2.5-1.2 1.2V188c0 .6.5 1.2 1.2 1.2h19.3z" className="st2"></path><path fill="#300d4f" d="M480.8 131.1h13c1.3 0 2.3 1 2.3 2.3v93c0 21.1-16.9 34-36.7 34-19.4 0-36.3-13-36.3-34v-93c0-1.3 1-2.3 2.3-2.3h12.8c1.3 0 2.3 1 2.3 2.3V226c0 11.5 8.6 18.8 18.8 18.8 10.2 0 19-7.3 19-18.8v-92.6c.2-1.2 1.2-2.3 2.5-2.3z" className="st2"></path><path fill="#300d4f" d="M539.9 194.3c-12.4-8.5-20.7-18-20.7-32.3 0-20.5 16.9-32.3 36.1-32.3 18.1 0 34 10.3 34.9 36.3 0 1.3-1 2.5-2.3 2.5H576c-1.2 0-2.3-1-2.3-2.2-.8-14.1-9.1-20.9-19.5-20.9-10 0-17.5 6-17.5 15.6 0 8.3 4.9 12.8 17.7 22l17.9 13.2c12.4 9.2 19.4 17.5 19.4 30.6 0 21.2-17.1 33.8-37.2 33.8-19 0-34-10.6-35.6-36.6-.1-1.4 1-2.5 2.3-2.5h12.1c1.2 0 2.2 1 2.3 2.2 1.1 14.5 9.6 21.2 19.6 21.2 9.6 0 18.6-5.3 18.6-17.7 0-7.7-3.4-11.5-13.2-18.2l-20.7-14.7z" className="st2"></path><path fill="#300d4f" d="M670.5 256.6v-53.8c0-.6-.5-1.2-1.2-1.2H634c-.6 0-1.2.5-1.2 1.2v53.8c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v51.4c0 .6.5 1.2 1.2 1.2h35.3c.6 0 1.2-.5 1.2-1.2v-51.4c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v123.2c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1.1-2.3-2.4z" className="st2"></path><path fill="#300d4f" d="M713 256.6V133.5c0-1.3 1-2.3 2.3-2.3h63.6c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-47.1c-.6 0-1.2.5-1.2 1.2v37.7c0 .6.5 1.2 1.2 1.2h32.4c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-32.4c-.6 0-1.2.5-1.2 1.2v39.2c0 .6.5 1.2 1.2 1.2h47.1c1.3 0 2.3 1.1 2.3 2.3v10.7c0 1.3-1.1 2.3-2.3 2.3h-63.6c-1.3.2-2.3-.9-2.3-2.2z" className="st2"></path><path fill="#300d4f" d="M855.5 256.6l-19.2-53.5c-.2-.5-.6-.8-1.1-.8h-17.8c-.6 0-1.2.5-1.2 1.2v53.1c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h35.6c21.8 0 36.8 14.1 36.8 35 0 13.9-7.2 25.5-20.4 32.3-.3.1-.4.4-.3.7l21.7 56.7c.6 1.5-.5 3.2-2.2 3.2h-13.5c-1.2-.1-2.6-1.1-3.1-2.5zm-20.4-68.9c10.5 0 19.9-7.5 19.9-20.7 0-11.8-7.5-20.7-19.9-20.7h-17.7c-.6 0-1.1.5-1.1 1.1v39c0 .6.5 1.2 1.2 1.2h17.6z" className="st2"></path><path fill="#300d4f" d="M262.1 146.2v-13.1c0-.2-.1-.4-.3-.5l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-11.4 6.6c-.2.1-.3.3-.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-48c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 232c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 201c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.2.3-.5zm-65.6 24.4z" className="st2"></path></g></svg>    
                        </div>
                    </div>
                    <div className="made_by_container">
                        <p>Made with 
                        <span role="img" aria-label="emojis"> 💜 </span>
                        & 
                        <span role="img" aria-label="emojis"> 🙌 </span>
                        by  
                        <span className="name"> Himanshu</span> and <span className="name">Rishabh</span></p>
                    </div>
                </div>
                <div className="right_container">
                    <RightCarousel />
                </div>
            </div>
        );
    }
}