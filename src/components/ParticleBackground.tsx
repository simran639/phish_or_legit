import React, { useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Convert SVG React component to image
    const svgToImg = (svg: JSX.Element, color: string) => {
      const svgString = ReactDOMServer.renderToStaticMarkup(
        React.cloneElement(svg, { color, width: 24, height: 24 })
      );
      const img = new window.Image();
      img.src = `data:image/svg+xml;base64,${window.btoa(svgString)}`;
      return img;
    };

    const iconImages = [
      svgToImg(<AlertTriangle />, '#ef4444'), // red
      svgToImg(<CheckCircle />, '#22c55e'),   // green
    ];

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      iconIdx: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 40));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 24 + 16,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.3,
          iconIdx: Math.floor(Math.random() * iconImages.length),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const img = iconImages[particle.iconIdx];
        ctx.globalAlpha = particle.opacity;
        ctx.drawImage(img, particle.x, particle.y, particle.size, particle.size);
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();

    // Wait for all images to load before starting animation
    Promise.all(iconImages.map(img => new Promise(res => {
      img.onload = res;
    }))).then(() => animate());

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #1e40af 100%)' }}
    />
  );
}