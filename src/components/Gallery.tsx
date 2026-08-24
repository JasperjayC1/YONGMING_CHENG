import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Image as ImageIcon } from "lucide-react";

// 预设图集与记录数据（后续可替换为您的真实照片和描述）
const portfolioItems = [
  {
    id: "internship",
    category: "实习与实践",
    date: "2021.06 - 2021.07",
    title: "字节跳动 AI 课实习纪实",
    coverImage: "/tiktok2.jpg",
    content: [
      "在字节跳动担任 AI 课学科支持实习生期间，我深入参与了多平台教学配课与课程内容的审核工作。这不仅要求对知识点有精确的把握，还需要具备系统化的框架搭建能力。",
      "依托 CMS 内容管理系统，我梳理了配课题组、讲解容器等核心组件，实现了课程内容的模块化搭建。从建立工作台账到同步跟进优化整改，这段经历极大地锻炼了我的工程化思维与多任务推进能力。"
    ],
    gallery: [
      "/tiktok1.jpg",
      "/tiktok3.jpg"
    ]
  },
  {
    id: "academic",
    category: "学术与交流",
    date: "2021 - 2025",
    title: "学术会议与科研探讨",
    coverImage: "/gallery-6.jpg",
    content: [
      "在硕博连读期间，我多次参与国内外的学术会议，与领域内的专家学者进行深入交流。我的研究聚焦于多因子耦合系统，探讨干旱传播与生态响应的复杂机制。",
      "通过这些学术交流，我不断拓宽研究视野，将物理机制转化为可量化、可优化的技术方案，为后续的专利申请和顶级期刊论文发表奠定了坚实的基础。"
    ],
    gallery: [
        "/gallery-5.jpg"
    ]
  },
  {
    id: "team",
    category: "团队与领导力",
    date: "2022.04 - 2023.05",
    title: "党支部与团队建设",
    coverImage: "/drhd1.jpg",
    content: [
      "担任水利研究生第三党支部书记期间，我负责统筹支部的日常管理与各项活动的策划执行。我们不仅组织了多次内部学习，还牵头联合多个学院和支部开展了大型主题活动。",
      "跨部门的沟通协调、资源的统筹分配，让我在专业科研之外，培养了卓越的团队管理与组织能力，保障各项工作闭环执行。"
    ],
    gallery: [
      "/drhd2.jpg",
      "/drhd3.jpg",
      "/drhd4.jpg",
      "/drhd5.jpg",
      "/drhd6.jpg",
      "/drhd7.jpg",
      "/drhd8.jpg",
      "/drhd9.jpg",
      "/drhd10.jpg",
      "/drhd11.jpg",
      "/drhd12.jpg",
      "/drhd13.jpg",
    ]
  },
  {
    id: "honors",
    category: "专利与荣誉",
    date: "2021 - 2025",
    title: "发明专利与奖学金证书",
    coverImage: "/zs1.jpg",
    content: [
      "在学术和实践的双重驱动下，我获得了国家奖学金、“中国茅台·国之栋梁”本硕博优才计划、国家建设高水平大学公派研究生项目资助等多项殊荣。",
      "此外，在复杂系统建模与阈值识别领域，我主导申请并拥有两项授权发明专利，这是对我将科研理论转化为实际工程方案能力的最佳认可。"
    ],
    gallery: [
      "/zs17.jpg",
      "/zs2.jpg",
      "/zs3.jpg",
      "/zs4.jpg",
      "/zs5.jpg",
      "/zs6.jpg",
      "/zs7.jpg",
      "/zs8.jpg",
      "/zs9.jpg",
      "/zs10.jpg",
      "/zs11.jpg",
      "/zs12.jpg",
      "/zs13.jpg",
      "/zs14.jpg",
      "/zs15.jpg",
      "/zs16.jpg",
    ]
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  // 当弹窗打开时，锁定背景页面的滚动
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedItem]);

  return (
    <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-3xl font-serif font-bold text-neutral-900">图集与记录</h2>
        <div className="flex-1 h-px bg-neutral-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer flex flex-col gap-5"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100">
              <motion.img
                layoutId={`image-${item.id}`}
                src={item.coverImage}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover 悬浮图标 */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <ArrowRight size={20} className="text-neutral-900" />
              </div>
            </div>
            
            <div className="px-1">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{item.category}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                <span className="text-xs font-medium text-neutral-400">{item.date}</span>
              </div>
              <motion.h3 layoutId={`title-${item.id}`} className="text-2xl font-serif font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-neutral-400 mt-16">
        * 以上展示卡片均可点击进入详情，建议您替换为真实的影像记录。
      </p>

      {/* 沉浸式图文弹窗 */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            />
            
            {/* 弹窗主体内容 */}
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="relative w-full h-full max-h-[95vh] overflow-y-auto bg-white shadow-2xl md:w-[95vw] md:h-[90vh] md:rounded-3xl md:max-w-5xl z-10 flex flex-col rounded-2xl custom-scrollbar"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* 弹窗大图区域 */}
              <div className="relative h-80 md:h-[450px] flex-shrink-0">
                <motion.img
                  layoutId={`image-${selectedItem.id}`}
                  src={selectedItem.coverImage}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70"></div>
                
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                  <div className="flex items-center gap-3 mb-4 text-white/90">
                    <span className="text-sm font-semibold uppercase tracking-wider">{selectedItem.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    <span className="text-sm font-medium">{selectedItem.date}</span>
                  </div>
                  <motion.h2 layoutId={`title-${selectedItem.id}`} className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                    {selectedItem.title}
                  </motion.h2>
                </div>
              </div>

              {/* 弹窗文字与附加图片区域 */}
              <div className="p-8 md:p-16 flex-1 bg-white">
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-6 mb-16">
                    {selectedItem.content.map((paragraph, idx) => (
                      <p key={idx} className="text-lg text-neutral-700 leading-loose">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                    <div className="pt-8 border-t border-neutral-100">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 uppercase tracking-wider mb-8">
                        <ImageIcon size={18} /> 
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedItem.gallery.map((img, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden bg-neutral-100 aspect-[4/3] shadow-sm">
                            <img src={img} alt={`${selectedItem.title} 附图 ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
