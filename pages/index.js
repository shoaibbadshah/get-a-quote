import Image from "next/image";
import emailjs from "emailjs-com";

import style from "../styles/Home.module.css";
import logo from "../public/logo.png";
import portfolio from "../public/portfolio.png";

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
        <div className="ml-64 w-1/2">
          <Image src={logo} width={220} objectFit="contain" height={97} />
        </div>

        <div className="flex">
          {/* left side */}
          <div>
            <h1 className="text-6xl ml-64 font-bold text-white mt-10 ">
              Download our app <br /> development portfolio.
            </h1>
            <p className="text-white ml-64 mt-10 text-2xl">
              Complete the following form to download our app and software
              development portfolio.
            </p>
            <div className="text-center ml-64 mt-10">
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
          <div className="w-1/2">
            <div className="bg-gray-50 w-fit p-6 border rounded-md">
              <h2 className="text-black text-xl font-bold">
                Download Our Portfolio
              </h2>
              <p className="text-black text-lg mt-3">
                To access our portfolio of mobile apps
                <br /> and web projects, let us know about
                <br /> you and your business.
              </p>
              {/* form here */}
              <form onSubmit={sendEmail} className="mt-8">
                <input
                  type="text"
                  className="border p-3 text-xl w-40 rounded"
                  name="first_name"
                  required
                  placeholder="First Name *"
                />

                <input
                  type="text"
                  className="border p-3 text-xl ml-5 w-40 rounded"
                  name="last_name"
                  required
                  placeholder="Last Name *"
                />
                <br />

                <input
                  type="email"
                  className="border p-3 text-xl mt-5 w-full rounded"
                  name="user_email"
                  required
                  placeholder="Work Email *"
                />
                <br />

                <input
                  type="tel"
                  className="border p-3 text-xl mt-5 w-full rounded"
                  name="phone"
                  required
                  placeholder="Phone *"
                />
                <br />

                <input
                  type="text"
                  className="border p-3 text-xl mt-5 w-full rounded"
                  name="company_name"
                  required
                  placeholder="Company Name *"
                />
                <br />
                <input
                  type="submit"
                  value="Download Now"
                  className="border p-3 text-xl mt-5 text-white font-bold bg-red-500 rounded px-12"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="ml-64">
        Copyright © 2021 Alpha Bravo Development, LLC |
        <a href="" className="text-blue-700 m-5">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-700 ">
          Contact Us
        </a>
      </p>
    </div>
  );
}
