export function ScrollButton({ targetId, children }) {
    const handleClick = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button onClick={handleClick}>
        {children}
      </button>
    );
  }