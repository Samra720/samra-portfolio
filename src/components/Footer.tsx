import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function Footer() {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    setTargetUrl(url);
  };

  const confirmLeave = () => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      setTargetUrl(null);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/syeda-samra-ali-590878283/" },
    { name: "GitHub", url: "https://github.com/Samra720" },
    { name: "Dev.to", url: "https://dev.to/samra-dev" },
    { name: "Live Demos", url: "https://vercel.com/samra-projects" },
  ];

  return (
    <footer className="text-muted px-6 md:px-12 xl:px-24 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full py-12 border-t-2 border-main">

        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.url)}
              className="text-lg md:text-xl pb-1 hover:border-b-2 hover:text-main border-main/30 cursor-pointer transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-center text-sm md:text-base opacity-80">
          Personal portfolio © {new Date().getFullYear()} Samra
        </p>
      </div>

      <ConfirmModal
        isOpen={!!targetUrl}
        onClose={() => setTargetUrl(null)}
        onConfirm={confirmLeave}
        url={targetUrl || ""}
      />
    </footer>
  );
}
