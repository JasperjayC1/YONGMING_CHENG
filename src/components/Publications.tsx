import React from "react";
import { publications } from "../data";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">科研成果</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>
      
      <div className="space-y-8">
        {publications.map((pub, idx) => (
          <div key={idx} className="group p-6 bg-white rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-colors">
            <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
              {pub.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-3">{pub.authors}</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-neutral-900 italic">{pub.journal}, {pub.year}</span>
              {pub.rank && (
                <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">
                  {pub.rank}
                </span>
              )}
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors ml-auto">
                  <span>查看原文</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
