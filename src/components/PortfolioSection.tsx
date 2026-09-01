import { PORTFOLIO_PROJECTS } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#8B481E] mb-3 px-3.5 py-1.5 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] shadow-subtle font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B]" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
              Recent <span className="font-serif-display italic font-normal text-[#9A5328]">Projects.</span>
            </h2>
          </div>
          
          <p className="text-[#5E5245] text-sm max-w-sm leading-relaxed">
            A look at some of the high-performance digital products and automation engines we've recently launched.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#FBF9F5] transition-all hover:border-[#C8BCAB] hover:shadow-card flex flex-col"
            >
              {/* Image / Graphic Placeholder */}
              <div 
                className="aspect-video w-full p-6 relative overflow-hidden flex items-center justify-center border-b border-[#E5DFD5]"
                style={{ backgroundColor: `${project.accentColor}10` }}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                <h3 
                  className="text-4xl font-display font-bold relative z-10"
                  style={{ color: project.accentColor }}
                >
                  {project.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#8B481E] bg-[#F5ECE2] px-2.5 py-1 rounded-full border border-[#E7DAC9]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#7A6E60]">
                    {project.timeline}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-[#141F2D] font-display mb-2 group-hover:text-[#9A5328] transition-colors">
                  {project.tagline}
                </h4>
                
                <p className="text-xs text-[#5E5245] leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-[#EFE9DF]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techTags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-[#6A5E52] bg-white border border-[#E5DFD5] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-sm font-bold text-[#141F2D] font-display">{metric.split(' ')[0]}</div>
                        <div className="text-[10px] text-[#7A6E60] font-mono uppercase mt-0.5">{metric.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 rounded-2xl bg-[#141F2D] p-6 sm:p-8 text-center text-white relative overflow-hidden shadow-card">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <p className="text-lg sm:text-xl font-display font-medium tracking-tight mb-2 relative z-10">
            <span className="text-[#D8C6B6]">40% faster Delivery time</span> than Traditional Teams
          </p>
          <p className="text-[#A09383] text-sm relative z-10 font-mono">
            Our fastest launch? 14 days. Our average? 20.
          </p>
        </div>
      </div>
    </section>
  );
}
