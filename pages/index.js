import Image from "next/image";
import style from "../styles/Home.module.css";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div className={style.main__img}>
      <div className="ml-64 w-1/2">
        <Image
          className=""
          src={logo}
          width="340"
          objectFit="contain"
          height={150}
        />
      </div>

      <div className="flex">
        {/* left side */}
        <div>
          <h1 className="text-6xl ml-64 font-bold text-white mt-20 ">
            Download our app <br /> development portfolio.
          </h1>
          <p className="text-white ml-64 mt-10 text-2xl">
            Complete the following form to download our app and software
            development portfolio.
          </p>
        </div>

        {/* right side */}
        <div className="w-1/2">
          <div className="bg-white w-fit p-4 border rounded-md">
            <h2 className="text-black text-xl font-bold">
              Download Our Portfolio
            </h2>
            <p className="text-black text-xl">
              To access our portfolio of mobile apps
              <br /> and web projects, let us know about
              <br /> you and your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
