export const scrollToId = (
  e: React.MouseEvent<any> | null, 
  id: string
) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation(); 
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};