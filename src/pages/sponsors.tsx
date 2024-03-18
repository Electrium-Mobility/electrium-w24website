import React from "react";
// import tailwindConfig from "@site/tailwind.config";
// import styles from "./index.module.css";
import LinkButton from "../components/UI Components/LinkButton";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import weef from "/static/img/sponsors/weef_logo.png";
import Altium from "/static/img/sponsors/Altium_Logo.png";
import AltiumDark from "/static/img/sponsors/Altium_Logo_light.png";
import mef from "/static/img/sponsors/mef_logo.png";
import wusa from "/static/img/sponsors/WUSA_logo.png";
import wusaDark from "/static/img/sponsors/WUSA_logo_light.png";

import panago from "/static/img/sponsors/panago_logo.png";
import panagoDark from "/static/img/sponsors/panago_logo_light.png";
import imprint from "/static/img/sponsors/4imprint-logo-light.jpg";
import imprintDark from "/static/img/sponsors/4imprint-logo.png";
import enova from "/static/img/sponsors/Enova_Logo.jpg";

import domino from "/static/img/sponsors/dominos_logo.png";
import wcfu from "/static/img/sponsors/WFCU_logo.png";
import wcfuDark from "/static/img/sponsors/WFCU_logo_light.png";

import Sponsor from "./sponsor";

export default function Sponsors() {
  //surely there's a better way to do this :")
  const sponsors = {
    platinum: [
      {
        imgUrl: weef,
        darkImg: weef,
      },
      {
        imgUrl: Altium,
        darkImg: AltiumDark,
      },
      {
        imgUrl: mef,
        darkImg: mef,
      },
      {
        imgUrl: wusa,
        darkImg: wusaDark,
      },
    ],
    gold: [
      {
        imgUrl: panago,
        darkImg: panagoDark,
      },
      {
        imgUrl: imprint,
        darkImg: imprintDark,
      },
      {
        imgUrl: enova,
        darkImg: enova,
      },
    ],
    silver: [
      {
        imgUrl: domino,
        darkImg: domino,
      },
    ],
    bronze: [
      {
        imgUrl: wcfu,
        darkImg: wcfuDark,
      },
    ],
  };
  return (
    <Layout>
      <div>
        <section className="relative md:py-24 py-16  bg-gray-50 dark:bg-slate-800">
          <div className="container mt-16">
            <div className="grid grid-cols-1 text-center">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Sponsor Sustainable Innovation
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                Sponsors help promote sustainable innovation and bring our
                projects to life. <br /> Support us in our journey towards
                eco-friendly transportation and contact us to find out more
                about becoming a sponsor!
              </p>
              <div className="mt-6">
                <LinkButton to="/contact">Become a Sponsor</LinkButton>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <h4 className="text-center mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Platinum
        </h4>
        {sponsors.platinum.map((sponsor, index) => (
          <Sponsor
            key={index}
            imgUrl={sponsor.imgUrl}
            darkImgUrl={sponsor.darkImg}
            tier="platinum"
          />
        ))}
        <br />
        <h4 className="text-center mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Gold
        </h4>
        {sponsors.gold.map((sponsor, index) => (
          <Sponsor
            key={index}
            imgUrl={sponsor.imgUrl}
            darkImgUrl={sponsor.darkImg}
            tier="gold"
          />
        ))}
      </div>
      <br />
      <h4 className="text-center mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
        Silver
      </h4>
      {sponsors.silver.map((sponsor, index) => (
        <Sponsor
          key={index}
          imgUrl={sponsor.imgUrl}
          darkImgUrl={sponsor.darkImg}
          tier="silver"
        />
      ))}
      <h4 className="text-center mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
        Bronze
      </h4>
      {sponsors.bronze.map((sponsor, index) => (
        <Sponsor
          key={index}
          imgUrl={sponsor.imgUrl}
          darkImgUrl={sponsor.darkImg}
          tier="bronze"
        />
      ))}
    </Layout>
  );
}
