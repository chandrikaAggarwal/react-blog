import React, { Component } from 'react';

import '../master.css';

import latest from '../img/post-image1.jpg';
import picture1 from '../img/post-image2.jpg';
import picture2 from '../img/post-image3.jpg';
import picture3 from '../img/post-image4.jpg';
import picture4 from '../img/post-image5.jpg';
import picture5 from '../img/post-image6.jpg';
import picture6 from '../img/post-image7.jpg';
import picture7 from '../img/post-image8.jpg';
import picture8 from '../img/post-image9.jpg';

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="d-flex">
                    <div className="flex-col-40per">
                        <img className="img-fluid" src={latest} alt="picture" />
                    </div>
                    <div className="flex-col-50per">
                        <h3>Post Title Goes Here.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <hr />
                        <p>
                            <span className="justify-content-start">07 October 2020</span>
                            <span className="align-items-end">Posted By <span className="font-weight-bold">Chandrika</span></span>
                        </p>
                    </div>
                </div>

                <div className="d-flex flex-row flex-wrap pb-100">
                    <div className="card blog-card border-0" >
                        <img src={picture1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture7} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                    <div className="card blog-card border-0" >
                        <img src={picture8} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Post Title Goes Here.</h4>
                            <hr className="mb-0 pb-1" /><p class="card-text mb-0">Posted By: <span className="font-weight-bold">Chandrika</span></p><hr className="mt-2" />
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <hr className="mb-0 pb-1" />06 October 2020
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;