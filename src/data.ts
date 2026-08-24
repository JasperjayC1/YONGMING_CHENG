import { EducationInfo, ExperienceInfo, PersonalInfo, ProjectInfo, PublicationInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "程泳铭",
  enName: "Cheng Yongming",
  title: "水利工程博士在读 / 数据建模与因果分析研究者",
  email: "s20213091740@cau.edu.cn",
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
  }
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
    title: "国家自然科学基金面上项目 (生态水文)",
    role: "核心参与",
    date: "2024.1 - 2027.12",
    desc: [
      "负责生态水文大数据挖掘与归因分析，依托多源时序数据集，通过统计回归、交互效应分析方法，完成量化表征农业-水-生态正向链式传导全过程；",
      "识别农业-水-生态链式传导的关键驱动因素，量化各要素对生态系统链式响应的贡献度，输出标准化数据分析结论与图表成果。"
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
  }
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
    journal: "Earth’s Future",
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
  }
];

export const skills = {
  programming: "Python、MATLAB、R",
  models: "CNN、LSTM 神经网络；UTrack 水汽追踪模型；HEC-HMS、新安江模型",
  software: "ArcGIS、Origin、AutoCAD、SOLIDWORKS、Photoshop、VS Code、Ubuntu(Linux)",
  languages: "CET-6，具备英文文献阅读、国际会议交流能力"
};
