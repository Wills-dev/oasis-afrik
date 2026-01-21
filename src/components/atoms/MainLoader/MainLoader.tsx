import Logo from "../Logo/Logo";

const MainLoader = () => {
  return (
    <div className="relative min-h-screen bg-[#F4F4F4] overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center mb-8">
            <div className="relative m-0">
              <div className="flex items-center justify-center animate-spin-slow">
                <Logo url="/assets/images/logo2.png" />
              </div>
            </div>
            <div className="m-0">
              <h1 className="text-5xl font-bold tracking-tight">
                <span className="text-gray-700">asis</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-green-700">
                  Afrik
                </span>
              </h1>
            </div>
          </div>
          <p className="text-green-700 text-lg font-light text-center tracking-wide">
            Connecting Africa to the World
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default MainLoader;
