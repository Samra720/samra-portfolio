import { FaArrowRight } from "react-icons/fa6";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div
      className="group min-w-75 h-80 p-10 border rounded-xl transition-all duration-100 hover:border-b-4 w-[85vw] md:w-[45vw] lg:w-80 shrink-0 snap-center"
      style={{
        borderColor: 'var(--card-border)',
        backgroundImage: `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderBottomColor = 'var(--card-hover-border)';

        if (document.documentElement.getAttribute('data-theme') === 'light') {
          e.currentTarget.style.backgroundImage = 'none';
        } else {
          e.currentTarget.style.color = 'var(--card-hover-text)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderBottomColor = 'var(--card-border)';
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`;
        e.currentTarget.style.color = 'var(--card-text)';
      }}
    >
      <div className="flex flex-col justify-between h-full w-full min-[1400px]:w-50 items-center min-[1400px]:items-start text-center min-[1400px]:text-left pointer-events-none">
        <div className="text-4xl mb-4 min-[1400px]:mb-0">{icon}</div>

        <h3 className="text-2xl md:text-3xl font-medium mb-4 min-[1400px]:mb-0">
          {title}
        </h3>

        <p className="text-lg flex items-center justify-center min-[1400px]:justify-start">
          Read more <FaArrowRight className="inline ml-2 text-lg" />
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
