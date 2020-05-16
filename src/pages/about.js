import React from "react"
import './styles.scss'

import SEO from "../components/seo"
import Layout from "../components/layout"

import DogVideo from "../assets/shadow.mp4"
import SnowboardVideo from "../assets/snowboard_park.mp4"
import DeerVideo from "../assets/deer.mp4"

const NotFoundPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{height: "100vh", width: "100vw"}}>
      <video playsInline autoPlay loop muted style={{height: "100%", width: "100%", objectFit: "cover"}}>
        <source src={SnowboardVideo} type="video/mp4" />
      </video>
    </div>
    <div style={{height: "100vh", width: "100vw"}}>
      <video playsInline autoPlay loop muted style={{height: "100%", width: "100%", objectFit: "cover"}}>
        <source src={DogVideo} type="video/mp4" />
      </video>
    </div>
    <div style={{height: "100vh", width: "100vw"}}>
      <video playsInline autoPlay loop muted style={{height: "100%", width: "100%", objectFit: "cover"}}>
        <source src={DeerVideo} type="video/mp4" />
      </video>
    </div>
  </Layout>
)

export default NotFoundPage
