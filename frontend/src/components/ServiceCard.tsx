import { FaArrowRight } from "react-icons/fa6";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div
      className="group min-w-75 h-80 p-10 border rounded-xl transition-all duration-100 hover:border-b-4"
      style={{
        borderColor: 'var(--card-border)', // This keeps all 4 borders the same by default
        backgroundImage: `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`,
        // REMOVED borderBottomColor from here so it defaults to the same color as the others
      }}
      onMouseEnter={(e) => {
        // 1. Change the bottom border color ONLY on hover
        e.currentTarget.style.borderBottomColor = 'var(--card-hover-border)';
        
        // 2. Handle the "Inversion" for Light Theme
        if (document.documentElement.getAttribute('data-theme') === 'light') {
          // e.currentTarget.style.backgroundColor = 'var(--card-hover-bg)';
          e.currentTarget.style.backgroundImage = 'none';
          e.currentTarget.style.color = 'var(--card-hover-text)';
        } else {
          e.currentTarget.style.color = 'var(--card-hover-text)';
        }
      }}
      onMouseLeave={(e) => {
        // 3. Reset the bottom border back to the uniform color
        e.currentTarget.style.borderBottomColor = 'var(--card-border)';
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`;
        e.currentTarget.style.color = 'var(--card-text)';
      }}
    >
      <div className="flex flex-col justify-between h-full w-50 pointer-events-none">
        <div className="text-4xl">{icon}</div>

        <h3 className="text-3xl font-medium" style={{ color: 'inherit' }}>
          {title}
        </h3>

        <p 
          className="text-lg transition-colors duration-300 flex items-center"
          style={{ color: 'var(--card-link)' }}
          // Ensure the link also turns white when the whole card is hovered
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--card-hover-text)')}
        >
          Read more <FaArrowRight className="inline ml-2 text-lg" />
        </p>
      </div>
    </div>
  );
}


// function ServiceCard({ icon, title, link }: ServiceCardProps) {
//   return (
//     <div
//       className="group min-w-75 h-80 p-10 border rounded-xl transition-all duration-100 hover:border-b-4"
//       style={{
//         borderColor: 'var(--card-border)',
//         backgroundImage: `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`,
//         borderBottomColor: 'var(--card-hover-border)'
//       }}
//       // This Tailwind 'hover:' logic handles the "Invert" on hover
//       onMouseEnter={(e) => {
//         e.currentTarget.style.backgroundColor = 'linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))';
//         e.currentTarget.style.backgroundImage = 'none';
//         e.currentTarget.style.color = 'var(--card-hover-text)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.backgroundColor = 'transparent';
//         e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, var(--card-bg-from), var(--card-bg-to))`;
//         e.currentTarget.style.color = 'var(--card-text)';
//       }}
//     >
//       <div className="flex flex-col justify-between h-full w-50">
//         <div className="text-4xl">{icon}</div>

//         <h3 className="text-3xl font-medium" style={{ color: 'inherit' }}>
//           {title}
//         </h3>

//         <a
//           href={link}
//           className="text-lg transition-colors duration-300 flex items-center"
//           style={{ color: 'var(--card-link)' }}
//           // Ensure the link also turns white when the whole card is hovered
//           onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--card-hover-text)')}
//         >
//           Read more <FaArrowRight className="inline ml-2 text-lg" />
//         </a>
//       </div>
//     </div>
//   );
// }

export default ServiceCard;
