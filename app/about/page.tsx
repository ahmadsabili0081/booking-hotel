import HeaderSection from "@/components/HeaderSection/HeaderSection";
import { Metadata } from "next";
import Image from "next/image";
import AboutImage from "@/public/images/about-image.jpg";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About",
  description: "Who We Are",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src={AboutImage} alt="about image" width={650} height={579} />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              impedit reprehenderit ea illo nostrum magnam accusamus officia
              quod maiores consequatur.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    id incidunt voluptates earum? Modi natus in cum eligendi
                    praesentium? Atque commodi odit perspiciatis molestias
                    magnam magni modi molestiae, itaque totam?
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mision :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    id incidunt voluptates earum? Modi natus in cum eligendi
                    praesentium? Atque commodi odit perspiciatis molestias
                    magnam magni modi molestiae, itaque totam?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
