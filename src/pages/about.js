import React from "react"
import "./styles.scss"

import SEO from "../components/seo"
import Layout from "../components/layout"

import DogVideo from "../assets/videos/shadow.mp4"
import SnowboardVideo from "../assets/videos/snowboard_park.mp4"
import DeerVideo from "../assets/videos/deer.mp4"

const AboutPage = () => {
    const Videos = [DogVideo, SnowboardVideo, DeerVideo].map((video, index) => (
        <div
            key={index}
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: index % 2 ? "#24292e" : "#ffffff",
                color: index % 2 ? "#ffffff" : "#24292e",
            }}
        >
            <video
                playsInline
                autoPlay
                loop
                muted
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
            >
                <source src={video} type="video/mp4" />
                <div className="blankslate">
                    <h3 className="mb-1">
                        Your browser doesn't support HTML5 video.
                    </h3>
                    <p>
                        Here is a <a href={video}>link to the video</a> instead.
                    </p>
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
