import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div class="container py-4">
                    <h1 class="text-center">contact</h1>
                    <p class="text-center"><small> fan? Drop a note !</small></p>
                    <div class="row">
                        <div>
                            <div class="address-line">
                                <i class="icon fa fa-map-marker"></i>
                                Chincago,US
                            </div>
                            <div class="address-line">
                                <i class="icon fa fa-phone"></i>
                                Phone:+00 14566556
                            </div>
                            <div class="address-line">
                                <i class="icon fa fa-envelope"></i>
                                Email:mail@gmail.com
                            </div>
                        </div>
                        <div>
                            <form action="">
                                <div class="d-flex">
                                    <input type="text" placeholder="Name"/>
                                        <input type="email" placeholder="Email"/>
                                        </div>
                                        <input type="message" placeholder="message"/>
                                            <button type="submit">SEND</button>
                                        </form>
                                </div>
                        </div>


                    </div>
            </section>
        </div>
    )
}
