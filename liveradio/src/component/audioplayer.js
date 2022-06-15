import React from 'react'

export default function Audioplayer({src,title}) {
    return (
        <div>
            {/* <!-- Called of font style  file --> */}


            <h2>{title}</h2>
            <div class="container-audio">
                <audio controls loop autoplay>
                    <source src={src} type="audio/ogg" />
                    Your browser dose not Support the audio Tag
                </audio>
            </div>
            <div class="container-audio">
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
            </div>
        </div>
    )
}
