import './PortfolioPage.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {useTranslation} from 'react-i18next'

function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Loads the page from the top
  }, []);

  const [t, ] = useTranslation("global");

  return (
    <>
    <div class="portfolio_container">

        <div class='section'>
          <div class='subSection'>
            <h1 class="sectionTitle">
              {t("heading.message")}
            </h1>
            <br></br>
            <p>
              {t("sub-heading.paragraph1")}
              <br></br>
              <br></br>
              {t("sub-heading.paragraph2")}
            </p>
          </div>
          <p id="scrollText">SCROLL</p>
          <div class="scrollLineContainer">
            <div class="scrollLine"></div>
          </div>
        </div>

        <div class='section'>
          <h1 class="sectionTitle">{t("portfolio1.title")}</h1>
            <br></br>
            <p>
              {t("portfolio1.description")}
            </p>
            <br></br>
            <br></br>
            <button><Link to="/PCG">Click Me!</Link></button>
        </div>

        <div class='section'>
          <h1 class='sectionTitle'>{t("portfolio2.title")}</h1>
          <br></br>
          <p>
            {t("portfolio2.description")}
          </p>
          <br></br>
          <br></br>
          <button><Link to="/FlashDodge">Click Me!</Link></button>
        </div>

        <div class='section'>
          <h1 class='sectionTitle'>{t("portfolio3.title")}</h1>
          <br></br>
          <p>
            {t("portfolio3.description")}
          </p>
          <br></br>
          <br></br>
          <button><Link to="/InitialTruth">Click Me!</Link></button>
        </div>

    </div>
    </>
  )
}

export default PortfolioPage