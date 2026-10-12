import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface HeroVisualProps {
  onInteract?: () => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expression, setExpression] = useState<'normal' | 'happy' | 'code' | 'thinking'>('normal');
  const [isBlinking, setIsBlinking] = useState(false);
  const [statusMessage, setStatusMessage] = useState('AGENT: ACTIVE');
  const [isDragging, setIsDragging] = useState(false);
  const lastMouseX = useRef(0);

  // Motion values for smooth 3D tilt & eye tracking
  const rotateX = useSpring(0, { damping: 25, stiffness: 180 });
  const rotateY = useSpring(0, { damping: 25, stiffness: 180 });
  const eyeX = useSpring(0, { damping: 20, stiffness: 220 });
  const eyeY = useSpring(0, { damping: 20, stiffness: 220 });

  // Scrubbing value tracking
  const scrubValue = useMotionValue(0);

  useEffect(() => {
    // Periodic blinking cycle
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const currentX = e.clientX;
    const deltaX = currentX - lastMouseX.current;
    lastMouseX.current = currentX;

    // Horizontal mouse scrubbing sensitivity = 0.8
    const SENSITIVITY = 0.8;
    const currentScrub = scrubValue.get();
    scrubValue.set(Math.max(-25, Math.min(25, currentScrub + deltaX * SENSITIVITY * 0.1)));

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    // Limit rotation angle
    rotateY.set(Math.max(-14, Math.min(14, offsetX * 16)));
    rotateX.set(Math.max(-10, Math.min(10, -offsetY * 12)));

    // Eye gaze limits
    eyeX.set(Math.max(-14, Math.min(14, offsetX * 18)));
    eyeY.set(Math.max(-10, Math.min(10, offsetY * 12)));
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    eyeX.set(0);
    eyeY.set(0);
    setIsDragging(false);
  };

  const cycleExpression = () => {
    const modes: Array<'normal' | 'happy' | 'code' | 'thinking'> = ['normal', 'happy', 'code', 'thinking'];
    const nextIdx = (modes.indexOf(expression) + 1) % modes.length;
    setExpression(modes[nextIdx]);

    const messages = {
      normal: 'AGENT: READY',
      happy: 'IDEAS: FLOWING',
      code: 'STATUS: COMPILING',
      thinking: 'SYSTEM: REASONING',
    };
    setStatusMessage(messages[modes[nextIdx]]);
    if (onInteract) onInteract();
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] mx-auto select-none perspective-[1200px] cursor-pointer"
      onClick={cycleExpression}
      title="Click to change terminal expression"
    >
      {/* Ambient soft ground shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/10 rounded-full blur-xl pointer-events-none" />

      {/* Main 3D Tilted Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex flex-col items-center transition-shadow duration-300"
      >
        {/* Floating subtle telemetry label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -top-10 sm:-top-12 z-20 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[11px] font-mono tracking-wider text-black/75 shadow-xs flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{statusMessage}</span>
          <span className="text-black/30">|</span>
          <span className="text-black/50 text-[10px]">CLICK ME</span>
        </motion.div>

        {/* ================= MONITOR HEAD ================= */}
        <div className="relative z-10 w-[270px] sm:w-[320px] md:w-[340px] aspect-[1/0.95] bg-[#D4D3CE] rounded-[24px] sm:rounded-[28px] p-3 sm:p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.22),inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.18)] border border-[#BEBCB5]">
          {/* Top vents */}
          <div className="flex justify-center gap-1.5 mb-2.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-4 sm:w-5 h-1 bg-[#B5B3AC] rounded-full shadow-inner" />
            ))}
          </div>

          {/* CRT Screen Outer Bezel */}
          <div className="relative w-full aspect-[4/3] bg-[#2A2B2D] rounded-[20px] sm:rounded-[22px] p-2.5 sm:p-3 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.4)] border border-[#1B1B1C]">
            {/* CRT Glass Surface */}
            <div className="relative w-full h-full bg-[#1A1C1D] rounded-[16px] sm:rounded-[18px] overflow-hidden flex items-center justify-center crt-scanlines shadow-[inset_0_0_24px_rgba(0,0,0,0.9)]">
              {/* Screen Glass Glare / Curved Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/12 pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/6 rounded-full blur-2xl pointer-events-none" />

              {/* Dynamic Eyes / Face Expressions */}
              <motion.div
                style={{
                  x: eyeX,
                  y: eyeY,
                }}
                className="relative z-10 flex items-center justify-center gap-9 sm:gap-11 w-full"
              >
                {expression === 'normal' && (
                  <>
                    {/* Left Eye */}
                    <div
                      className={`relative bg-[#FFF4EB] rounded-full shadow-[0_0_22px_#FFF0E0,0_0_40px_rgba(255,230,210,0.6)] transition-all duration-150 ${
                        isBlinking
                          ? 'w-10 sm:w-12 h-1 bg-[#FFE3D0]'
                          : 'w-10 sm:w-12 h-13 sm:h-15'
                      }`}
                    >
                      <div className="absolute inset-0 bg-radial from-white to-[#FCE6D2] rounded-full" />
                    </div>

                    {/* Right Eye */}
                    <div
                      className={`relative bg-[#FFF4EB] rounded-full shadow-[0_0_22px_#FFF0E0,0_0_40px_rgba(255,230,210,0.6)] transition-all duration-150 ${
                        isBlinking
                          ? 'w-10 sm:w-12 h-1 bg-[#FFE3D0]'
                          : 'w-10 sm:w-12 h-13 sm:h-15'
                      }`}
                    >
                      <div className="absolute inset-0 bg-radial from-white to-[#FCE6D2] rounded-full" />
                    </div>
                  </>
                )}

                {expression === 'happy' && (
                  <>
                    {/* Happy curved eyes ^ ^ */}
                    <div className="w-11 sm:w-13 h-7 sm:h-8 border-t-[5px] sm:border-t-[6px] border-[#FFF4EB] rounded-t-full shadow-[0_-2px_18px_#FFF0E0]" />
                    <div className="w-11 sm:w-13 h-7 sm:h-8 border-t-[5px] sm:border-t-[6px] border-[#FFF4EB] rounded-t-full shadow-[0_-2px_18px_#FFF0E0]" />
                  </>
                )}

                {expression === 'code' && (
                  <div className="font-mono text-xs sm:text-sm text-emerald-400 font-semibold tracking-wider text-center px-4 leading-relaxed shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                    <div>{`> run_workflow()`}</div>
                    <div className="text-[11px] text-emerald-300/80">{`confidence: 0.98`}</div>
                    <div className="text-[10px] text-white/70">{`[OK] deployed`}</div>
                  </div>
                )}

                {expression === 'thinking' && (
                  <div className="flex flex-col items-center gap-1.5 font-mono text-[#FFE8D6]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFE8D6] animate-ping" />
                      <span className="text-xs tracking-widest">EVALUATING</span>
                    </div>
                    <div className="text-[10px] text-white/50 tracking-wide">REASONING OVER WORKFLOW</div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Phosphor Status Watermark */}
              <div className="absolute bottom-1.5 right-3 font-mono text-[8px] sm:text-[9px] text-white/20 tracking-widest pointer-events-none">
                PRANAV-OS // 2026
              </div>
            </div>
          </div>

          {/* Lower Control Bar on Monitor */}
          <div className="mt-2.5 sm:mt-3 flex items-center justify-between px-1">
            {/* Floppy disk slot & Label */}
            <div className="flex items-center gap-2">
              <div className="w-16 sm:w-20 h-1.5 bg-[#9E9B93] rounded-xs shadow-inner" />
              <div className="text-[9px] sm:text-[10px] font-heading font-semibold tracking-wider text-black/55 uppercase">
                PRANAV
              </div>
            </div>

            {/* LED and Contrast Dials */}
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981] animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#B2B0A8] border border-[#8E8B83] shadow-xs" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#B2B0A8] border border-[#8E8B83] shadow-xs" />
            </div>
          </div>
        </div>

        {/* Neck connector */}
        <div className="w-14 sm:w-16 h-3 bg-[#AFAEA7] border-x border-[#9A9890] shadow-inner" />

        {/* ================= DEVELOPER SILHOUETTE / BLAZER ================= */}
        <div className="relative w-[340px] sm:w-[420px] md:w-[460px] h-[190px] sm:h-[220px] overflow-hidden -mt-1">
          {/* Collared Shirt */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 flex justify-center z-1">
            {/* Left collar */}
            <div className="w-10 sm:w-12 h-14 bg-white border border-black/10 shadow-sm transform -rotate-25 origin-top-right rounded-bl-sm" />
            {/* Right collar */}
            <div className="w-10 sm:w-12 h-14 bg-white border border-black/10 shadow-sm transform rotate-25 origin-top-left rounded-br-sm" />
            {/* Inner shirt center with subtle buttons */}
            <div className="absolute top-4 w-4 h-16 bg-[#F8F8F8] flex flex-col items-center gap-3 pt-2">
              <div className="w-1 h-1 rounded-full bg-black/30" />
              <div className="w-1 h-1 rounded-full bg-black/30" />
            </div>
          </div>

          {/* Tailored Grey Blazer */}
          <div className="absolute top-4 inset-x-0 bottom-0 z-2">
            {/* Blazer Base Silhouette */}
            <div className="relative w-full h-full">
              {/* Left Shoulder & Lapel */}
              <div
                className="absolute top-0 left-0 w-[53%] h-full bg-[#64676C] rounded-tl-[48px] shadow-[inset_-5px_0_15px_rgba(0,0,0,0.18)] border-t border-l border-white/20 transform -skew-x-2"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0 100%)',
                }}
              >
                {/* Left Lapel flap */}
                <div className="absolute top-0 right-0 w-16 h-28 bg-[#52555A] shadow-md transform rotate-12 origin-top-right border-l border-white/10" />
                {/* Subtle chest pocket line */}
                <div className="absolute top-20 left-12 w-12 h-1 bg-black/20 rounded-full" />
              </div>

              {/* Right Shoulder & Lapel */}
              <div
                className="absolute top-0 right-0 w-[53%] h-full bg-[#64676C] rounded-tr-[48px] shadow-[inset_5px_0_15px_rgba(0,0,0,0.18)] border-t border-r border-white/20 transform skew-x-2"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 22% 100%)',
                }}
              >
                {/* Right Lapel flap */}
                <div className="absolute top-0 left-0 w-16 h-28 bg-[#52555A] shadow-md transform -rotate-12 origin-top-left border-r border-white/10" />
              </div>

              {/* Center V-neck shadow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-black/10 blur-xs" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
