import Image from "next/image";
import emailjs from "emailjs-com";

import style from "../styles/Home.module.css";
import logo from "../public/logo2.png";
import portfolio from "../public/portfolio.png";
import { Drift } from "react-drift";

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
        <div className="md:h-screen">
          <div className="flex justify-center md:justify-start brightness-200 contrast-200 md:ml-9 lg:ml-16 xl:ml-28 2xl:ml-60">
            <Image src={logo} width={220} objectFit="contain" height={97} />
          </div>

          <div className="md:flex">
            {/* left side */}
            <div className="md:ml-10 lg:ml-20 xl:ml-32 2xl:ml-64 lg:w-1/2">
              <h1 className="text-2xl font-montserrat md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-10 text-center md:text-left hidden md:flex">
                Download our app development portfolio.
              </h1>
              <p className="text-white mt-5 font-montserrat md:mt-7 lg:mt-10 text-sm md:text-lg lg:2xl text-center md:text-left hidden md:flex">
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
                <h2 className="text-black font-montserrat text-xl font-bold">
                  Download Our Portfolio
                </h2>
                <p className="text-gray-500 font-montserrat lg:text-lg mt-3">
                  To access our portfolio of mobile apps
                  <br /> and web projects, let us know about
                  <br /> you and your business.
                </p>
                {/* form here */}
                <form onSubmit={sendEmail} className="mt-5 lg:mt-0">
                  <input
                    type="text"
                    className="border text-xs font-montserrat pl-3 p-2 md:p-3 md:text-xl w-full lg:w-40 rounded"
                    name="first_name"
                    required
                    placeholder="First Name *"
                  />

                  <br className="md:hidden" />

                  <input
                    type="text"
                    className="border text-xs font-montserrat pl-3 p-2 md:p-3 md:text-xl mt-3 lg:ml-5 w-full lg:w-40 rounded"
                    name="last_name"
                    required
                    placeholder="Last Name *"
                  />
                  <br />

                  <input
                    type="email"
                    className="border text-xs font-montserrat pl-3 p-2 md:p-3 md:text-xl mt-3 w-full rounded"
                    name="user_email"
                    required
                    placeholder="Work Email *"
                  />
                  <br />

                  <input
                    type="tel"
                    className="border text-xs font-montserrat pl-3 p-2 md:p-3 md:text-xl mt-3 w-full rounded"
                    name="phone"
                    required
                    placeholder="Phone *"
                  />
                  <br />

                  <input
                    type="text"
                    className="border text-lg font-montserrat pl-3 p-2 md:p-3 md:text-xl mt-3 w-full rounded"
                    name="company_name"
                    required
                    placeholder="Company Name *"
                  />
                  <br />
                  <input
                    type="submit"
                    value="DOWNLOAD NOW"
                    className="shadow-md shadow-gray-400 text-xs font-montserrat pl-3 p-2 md:p-3 md:text-xl mt-3 text-white md:font-bold bg-red-500 rounded md:px-5 md:px-12"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-montserrat font-semibold text-center md:text-left md:ml-10 lg:ml-20 xl:ml-30 2xl:ml-64 mt-4 mb-5 flex flex-col md:flex-row">
        Copyright © 2021 Neben Solutions
        <span className="ml-2 font-normal">
          |
          <a href="" className="text-blue-700 ml-2 mr-2">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-700 ">
            Contact Us
          </a>
        </span>
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
