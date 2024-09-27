import React from 'react'

export default function Tour() {
    return (
        <div>
            <section class="dark-section" id="tour">
                <div class="container py-4">
                    <h1 class="text-center">TOUR DATES</h1>
                    <p class="text-center"><small> Remember to book your tickets!</small></p>
                    <ul>
                        <li>september <span class="badge">sold out</span></li>
                        <li>october <span class="badge">sold out</span></li>
                        <li>november <span class="count">3</span></li>
                    </ul>
                    <div class="row gap-2">
                        <div class="col">
                            <div class="card">
                                <img src={require("../assests/images/newyork.jpg")} class="card-image"/>
                                    <div class="card-body">
                                        <div class="card-title">New York </div>
                                        <div class="card-subtitle">Fri 27 Nov 2016</div>
                                        <div class="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                                            deserunt!</div>
                                        <a href="" class="card-button">Buy Tickets</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={require("../assests/images/newyork.jpg")} class="card-image"/>
                                    <div class="card-body">
                                        <div class="card-title">Paris </div>
                                        <div class="card-subtitle">Fri 27 Nov 2016</div>
                                        <div class="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                                            deserunt!</div>
                                        <a href="" class="card-button">Buy Tickets</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={require("../assests/images/newyork.jpg")} class="card-image" />
                                <div class="card-body">
                                    <div class="card-title">San Fransico </div>
                                    <div class="card-subtitle">Fri 27 Nov 2016</div>
                                    <div class="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                                        deserunt!</div>
                                    <a href="" class="card-button">Buy Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
