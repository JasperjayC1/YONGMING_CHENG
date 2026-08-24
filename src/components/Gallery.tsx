import React from "react";

const Gallery = () => {
  // Placeholder images - can be replaced with real ones
  const photos = [
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "字节跳动实习纪实" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", title: "学术会议交流" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", title: "团队建设与协作" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", title: "项目现场" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">图集与记录</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, idx) => (
          <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-video bg-neutral-100">
            <img 
              src={photo.src} 
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-medium text-lg">{photo.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-neutral-400 mt-8">
        * 以上图片为示例，可替换为您真实的实习、活动照片
      </p>
    </section>
  );
};

export default Gallery;
