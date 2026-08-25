import { EducationInfo, ExperienceInfo, PersonalInfo, ProjectInfo, PublicationInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "程泳铭",
  enName: "Cheng Yongming",
  title: "水利工程博士在读 / 数据建模与因果分析研究者",
  email: "1121547761@qq.com",
  phone: "+86 18501176799",
  github: "https://github.com/JasperjayC1",
  researchgate: "https://www.researchgate.net/profile/Cheng-Yongming",
  about: "精通多源数据融合、因果推断与不确定性分析，独立完成复杂系统建模与阈值识别。具备从海量数据中提炼规律并驱动决策的工程化思维。长期研究多因子耦合系统（干旱传播、生态响应），擅长构建多变量联合诊断框架，将物理机制转化为可量化、可优化的技术方案。拥有两项授权发明专利，能快速切入业务痛点并提出系统性解法。"
};

export const education: EducationInfo[] = [
  {
    school: "中国农业大学",
    degree: "水利工程 | 硕博连读（推免保研）",
    gpa: "GPA: 3.88/4.0 (前 10%)",
    date: "2021.9 - 2027.6",
    courses: "核心课程：水文模型软件与应用、水文水资源研究进展、水文遥感、应用数理统计、现代数学"
  },
  {
    school: "中国农业大学",
    degree: "水利水电工程 | 本科",
    gpa: "GPA: 3.68/4.0 (前 20%)",
    date: "2017.9 - 2021.8",
    courses: "核心课程：高等数学、线性代数、工程图学、电工与电子技术、CFD 应用、水力学、结构力学、弹性力学"
  },
  {
    school: "中国农业大学",
    degree: "金融学 | 双学位",
    gpa: "GPA: 3.3/4.0",
    date: "2018.9 - 2020.8",
    courses: "核心课程：国际金融、货币银行学、证券投资学、商业银行经营管理、项目投资评估、经济法"
  }
];

export const experience: ExperienceInfo[] = [
  {
    company: "字节跳动",
    role: "AI 课——学科支持实习生",
    location: "北京",
    date: "2021.6 - 2021.7",
    desc: [
      "协助授课团队完成多平台教学配课、课程内容审核，开展试题标准化打标，保障上线教学内容合规规范；",
      "拆解知识点与内容单元，搭建知识思维导图，依托知识框架完成课程配课设计；",
      "依托 CMS 内容管理系统梳理配课题组、讲解容器等组件，实现课程内容模块化搭建；",
      "持续记录课程搭建过程问题，建立工作台账，同步跟进优化整改；",
      "制作教学配套 PPT，输出课堂教学展示素材。"
    ]
  },
  {
    company: "中国农业大学水利与智能工程学院",
    role: "水利研究生第三党支部书记",
    date: "2022.4 - 2023.5",
    desc: [
      "统筹支部日常管理，落实各项既定安排；独立策划支部主题活动，牵头联合多个学院、多支支部开展联合主题活动；",
      "协调多方资源完成活动全流程落地；对接师生群体，做好沟通协调、材料梳理，保障各项工作闭环执行。"
    ]
  },
  {
    company: "中国农业大学水利与智能工程学院",
    role: "研团委就业实践部部长",
    date: "2021.9 - 2022.8",
    desc: [
      "承接上级部署，统筹部门开展就业服务，合理分配任务，推进各项事务高效落地；",
      "搜集甄别各类就业招聘信息，完成整理、校验与推送，为研究生提供就业资讯支持；承担师生信息对接传导。"
    ]
  },
  {
    company: "中国农业大学水利与智能工程学院",
    role: "本科生第二党支部书记",
    date: "2019.4-2020.4",
    desc: [
      "统筹支部日常管理，落实各项既定安排；独立策划支部主题活动，牵头联合多个学院、多支支部开展联合主题活动；",
      "协调多方资源完成活动全流程落地；对接师生群体，做好沟通协调、材料梳理，保障各项工作闭环执行。"
    ]
  },
  {
    company: "中国农业大学水利与智能工程学院",
    role: "24级博士2班团支书",
    date: "2024.9-2027.6",
    desc: [
      "负责班级团员事务统筹，组织班级集体活动，做好师生信息传递与沟通协调。"
    ]
  },
  {
    company: "中国农业大学水利与智能工程学院",
    role: "党务助管",
    date: "2022.9-2026.9",
    desc: [
      "长期协助学院党委开展日常行政与材料统筹工作，负责各类党务资料整理、校核、归档、台账搭建，规范化梳理海量文书材料，保障资料体系完整可溯源;",
      "承接上级各类通知任务，完成任务拆解、信息汇总、数据统计与上报，高效完成周期性工作闭环;",
      "协助统筹支部活动筹备、人员信息管理、流程对接，协调多方事务，保障学院党建日常工作高效、有序落地。"
    ]
  },
];

export const projects: ProjectInfo[] = [
  {
    title: "中国农业大学研究生自主创新研究基金",
    role: "主持",
    date: "2026.3 - 2027.3",
    desc: [
      "独立主持科研课题，基于 Python、MATLAB 开展长序列环境时序数据清洗、归一化与统计分析；",
      "运用相关性分析、阈值提取方法，量化解析复合干旱场景下多要素交互驱动规律；",
      "完成数据建模、结果可视化及结题报告撰写，完整负责项目全流程推进。"
    ]
  },
  {
    title: "国家自然科学基金面上项目",
    role: "核心参与",
    date: "2024.1 - 2027.12",
    desc: [
      "负责生态水文大数据挖掘与归因分析，依托多源时序数据集，通过统计回归、交互效应分析方法，完成量化表征农业-水-生态正向链式传导全过程；",
      "识别农业-水-生态链式传导的关键驱动因素，量化各要素对生态系统链式响应的贡献度，输出标准化数据分析结论与图表成果。"
    ]
  },
    {
    title: "国家自然科学基金面上项目",
    role: "核心参与",
    date: "2021.1 - 2023.12",
    desc: [
      "聚焦干旱驱动机制智能识别，利用Python和R语言完成海量观测数据预处理与统计建模；",
      "通过因子归因、敏感性分析锁定核心驱动变量，完成多情景数据对比分析，支撑项目机理结论落地。"
    ]
  },
  {
    title: "农业农村部专项项目",
    role: "核心参与",
    date: "2023.12 - 2026.12",
    desc: [
      "主攻深度学习时序预测方向，基于 Python 搭建并迭代 LSTM 神经网络模型；",
      "对海量水文时序数据进行清洗、降噪、特征工程，完成模型训练、参数调优与精度验证，实现径流数据智能预测。"
    ]
  },
  {
    title: "福建省水利水电科学研究院委托项目",
    role: "参与",
    date: "2023.9 - 2026.8",
    desc: [
      "整合多源监测数据集，运用数理统计、物理机制模型结合深度学习算法完成暴雨-洪水响应规律分析；",
      "批量处理长序列观测数据，完成数据校验、对比建模与结果复盘，输出项目仿真分析报告。"
    ]
  },
  {
    title: "内蒙古自治区科技项目",
    role: "参与",
    date: "2022.12 - 2024.12",
    desc: [
      "负责区域水循环大数据处理与趋势挖掘，依托MATLAB完成长时序数据规整、统计分析与趋势拟合；",
      "辨析多驱动因子的影响权重，完成数据可视化与研究结论汇总。"
    ]
  },
    {
    title: "《人工智能在水科学中的应用》数字教材",
    role: "核心编撰",
    date: "2025.7 - 2025.12",
    desc: [
      "参与8校联合数字教材开发，负责AI建模、智能数据分析相关章节内容编撰；",
      "梳理神经网络、数据挖掘通用技术体系，规整教学素材与案例，完成数字化内容搭建与校对。"
    ]
  },
];

export const publications: PublicationInfo[] = [
  {
    authors: "Cheng Yongming, Liu Liu*, Cheng Lei, Fa Keyu, Liu Xingcai, Huo Zailin, Huang Guanhua",
    title: "A shift in the dominant role of atmospheric vapor pressure deficit and soil moisture on vegetation greening in China",
    journal: "Journal of Hydrology",
    year: "2022",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.jhydrol.2022.128680"
  },
  {
    authors: "Cheng Yongming, An Qiang, Liu Liu*, Li Hao, Huang Guanhua",
    title: "Spatially distinct drought patterns and influencing factors across China: a machine learning approach with a comprehensive index",
    journal: "Ecological Indicators",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.ecolind.2025.114170"
  },
  {
    authors: "Cheng Yongming, An Qiang, Liu Liu*, Zhang Yuxiang, Li Hao, Liu Xingcai, Huang Guanhua",
    title: "Latitudinal and seasonal asymmetry in land surface temperature responses to vegetation greening across China",
    journal: "Earth's Future",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1029/2025EF006385"
  },
  {
    authors: "程泳铭, 刘浏, 程湫雅, 徐宗学, 安强, 王宣宣",
    title: "黄河上中游植被动态及其对干湿转换的响应",
    journal: "生态学报",
    year: "2025",
    rank: "卓越期刊",
    link: "https://www.ecologica.cn/stxb/article/abstract/stxb202312052646"
  },
  {
    authors: "Wang Xuanxuan, Cheng Yongming, Liu Liu*, Niu Qiankun, Huang Guanhua",
    title: "Improved understanding of how irrigated area expansion enhances precipitation recycling by land–atmosphere coupling",
    journal: "Agricultural Water Management",
    year: "2024",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.agwat.2024.108904"
  },
  {
    authors: "Zhang Yujian, Cheng Yongming, Liu Liu*, An Qiang, Huang Guanhua",
    title: "Emerging structural overshoot drought triggered by vegetation greening in the Yellow River Basin",
    journal: "Agricultural Water Management",
    year: "2026",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.agwat.2026.110613"
  },
  {
    authors: "Sun Hanshi, Cheng Yongming, Liu Liu, An Qiang, Zhang Hongbo",
    title: "Water deficit is increasingly limiting vegetation productivity in China",
    journal: "Ecological Indicators",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.ecolind.2025.113775"
  },
  {
    authors: "Sun Hanshi, Cheng Yongming, An Qiang, Liu Liu",
    title: "Evolution and Mechanism Analysis of Terrestrial Ecosystems in China with Respect to Gross Primary Productivity",
    journal: "Land",
    year: "2024",
    rank: "中科院2区",
    link: "https://doi.org/10.3390/land13091346"
  },
  {
    authors: "Zhou Xueting, Cheng Yongming, Liu Liu, Huang Yuqi, Sun hanshi",
    title: "Significant increases in water vapor pressure correspond with climate warming globally",
    journal: "Water",
    year: "2023",
    rank: "中科院2区",
    link: "https://doi.org/10.3390/w15183219"
  },
  {
    authors: "Zhang Yixuan, Liu Liu*, Cheng Yongming, Kang Shaozhong, Li Hao, Wang Lixin, Shi Yu, Liu Xingcai, Cheng Lei",
    title: "Intensified Structural Overshoot Aggravates Drought Impacts on Dryland Ecosystems",
    journal: "Earth's Future",
    year: "2024",
    rank: "中科院1区",
    link: "https://doi.org/10.1029/2023EF003977"
  },
  {
    authors: "An Qiang, Liu Liu*, Cheng Yongming, Liu Jing, Staal Arie, Huang Guanhua",
    title: "Unraveling the role of moisture recycling in water consumption across different ecosystems in China",
    journal: "Journal of Hydrology",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.jhydrol.2025.134020"
  },
  {
    authors: "Wang Tao, Liu Jingzhe, Cheng Yongming, Duan Jingjing, Zhao Yifei, Zhao Jing, Wang Peiling, Zhai Jiaqi*",
    title: "Adaptive rolling runoff forecasting model: Combining multi-source correlated sequences and extreme value encoding",
    journal: "Journal of Hydrology: Regional Studies",
    year: "2025",
    rank: "中科院2区",
    link: "https://doi.org/10.1016/j.ejrh.2025.102241"
  },
  {
    authors: "An Qiang, Staal Arie, Liu Liu*, Cheng Yongming, Liu jing, Huang Guanhua",
    title: "Crops Feed Rain to Drylands in Northwest China",
    journal: "Earth's Future",
    year: "2024",
    rank: "中科院1区",
    link: "https://doi.org/10.1029/2024EF004791"
  },
  {
    authors: "An Qiang, Liu Liu*, Wang Lixin, Yang Kun, Cheng Yongming, Liu Jing, Huang Guanhua",
    title: "Contribution of moisture recycling to water availability in China",
    journal: "Water Resources Research",
    year: "2025",
    rank: "中科院2区",
    link: "https://doi.org/10.1029/2024WR038054"
  },
  {
    authors: "An Qiang, Liu Liu*, Wang Lixin, Staal Arie, Cheng Yongming, Liu jing, Huang Guanhua",
    title: "Spatiotemporal contributions of advected and recycled moisture to water resource variability in China",
    journal: "Water Resources Research",
    year: "2026",
    rank: "中科院2区",
    link: "https://doi.org/10.1029/2025WR041192"
  },
  {
    authors: "Lu Dehao, Liu Liu*, Bai Yanling, An Qiang, Cheng Yongming, Huang Guanhua",
    title: "Deficit irrigation alleviates the increase in soil salinity content in saline-alkali regions of China and improves irrigation water productivity: A meta-analysis",
    journal: "Agricultural Water Management",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.agwat.2025.109872"
  },
  {
    authors: "An Qiang, Liu Liu*, Staal Arie, Yang Kun, Cheng Yongming, Liu Jing, Huang Guanhua",
    title: "Land cover changes redistribute China’s water resources through atmospheric moisture recycling",
    journal: "Earth's Future",
    year: "2025",
    rank: "中科院1区",
    link: "https://doi.org/10.1029/2024EF005565"
  },
  {
    authors: "Zhang Wenqing, Liu Liu*, Li Xiuping, Cheng Lei, Cheng Yongming, Li Hao",
    title: "Intensified response of extreme precipitation to rising temperature over the Tibetan Plateau from CMIP6 multi-model ensembles",
    journal: "Journal of Hydrology",
    year: "2024",
    rank: "中科院1区",
    link: "https://doi.org/10.1016/j.jhydrol.2024.131397"
  },
  {
    authors: "牛乾坤, 刘浏, 黄冠华, 程湫雅, 程泳铭",
    title: "基于GEE和机器学习的河套灌区复杂种植结构识别",
    journal: "农业工程学报",
    year: "2022",
    rank: "EI期刊",
    link: "https://dx.doi.org/10.11975/j.issn.1002-6819.2022.06.019"
  }
];

export const skills = {
  programming: "Python、MATLAB、R",
  models: "CNN、LSTM 神经网络；UTrack 水汽追踪模型；HEC-HMS、新安江模型",
  software: "ArcGIS、Origin、AutoCAD、SOLIDWORKS、Photoshop、VS Code、Ubuntu(Linux)",
  languages: "CET-6，具备英文文献阅读、国际会议交流能力"
};