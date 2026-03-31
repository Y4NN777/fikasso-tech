export default function Logo({ className = "", scale = 1 }: { className?: string, scale?: number }) {
  // Custom SVG and Text rendering to mimic the provided Fikasso branding
  return (
    <div className={`flex items-center select-none ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <img src="/Logo_Fikasso_security_2_260331_014143-removebg-preview%20(1).png" alt="FikassoTech Security" className="h-10 md:h-12 w-auto object-contain" />
    </div>
  );
}
