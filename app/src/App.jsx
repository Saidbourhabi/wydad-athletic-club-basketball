import { FaInstagram, FaXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";

const App = () => {
  const backgroundImage = "https://res.cloudinary.com/dgzn9nczh/image/upload/v1782412647/wac-basketabll_fufymd.jpg";

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[1px]" />
      <div className="relative z-20 flex h-full  items-center justify-center px-6 py-12 md:py-16">
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <a
            href="https://instagram.com/wacbasketball"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300 hover:scale-110 hover:text-[#fc0000]"
          >
            <FaInstagram className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <a
            href="https://twitter.com/wacbasketball38"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transition-all duration-300 hover:scale-110 hover:text-[#fc0000]"
          >
            <FaXTwitter className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <a
            href="https://tiktok.com/@wacbasketball"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="transition-all duration-300 hover:scale-110 hover:text-[#fc0000]"
          >
            <FaTiktok className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          <a
            href="https://youtube.com/@wacbasketball38"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-all duration-300 hover:scale-110 hover:text-[#fc0000]"
          >
            <FaYoutube className="h-6 w-6 md:h-7 md:w-7" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default App;