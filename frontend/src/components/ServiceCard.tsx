import { FaArrowRight } from "react-icons/fa6";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

function ServiceCard({ icon, title, link }: ServiceCardProps) {
  return (
    <div className="min-w-75 h-80 p-10 border border-gray-800 rounded-xl bg-linear-to-b from-gray-900/60 to-black hover:border-b-4 hover:border-b-white">
      <div className="flex flex-col justify-between h-full w-50">
        {icon}
        <h3 className="text-3xl">{title}</h3>
        <a href={link} className="text-lg text-gray-400 hover:text-white">
          Read more <FaArrowRight className="inline pb-1 ml-1 text-lg" />
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
