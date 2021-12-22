import Image from "next/image";
import emailjs from "emailjs-com";

import style from "../styles/Home.module.css";
import logo from "../public/logo.png";
import portfolio from "../public/portfolio.png";
import { Drift } from "react-drift";

// import Drift from "react-driftjs";

export default function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7g2ctsg",
        "template_q3ha0jc",
        e.target,
        "user_CiS0rUikfIwSOwjmuIaC9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className={style.main__img}>
        <div className="text-center md:text-left md:ml-10 lg:ml-20 xl:ml-30 2xl:ml-64">
          <Image src={logo} width={220} objectFit="contain" height={97} />
        </div>

        <div className="md:flex">
          {/* left side */}
          <div className="md:ml-10 lg:ml-20 xl:ml-30 2xl:ml-64 lg:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mt-10 text-center md:text-left hidden md:flex">
              Download our app development portfolio.
            </h1>
            <p className="text-white mt-5 md:mt-7 lg:mt-10 text-sm md:text-lg lg:2xl text-center md:text-left hidden md:flex">
              Complete the following form to download our app and software
              development portfolio.
            </p>
            <div className="text-center mt-10 md:mb-14 xl:mb-16 2xl:mb-20">
              <Image
                className="text-center"
                src={portfolio}
                width={300}
                height={350}
                objectFit="contain"
              />
            </div>
          </div>

          {/* right side */}
          <div className="flex justify-center p-5 md:mr-3 lg:w-1/2">
            <div className="bg-gray-50 w-fit h-min p-3 md:p-6 border rounded-md">
              <h2 className="text-black text-xl font-bold">
                Download Our Portfolio
              </h2>
              <p className="text-black lg:text-lg mt-3">
                To access our portfolio of mobile apps
                <br /> and web projects, let us know about
                <br /> you and your business.
              </p>
              {/* form here */}
              <form onSubmit={sendEmail} className="mt-5 lg:mt-0">
                <input
                  type="text"
                  className="border pl-3 p-2 md:p-3 md:text-xl w-full lg:w-40 rounded"
                  name="first_name"
                  required
                  placeholder="First Name *"
                />

                <br className="md:hidden" />

                <input
                  type="text"
                  className="border pl-3 p-2 md:p-3 md:text-xl mt-5 lg:ml-5 w-full lg:w-40 rounded"
                  name="last_name"
                  required
                  placeholder="Last Name *"
                />
                <br />

                <input
                  type="email"
                  className="border pl-3 p-2 md:p-3 md:text-xl mt-5 w-full rounded"
                  name="user_email"
                  required
                  placeholder="Work Email *"
                />
                <br />

                <input
                  type="tel"
                  className="border pl-3 p-2 md:p-3 md:text-xl mt-5 w-full rounded"
                  name="phone"
                  required
                  placeholder="Phone *"
                />
                <br />

                <input
                  type="text"
                  className="border pl-3 p-2 md:p-3 md:text-xl mt-5 w-full rounded"
                  name="company_name"
                  required
                  placeholder="Company Name *"
                />
                <br />
                <input
                  type="submit"
                  value="Download Now"
                  className="border pl-3 p-2 md:p-3 md:text-xl mt-5 text-white font-bold bg-red-500 rounded px-5 md:px-12"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p
        className="text-center md:text-left md:ml-10 lg:ml-20 xl:ml-30 2xl:ml-64 mt-2 mb-3 flex flex-col md:flex-row"
        style={style.font__family}
      >
        Copyright © 2021 Neben Solutions |
        <a href="" className="text-blue-700 ml-5 mr-5">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-700 ">
          Contact Us
        </a>
      </p>
      <div className="w-min">
        <Drift
          appId="anwzpfzknn4p"
          userId="123"
          attributes={{ email: "shoaibbadshah2@gmail.com" }}
          config={{ locale: "en-US" }}
        />
      </div>
    </div>
  );
}
