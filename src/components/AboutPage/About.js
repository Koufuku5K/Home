import React from 'react'
import './About.css'
import self_portrait from '../../images/self_portrait.jpeg'
import { useTranslation } from 'react-i18next'

function About() {

  const [t, ] = useTranslation("global");

  return (
    <div class="container_about">
        <div class="text_about">
            <h1>{t("about.heading")}</h1>
            <div>
                {t("about.paragraph1")}
                <br></br>
                <br></br>
                {t("about.paragraph2")}
                <br></br>
                <br></br>
                {t("about.paragraph3")}
                <br></br>
                <br></br>
                {t("about.paragraph4")}
                <br></br>
                <br></br>
                {t("about.paragraph5")}
            </div>
        </div>
        <div class="image_container_about">
            <img class="about_img" src={self_portrait} alt="Me"/>
        </div>
    </div>
  )
}

export default About