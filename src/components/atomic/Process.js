import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import hero1 from '../../assets/icon/hero1.svg'
import hero2 from '../../assets/icon/hero2.svg'
import hero3 from '../../assets/icon/hero3.svg'
import hero4 from '../../assets/icon/hero4.svg'

export default function Process(){
    return(
        <div class="container text-light mt-5">
            <div class="row text-center d-flex justify-content-center mb-5">
                <div class="col">
                    <h2 class="fs-1 fw-bold">Quick & Easy Process</h2>
                    <p class="h-blur m-auto to-full">Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="row d-flex align-items-center mt-2 mb-2">
                        <div class="col-4 col-md-3">
                            <img src={hero1} alt=""></img>
                        </div>
                        <div class="col-6">
                            <p class="px-4 py-2 bg-white fw-bold text-dark rounded-pill">I can take care of your pitch</p>
                            <div class="buble rounded-pill"></div>
                        </div>
                </div>
                <div class="row d-flex align-items-center mt-2 mb-2">
                    <div class="col-6">
                        <p class="px-4 py-2 bg-white fw-bold text-dark rounded-pill">I can design you website</p>
                        <div class="ms-auto buble rounded-pill"></div>
                    </div>
                    <div class="col-3">
                        <img src={hero2} alt=""></img>
                    </div>
                </div>
                </div>

                <div class="col-md-6">
                    <div class="row d-flex align-items-center mt-2 mb-2 order-md-2">
                        <div class="col-6">
                            <p class="px-4 py-2 bg-white fw-bold text-dark rounded-pill">I can prototype your app </p>
                            <div class="ms-auto buble rounded-pill"></div>
                        </div>
                        <div class="col-3">
                            <img src={hero3} alt=""></img>
                        </div>
                    </div>
                    <div class="row d-flex align-items-center mt-2 mb-2 order-md-1">
                        <div class="col-4 col-md-3">
                            <img src={hero4} alt=""></img>
                        </div>
                        <div class="col-7">
                            <p class="px-4 py-2 bg-white fw-bold text-dark rounded-pill">I can help marketing strategy</p>
                            <div class="buble rounded-pill"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-center mt-5 mb-5">
                <div class="col">
                    <button class="btn text-light color5 fw-bold">Contact our expert</button>
                </div>
            </div>
        </div>
    );
}