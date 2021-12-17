import Image from "next/image";
import style from "../styles/Home.module.css";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div className={style.main__img}>
      <div className="ml-64">
        <Image
          className=""
          src={logo}
          width="340"
          objectFit="contain"
          height={150}
        />
      </div>

      {/* left side */}
      <div>
        <h1 className="text-7xl ml-64">
          Download our app <br /> development portfolio.
        </h1>
      </div>

      {/* right side */}
      <div></div>
    </div>
  );
}
