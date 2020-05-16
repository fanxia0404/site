import React from "react"
import './styles.scss'

import SEO from "../components/seo"
import Layout from "../components/layout"

import DogVideo from "../assets/shadow.mp4"
import SnowboardVideo from "../assets/snowboard_park.mp4"
import DeerVideo from "../assets/deer.mp4"

const AboutPage = () => {
    const Videos = [SnowboardVideo, DogVideo, DeerVideo].map((video, index) => (
        <div style={{
            height: "100vh",
            width: "100vw",
            backgroundColor:  index % 2 == 0 ? "#ffffff" : "#24292e",
            color:  index % 2 == 0 ? "#24292e" : "#ffffff"
        }}>
            <video
                playsInline 
                autoPlay 
                loop 
                muted 
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
                <source src={video} type="video/mp4" />
                <div class="blankslate">
                    <h3 class="mb-1">Your browser doesn't support HTML5 video.</h3>
                    <p>Here is a <a href={video}>link to the video</a> instead.</p>
                </div>
            </video>
        </div>
    ))

    return (
        <Layout>
            <SEO title="About" />
            {Videos}
        </Layout>
    )
}

export default AboutPage
