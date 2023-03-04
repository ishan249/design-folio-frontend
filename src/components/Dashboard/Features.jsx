import React from "react";
import { ReactComponent as FirstSvg } from "../../images/undraw_hiring_re_yk5n.svg";
import { ReactComponent as SecondSvg } from "../../images/undraw_online_cv_re_gn0a.svg";
import { ReactComponent as ThirdSvg } from "../../images/undraw_website_setup_re_d4y9.svg";
import "./Dashboard.css";
function Features() {
  const features = [
    {
      id: 1,
      ImageUrl: FirstSvg,
      title: "Easy to use",
      description:
        "It is very easy to use website so that people with no coding knowledge can make their portfolio by filling only 4 forms in DesignFolio.",
    },
    {
      id: 2,
      ImageUrl: SecondSvg,
      title: "Unique URL",
      description:
        "Every user will get a unique url to access their portfolio based on thier email address provided.",
    },
    {
      id: 3,
      ImageUrl: ThirdSvg,
      title: "Resuability",
      description:
        "You will have one link to use on every social media or if you have to give it to anyone to see your work and know about you.",
    },
  ];

  return (
    <div className="featuresArea">
      <div className="text-white font-poppins">
        <div className="flex flex-wrap justify-around mt-4">
          {features.map((Feature) => (
            <div className="featureCard" key={Feature.id}>
              <div className="svgComponent">
                <Feature.ImageUrl />
              </div>
              <p className="text-lg mt-4 font-bold">{Feature.title}</p>
              <p className="text-md mt-2 text-slate-300">
                {Feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
