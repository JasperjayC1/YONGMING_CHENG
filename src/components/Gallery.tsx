import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Image as ImageIcon } from "lucide-react";

// 预设图集与记录数据（后续可替换为您的真实照片和描述）
const portfolioItems = [
  {
    id: "internship",
    category: "实习经历",
    date: "2021.06 - 2021.07",
    title: "字节跳动AI课学科支持实习生",
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
      "本次赴奥地利维也纳参加EGU 2026大会，是我科研生涯中一次全方位的洗礼与升华。在为期九天的学术交流中，我不仅在专项分会场进行了口头汇报，还与国际同行进行了深入探讨。以下我将从学术汇报内容、科研方法交流、国际合作互动以及思想感悟与未来展望等几个维度进行详尽阐述。",
      "在本次大会上，我聚焦于自己的核心研究课题，向世界同行汇报了题为《Soil-atmosphere compound drought intensity overrides frequency in constraining future vegetation productivity across China》（土壤-大气复合干旱强度在制约中国未来植被生产力方面超越了干旱频率）的研究成果。值得一提的是，在概念界定上，为了解决同行评议过程中提出的概念定义问题，我将手稿中的核心术语从“碳汇指标”精准调整为了“植被生产力”。我的汇报直击当前生态水文学领域的痛点：以同时表现为低土壤水分（SM）和高饱和水汽压差（VPD）为特征的土壤-大气复合干旱，正对陆地植被生产力构成日益严重的威胁。尽管植被可以通过生理响应耐受轻度干旱，但极端干旱依然会导致不可逆的损伤。我们在研究中开发了一个数据驱动框架，用于识别中国范围内植被对复合干旱的非线性响应阈值。利用2001至2020年的观测数据，我们发现植被响应并非与干旱的发生呈简单的线性关系，而是存在一个明显的阈值（平均复合干旱指数百分位约14.1%）。一旦低于该阈值，生态系统将从抵抗状态急剧转变为脆弱状态（即生态干旱），导致光合功能骤降，平均总初级生产力（GPP）异常值从 -0.84 暴跌至 -4.57 gC m⁻² mon⁻¹。在评估未来CMIP6情景（2081-2100）时，我向与会专家特别强调了一个关键的模型参数设定细节：在我们的研究中，干旱发生情况是明确按“事件数/总月数”来衡量的，而不是一个宽泛的频率比率。基于这一严谨的参数基准，我们证实了阈值驱动的脆弱性在未来依然存在，生态干旱在两种排放情景下将分别在超过56%和61%的植被区域更频繁地发生。更为关键的是，我们揭示了GPP损失的幅度主要由干旱“强度”而非“频率”主导。在SSP5-8.5高排放情景下，复合干旱强度的加速率是频率的2.32倍，导致了比低排放情景下更严重的平均GPP损失（-28.17 vs -24.59 gC m⁻² mon⁻¹）。这些发现有力地证明了干旱强度是制约陆地植被生产力的首要驱动力。为了让这项研究成果推向更高水平的平台，在2026年2月至5月期间，我系统性地管理了这篇关于复合干旱强度的主要研究论文的准备、修订和投稿目标跟踪工作，目标期刊包括《Global Change Biology》、《Communications Earth & Environment》以及《Earth's Future》等业界顶刊。",
      "在与各国学者的海报交流与茶歇讨论中，科研方法的底层逻辑成为了我们探讨的焦点。在日常研究中，我高度依赖 Python 编程来进行复杂的水文气象数据处理和深度学习应用，我向国际同行分享了代码工具库的实战经验，我还与同行深入交流了我近期开发和完善的数据驱动及机器学习预测架构，具体包括我所实现的长短期记忆网络（LSTM）和卷积长短期记忆网络（CNN-LSTM）配置。我分享了此前为实现流域日径流预测而专门提供并优化的 Seq2Seq CNN-LSTM 模型的网络拓扑脚本。这些前沿深度学习技术在解决大尺度水文气候建模中的应用，分享了我在交叉前沿领域的技术积累，也引起了许多学者的浓厚兴趣。参加EGU的另一大巨大收获，是能够与国际顶尖学者进行面对面的直接对话。在我的学术网络中，我一直与 Akash Koppa 教授保持着积极的学术合作和手稿共同作者关系。在本次复合干旱研究的推进过程中，我与 Akash Koppa 教授针对论文进行了多轮的手稿修改和意见交换。通过在EGU大会上的所见所闻，我将现场获取的最新学术反馈及时融入到我们的合作研究中，极大地丰富了论文的讨论深度。通过大会这一国际平台，我不仅巩固了现有的国际合作关系，还结识了来自世界各地的优秀青年学者，为未来的跨国界科研合作铺平了道路。",
      "“读万卷书，行万里路”，站在维也纳的国际会议中心，看着满场各个肤色的学者，我的内心深受触动。通过本次活动，我不仅学习到了水文科学领域最前沿的技术革新，更感受到了一种截然不同的科研氛围——一种敢于打破常规、勇于进行跨学科底层创新的魄力。但这同时也让我深刻地意识到，我国在应对全球气候变化、保障农业水资源安全方面，依然肩负着艰巨的时代重任，同时始终向世界贡献着中国智慧和方案。在此，我由衷地感谢伟大的党和国家，感谢国家对高等教育事业和基础科研的战略性投入。正是因为国家日益强盛，才有了“优学CAU”这样优秀的平台，让我们这些普通的青年学子能够走向世界舞台中央。作为新时代的农大水利人，我始终牢记“解民生之多艰，育天下之英才”的校训，心怀对国家、对党的感恩，深刻体会到国家、学校多层次国际化资助体系对青年科研人才成长的托举作用，进一步坚定扎根科研、学成报国的理想信念。展望未来，我已成功获得了2025年国家留学基金委（CSC）奖学金，不久将前往澳大利亚进行深造。我将把此次在EGU大会上汲取的灵感带到澳洲，去深入学习他们在生态水文监测、农业水资源精细化管理以及新一代人工智能气候预测方面的新技术与新知识。我立志将所学的国际前沿技术与中国本土的生态水文特征深度结合，投身于祖国的水利基础设施建设与农业绿色发展事业中，为筑牢我国的生态与粮食安全屏障贡献自己的力量，论文写在祖国的大地上。",
    ],
    gallery: [
        "/gallery-5.jpg",
        "/huiyi.jpg",
    ]
  },
  {
    id: "team",
    category: "团队与领导力",
    date: "2022.04 - 2023.05",
    title: "党团工作与组织管理实践",
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
      "/drhd7.jpg",
      "/drhd8.jpg",
      "/drhd9.jpg",
      "/drhd10.jpg",
      "/drhd11.jpg",
      "/drhd13.jpg",
      "/drhd14.jpg",
      "/drhd15.jpg",
      "/drhd16.jpg",
      "/drhd18.jpg",
      "/drhd19.jpg",
      "/drhd21.jpg",
      "/drhd22.jpg",
      "/drhd23.jpg",
    ]
  },
  {
    id: "social-volunteer",
    category: "社会实践",
    date: "2018 - 2025",
    title: "国家重大活动与校园公益志愿实践纪实",
    coverImage: "/shsj1.jpg",
    content: [
    "一、重大活动保障与高端会务服务",
    "参与中国抗日战争暨世界反法西斯战争胜利80周年纪念活动，承担现场人员协调与流程衔接工作，保障大型集体活动有序开展；在中国农业大学建校120周年高质量发展大会上，负责副厅级领导的一对一会务保障，全流程完成会前对接、现场服务与会后跟进，确保参会工作闭环落地。此外，还曾参与学院60周年院庆、迎新等大型活动志愿服务，积累了丰富的大型现场组织与会务协调经验。",

    "二、招生宣传与对外沟通实践",
    "作为中国农业大学湖北省招生宣传志愿者，面向高考考生及家长开展招生咨询宣讲，解答报考疑问，传递院校信息，完成对外沟通答疑工作；同时参与学校2023年官方招生宣传片《看见》的拍摄录制，配合脚本演绎与镜头呈现，助力学校形象对外展示。早年还曾担任“薪火相传”回访高中母校活动负责人，统筹团队完成宣讲策划、对外联络与现场宣讲，面向高中生开展科普宣传，锻炼了方案策划与多方协调能力。",

    "三、校园服务、公益志愿与文艺活动",
    "在校期间，积极投身校园疫情防控志愿服务，先后加入战疫先锋队和应急保障队伍，协助落实防疫措施；参与北京市六道口地铁站引导、红十字血液中心无偿献血等社会公益行动，践行社会责任。同时融入校园文化建设，参加“一二·九”文艺展演合唱团，并在学院60周年院庆、迎新等活动中承担服务保障工作，兼顾志愿服务与文艺实践，展现出积极向上的青年风貌。"

    ],
    gallery: [
      "/shsj2.jpg",
      "/shsj3.jpg",
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
  },

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
