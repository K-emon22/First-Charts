import {use} from "react";
import {FaCheckDouble} from "react-icons/fa6";
const JymFacility = ({JymPromise}) => {
  const Jymdata = use(JymPromise);

  return (
    <div className="mx-[5%]">
      {/* Card Header */}
      <h1 className="font font-semibold text-2xl mb-5 mt-5"> Get Membership</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  ">
        {Jymdata.map(
          ({
            id,
            name,
            // location,
            monthlyFees,
            features,
            quality,
            description,
          }) => (
            <div key={id} className="  bg-blue-200 border rounded-lg p-5 ">
              <h1 className=" font-black text-3xl pl-1"> {name}</h1>
              <div className="bg-blue-300 flex-col  flexgrow p-2 rounded-sm">
                <h1 className="font-semibold text-xl"> {quality}</h1>
                <h1> {monthlyFees}</h1>
                {/* Card Body */}
                <p className=" mt-1 text-justify  p-1 rounded-sm">
                  {description}
                </p>

                <div className=" ">
                  {features.map((feture, index) => (
                    <h1
                      key={index}
                      className=" px-1 rounded-sm flex flex-row gap-2"
                    >
                      <span className="my-auto">
                        <FaCheckDouble />
                      </span>
                      {feture}
                    </h1>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary font-bold bg-blue-400 mt-5 w-full  hover:bg-blue-500  text-black hover:text-white  hover:scale-105  transition-transform">
                {" "}
                Subscribe
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default JymFacility;
