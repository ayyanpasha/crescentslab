import React from 'react';
import { motion } from 'framer-motion';

const processes = [
  {
    title: "Discovery",
    description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
    image: require("../asset/images/discovery.avif"),
    dropdown: {
      title: "We learn from you",
      dropdownPoints: ["Identify Painpoints", "Uncover opportunities", "Flag inefficiencies"]
    }
  },
  {
    title: "Analysis",
    description: "We craft a tailored action plan that aligns with your budget and requirements – no guesswork, just solutions",
    image: require("../asset/images/analysis.avif"),
    dropdown: {
      title: "We build for you",
      dropdownPoints: ["Compatible with your stack", "Designed for the end user", "Future ready & modular"]
    }
  },
  {
    title: "Execution",
    description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact",
    image: require("../asset/images/execution.avif"),
    dropdown: {
      title: "We keep you looped",
      dropdownPoints: ["Regular status calls", "Open line of communication", "Documentation & support"]
    }
  },
];

export const Process = () => {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);

  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden">
        {processes.map((process, index) => (
            <motion.div
            className="relative  p-8 md:p-12 shadow-lg max-w-6xl mx-auto w-full pt-20 pb-20"
            style={{ borderTop: '1px solid rgb(70, 70, 70)', backgroundColor: 'rgb(5, 5, 5)'}}
          >          
              {/* Mobile */}
              <div className="block md:hidden">
                <div className="flex flex-row items-center">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl text-white">(Step {index + 1})</span>
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-2">{process.title}</h3>
                  </div>
                  <div className="ml-4">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="max-w-[70px] w-full h-auto rounded filter grayscale"
                    />
                  </div>
                </div>
                <div className="px-4 pt-5">
                  <p className="text-white text-lg font-small">{process.description}</p>
                  <div
                    className="mt-4 pt-5"
                    onClick={() => setOpenDropdown(index === openDropdown ? null : index)}
                  >
                    <div
                      className="bg-black border-t-2 border-b-2 cursor-pointer pt-4 pb-4"
                      style={{ borderColor: 'rgb(70, 70, 70)' }}
                    >
                      <h4 className="text-2xl font-semibold text-white mb-2 flex justify-between items-center">
                        {process.dropdown.title}
                        <span
                          className={`transform transition-transform duration-300 ${openDropdown === index ? 'rotate-45' : ''
                            }`}
                        >
                          +
                        </span>
                      </h4>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: openDropdown === index ? 'auto' : 0, opacity: openDropdown === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <ul className="list-disc list-inside text-gray-300">
                          {process.dropdown.dropdownPoints.map((point, idx) => (
                            <li key={idx} className="py-2 text-lg">{point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="relative">
          {processes.map((process, index) => (
            <div
              key={index}
              className="w-full h-screen sticky top-0 flex justify-center"
              style={{ zIndex: index, backgroundColor: 'rgb(5, 5, 5)', paddingTop: '10%',borderTop: '1px solid rgb(70, 70, 70)' }}

            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-black rounded-2xl p-8 md:p-12 shadow-lg max-w-6xl mx-auto w-full"
              >

                {/* Desktop */}
                <div className="hidden md:flex flex-row items-start">
                  <div className="pr-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl text-white">(Step {index + 1})</span>
                    </div>
                    <h3 className="text-7xl font-bold text-white mb-2">{process.title}</h3>
                  </div>

                  <div className="px-4 ml-10">
                    <div className="flex justify-between items-center">
                      <p className="text-white text-3xl font-small">{process.description}</p>
                      <div className="pl-4 flex items-center justify-end">
                        <img
                          src={process.image}
                          alt={process.title}
                          className="max-w-[350px] w-full h-auto rounded filter grayscale"
                        />
                      </div>
                    </div>

                    <div
                      className="mt-4"
                      onClick={() => setOpenDropdown(index === openDropdown ? null : index)}
                    >
                      <div
                        className="bg-black border-t-2 border-b-2 cursor-pointer pt-4 pb-4"
                        style={{ borderColor: 'rgb(70, 70, 70)' }}
                      >
                        <h4 className="text-2xl font-semibold text-white mb-2 flex justify-between items-center">
                          {process.dropdown.title}
                          <span
                            className={`transform transition-transform duration-300 ${openDropdown === index ? 'rotate-45' : ''
                              }`}
                          >
                            +
                          </span>
                        </h4>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: openDropdown === index ? 'auto' : 0, opacity: openDropdown === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <ul className="list-disc list-inside text-gray-300">
                            {process.dropdown.dropdownPoints.map((point, idx) => (
                              <li key={idx} className="py-2 text-xl">{point}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div></div>




    </>
  );
};
