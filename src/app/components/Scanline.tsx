export const Scanline = () => {
    return (
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
        <div className="animate-scan absolute inset-0 h-[100px] w-full bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
      </div>
    );
  };