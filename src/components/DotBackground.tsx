const DotBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `radial-gradient(#1A502F 3px, transparent 3px)`,
        backgroundSize: '40px 40px',
        opacity: '0.3',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default DotBackground;
