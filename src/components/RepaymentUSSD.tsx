import { Smartphone } from "lucide-react";

const paymentSteps = [
  {number: 1, title: "Dial the USSD code"},
  {number: 2, title: "Follow the prompts"},
  {number: 3, title: "Get instant confirmation"},
]

const RepaymentUSSD = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* USSD Codes Banner - Full Width */}
        <div className="bg-primary rounded-2xl p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-white">Repay with USSD</h3>
            </div>

            {/* USSD Codes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Code 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-white mb-3">
                  *928*222#
                </div>
                {/* <p className="text-white/80 text-sm font-medium">
                  All Networks
                </p> */}
              </div>

              {/* Code 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl sm:text-6xl font-black text-white mb-3">
                  *779#
                </div>
                {/* <p className="text-white/80 text-sm font-medium">
                  AirtelTigo
                </p> */}
              </div>
            </div>

            {/* Instructions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {paymentSteps.map((step) => (
                <div key={step.number} className="bg-white/5 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepaymentUSSD;
