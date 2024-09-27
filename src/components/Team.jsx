import React from 'react'

export default function Team() {
    return (
        <div>
            <section>
                <div class="container pt-4">
                    <h1 class="text-center">The Band</h1>
                    <p class="text-center"><small> we love music</small></p>
                    <p class="text-justify mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem enim quidem sequi unde, nam, corrupti consequatur natus quam sed, ipsum quibusdam. Recusandae magnam harum accusantium molestias explicabo inventore minus quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem enim quidem sequi unde, nam, corrupti consequatur natus quam sed, ipsum quibusdam. Recusandae magnam harum accusantium molestias explicabo inventore minus quamLorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem enim quidem sequi unde, nam, corrupti consequatur natus quam sed, ipsum quibusdam. Recusandae magnam harum accusantium molestias explicabo inventore minus quam</p>
                    <div class="row">
                        <div class="band-col">
                            <div>name</div>
                            <img src={require("../assests/images/bandmember.jpg")} alt="band" width="100%" />
                        </div>
                        <div class="band-col">
                            <div>name</div>
                            <img src={require("../assests/images/bandmember.jpg")} alt="band" width="100%" />
                        </div>
                        <div class="band-col">
                            <div>name</div>
                            <img src={require("../assests/images/bandmember.jpg")} alt="band" width="100%" />
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
