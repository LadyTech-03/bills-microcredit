import { Target, Eye, Banknote } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";



const MissionVision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Mission - Full Width Banner */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-primary">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TbTargetArrow className="w-7 h-7 text-primary" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                To provide convenient and quick credit service to small and medium businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Loan Amount - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GiStairsGoal className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white pt-2">Our Vision</h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed pl-16">
              To be the leading micro-credit institution of choice.
            </p>
          </div>

          {/* Loan Amount */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 shadow-lg border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <PiHandCoins className="w-7 h-7 text-primary" strokeWidth={2.5} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">We give loans up to</h3>
            </div>
            <div className="text-5xl font-black text-primary mb-2">GH₵ 200,000</div>
            {/* <p className="text-gray-700 dark:text-gray-300">
              Supporting your biggest dreams and ambitions
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
