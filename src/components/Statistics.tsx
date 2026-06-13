import React, { useEffect, useState } from 'react';
import { stats } from '../content/siteContent';
import { Stagger, StaggerItem } from './AnimateIn';

const Statistics: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            const duration = 1500;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setValues(
                stats.map((stat) => {
                  if ('staticDisplay' in stat) return 0;
                  const target = stat.value;
                  const current = target * progress;
                  return stat.decimals ? Math.round(current * 10) / 10 : Math.floor(current);
                })
              );
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    const element = document.querySelector('.stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [animated]);

  const colors = [
    'from-[#3c1642] to-[#086375]',
    'from-[#086375] to-[#1dd3b0]',
    'from-[#1dd3b0] to-[#affc41]',
    'from-[#3c1642] to-[#1dd3b0]',
  ];

  return (
    <section className="py-20 bg-gray-50 stats-section" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">
          Results by the numbers
        </h2>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label} variant="scaleIn">
              <div
                className={`bg-gradient-to-br ${colors[index % colors.length]} rounded-xl p-8 text-white shadow-lg text-center min-h-[140px] flex flex-col justify-center hover:scale-[1.03] hover:shadow-xl transition-all duration-500`}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                  {'staticDisplay' in stat ? (
                    stat.staticDisplay
                  ) : (
                    <>
                      {stat.prefix}
                      {stat.decimals ? values[index].toFixed(1) : values[index]}
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-base md:text-lg text-white/95">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Statistics;
