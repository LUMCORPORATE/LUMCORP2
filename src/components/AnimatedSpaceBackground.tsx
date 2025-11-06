import { useEffect, useRef } from 'react';

const AnimatedSpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacityChange: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.1;
        this.speedY = (Math.random() - 0.5) * 0.1;
        this.opacity = Math.random();
        this.opacityChange = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Twinkle effect
        this.opacity += this.opacityChange;
        if (this.opacity <= 0 || this.opacity >= 1) {
          this.opacityChange = -this.opacityChange;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Planet class
    class Planet {
      x: number;
      y: number;
      size: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;
      centerX: number;
      centerY: number;

      constructor() {
        this.centerX = Math.random() * canvas.width;
        this.centerY = Math.random() * canvas.height;
        this.distance = Math.random() * 200 + 100;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1);
        this.size = Math.random() * 30 + 15;
        
        const colors = [
          'rgba(100, 180, 255, 0.3)',
          'rgba(80, 150, 255, 0.3)',
          'rgba(120, 200, 255, 0.3)',
          'rgba(60, 160, 255, 0.3)'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.x = this.centerX + Math.cos(this.angle) * this.distance;
        this.y = this.centerY + Math.sin(this.angle) * this.distance;
      }

      update() {
        this.angle += this.speed;
        this.x = this.centerX + Math.cos(this.angle) * this.distance;
        this.y = this.centerY + Math.sin(this.angle) * this.distance;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Planet glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color.replace('0.3', '0.1'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create stars and planets
    const stars: Star[] = [];
    const planets: Planet[] = [];
    
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }
    
    for (let i = 0; i < 3; i++) {
      planets.push(new Planet());
    }

    // Animation loop
    const animate = () => {
      // Create space background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a1f');
      gradient.addColorStop(0.5, '#0a1a3e');
      gradient.addColorStop(1, '#0a0a1f');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw planets
      planets.forEach(planet => {
        planet.update();
        planet.draw(ctx);
      });

      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ minHeight: '100vh' }}
    />
  );
};

export default AnimatedSpaceBackground;
