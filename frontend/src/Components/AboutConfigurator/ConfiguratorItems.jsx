import React, { useEffect } from "react";
import { mainFeaturesconfig } from "../../assets/data/data";
// import box from "../../assets/Home/boximg.png";
// import lights from "../../assets/Home/lightsimg.png";
// import pc from "../../assets/Home/pcimg.png";
import m5 from "../../assets/Configurator/globe1.png";
import m1 from "../../assets/Configurator/unstucksofa.gif";
import m4 from "../../assets/Configurator/piechart.png";
import m3 from "../../assets/Configurator/stucksofa.gif";
import mtbl from "../../assets/Configurator/tbc.gif";

// import m2 from "../../assets/Configurator/table.gif";

const ConfiguratorItems = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.oncehub.com/mergedjs/so.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-[#070911] px-4 mx-auto text-white">
      <div className="md:hidden">
        {mainFeaturesconfig.map((m) => (
          <div
            key={m.id}
            className="items-center justify-center md:grid md:grid-cols-2 pt-14 md:gap-32"
          >
            <div className="flex justify-center ">
              <img
                src={m.img}
                alt={m.title}
                className={`${m.id === 4 || m.id === 5 ? "" : ""}`}
              />
            </div>
            <div>
              <h2 className="pr-6 mt-4 mb-2 text-2xl font-bold">{m.title}</h2>
              <h2 className="mb-4 font-normal leading-5">{m.desc}</h2>
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-center text-[30px] font-outfit mt-14 font-bold ">
            Get in touch with us
          </h2>
          <p className="w-[300px] md:w-[500px] font-light mt-1 mb-10 text-[12px] text-center mx-auto">
            We're excited to connect with you! Whether you have questions about
            our services, want to discuss a project, we're here and ready to
            help.{" "}
          </p>
          <div className="w-full max-h-screen mb-8 overflow-hidden border-black">
            <div
              id="SOIDIV_Bigsurmoon"
              data-so-page="Bigsurmoon"
              data-height="600"
              data-style="border: 1px solid ##d8d8d8; min-width: 290px; max-width: 900px;"
              data-psz="11"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="hidden md:block">
          <div className="items-center justify-between pt-20 md:grid md:grid-cols-2 md:gap-32 lg:gap-10 xl:pt-40 md:px-8 xl:mb-60 lg:px-10 ">
            <div className="flex justify-center ">
              <img
                src={m1}
                alt="Multiple variations for single product"
                className=" xl:w-[500px] md:h-full xl:h-[380px]   "
              />
            </div>
            <div className="flex flex-col justify-center mx-auto ">
              <h2 className="mb-4 text-2xl font-bold lg:text-5xl font-outfit xl:pl-16">
                Multiple variations
                <br />
                for single product
              </h2>
              <p className="mb-4 font-light leading-5 lg:text-2xl xl:leading-7 xl:w-3/4 xl:pl-16 ">
                Offer endless choices with multiple variations for your product.
                Cater to diverse customer preferences and increase customer
                satisfaction by providing a wide range of customizable options.
              </p>
            </div>
          </div>

          <div className="items-center justify-center mt-20 md:grid md:grid-cols-2 md:px-5 xl:mt-60 xl:mb-60 lg:px-12 ">
            <div className="flex flex-col justify-center mx-auto ">
              <h2 className="hidden mb-4 text-2xl font-bold lg:block font-outfit xl:pl-20 xl:mt-20 lg:w-full lg:text-5xl">
                Animated
                <br />
                3D Content
              </h2>
              <h2 className="hidden mb-4 text-2xl font-bold md:block lg:hidden lg:w-full font-outfit lg:text-5xl">
                Animated 3D Content
              </h2>
              <p className="px-3 mb-4 font-light leading-5 lg:text-2xl xl:w-3/4 xl:leading-7 xl:pl-20 ">
                Engage your audience with hassle-free animated 3D content, a
                dynamic alternative to traditional explainer videos. Convey your
                message effectively with captivating visuals that leave a
                lasting impact.
              </p>
            </div>
            <div className="flex justify-center ">
              <img
                src={mtbl}
                alt="Animated 3D content"
                className="xl:w-[450px] ml-[-40px] xl:h-[400px] md:h-[230px]   "
              />
            </div>
          </div>

          <div className="items-center justify-between gap-10 mt-20 md:grid md:grid-cols-2 px- xl:mt-60 xl:mb-60 lg:px-10 ">
            <div className="flex justify-center ">
              <img src={m3} alt="Experience the ultimate all-in-one image mode" className=" xl:h-[400px]  " />
            </div>
            <div className="flex flex-col justify-center mx-auto ">
              <h2 className="mb-4 text-2xl font-bold xl:pl-14 lg:w-full font-outfit lg:text-5xl">
                Image mode
              </h2>
              <p className="mb-4 font-light leading-5 lg:text-2xl lg:w-3/4 xl:leading-7 xl:pl-14 ">
                Experience the ultimate all-in-one image mode. Immerse yourself
                in stunning visuals with enhanced details and vibrant colors,
                all in a single, comprehensive viewing experience.
              </p>
              <h2 className="text-lg  text-[#57BEF8]"></h2>
            </div>
          </div>

          <div className="items-center justify-between px-10 mt-20 md:grid md:grid-cols-2 xl:mt-60 xl:mb-60 lg:px-20 ">
            <div className="flex flex-col justify-center mx-auto ">
              <h2 className="hidden mb-4 text-2xl font-bold lg:block xl:pl-12 lg:w-full lg:text-5xl">
                Streamlined <br />
                Project <br /> Management <br />
              </h2>
              <h2 className="mb-4 text-2xl font-bold lg:hidden lg:w-full lg:text-5xl">
                Streamlined Project <br /> Management <br />
              </h2>
              <p className="mb-4 font-light leading-5 lg:text-2xl lg:w-3/4 xl:leading-7 xl:pl-12 ">
                No matter the size of your project, we possess the expertise to
                fulfill your requirements. Our platform seamlessly handles
                projects, allowing you to store files, make edits at any time,
                and publish whenever you choose.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={m4} alt="Streamlined Project Management" className=" h-[300px] xl:h-[450px] md:h-[360px] " />
            </div>
          </div>

          <div className="items-center justify-between gap-10 mt-20 md:grid md:grid-cols-2 xl:mt-60 xl:mb-60 lg:px-10 ">
            <div className="flex justify-center ">
              <img
                src={m5}
                alt="No code, No App All through your Browser"
                className="xl:w-[450px]  xl:h-[300px] md:h-[410px]   "
              />
            </div>
            <div className="flex flex-col justify-around mx-auto ">
              <h2 className="hidden mt-10 mb-4 text-2xl font-bold lg:block font-outfit xl:pl-10 lg:w-full lg:text-5xl">
                No code, No App <br />
                All through your <br /> Browser
              </h2>
              <h2 className="mt-10 mb-4 text-2xl font-bold lg:hidden font-outfit lg:w-full lg:text-5xl">
                No code, No App <br />
                All through your Browser
              </h2>
              <p className="mb-4 font-light leading-5 lg:text-2xl lg:w-3/4 xl:leading-7 xl:pl-10 ">
                Unlock limitless possibilities without the need for code or an
                app. Access and control everything through your browser,
                simplifying the process and empowering you to create and
                customize with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div>
          <h3 className="text-center text-[50px] font-outfit  font-bold">
            Get in touch with us
          </h3>
          <p className="w-[300px] md:w-[500px] font-light mt-5 mb-10 text-[18px] text-center mx-auto">
            We're excited to connect with you! Whether you have questions about
            our services, want to discuss a project, we're here and ready to
            help.{" "}
          </p>
          <div className="w-full h-full max-h-screen pb-10 border-black">
            <div
              id="SOIDIV_Bigsurmoon"
              data-so-page="Bigsurmoon"
              data-height="750"
              data-style="border: 2px solid #d8d8d8; min-width: 290px; max-width: 900px;"
              data-psz="00"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorItems;
