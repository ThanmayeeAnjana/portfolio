export default function StarsBackground() {
  const stars = Array.from({ length: 200 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random(),
            boxShadow: "0 0 8px white",
            animationDuration: `${Math.random() * 4 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}