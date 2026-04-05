export const resumeData = {
  profile: {
    name: '廖世达',
    title: 'Java开发工程师',
    tagline: '专注于Java后端核心模块开发，熟悉多线程、代码优化、数据库调优',
    summary:
      '你好，我是一名后端方向求职者，期待加入您的技术团队。',
    location: '辽宁 · 大连',
    availability: '目前状态：积极求职中',
    heroButtons: [
      { label: '查看项目', target: 'projects', variant: 'primary' },
      { label: '联系我', target: 'contact', variant: 'secondary' },
    ],
  },
  about: {
    title: '关于我',
    paragraphs: [
      '5年Java后端开发工程师，熟悉分布式系统设计与实现。',
      '在项目实践中，擅长核心模块研发与优化。',
    ],
    highlights: [
      '为人靠谱务实，沟通顺畅',
      '具备良好的沟通协作意识，能够快速融入团队开发流程',
      '乐于学习新技术，持续完善技术能力',
    ],
  },
  skills: {
    title: '技能',
    groups: [
      {
        name: '后端开发',
        items: ['Java（集合、并发、JVM）', 'Spring', 'SpringBoot', 'SpringCloud', 'Mybatis', 'Mybatis-plus'],
      },
      {
        name: '数据存储',
        items: ['MySQL', 'PostgreSQL', 'Redis'],
      },
      {
        name: '中间件',
        items: ['RabbitMQ消息队列', 'MinIO'],
      },
      {
        name: '容器化部署',
        items: ['Linux基本命令', 'docker', 'K8s'],
      },
      {
        name: '前端开发',
        items: ['HTML5', 'CSS3', 'Vue', '可独立开发前端页面'],
      },
      {
        name: 'AI',
        items: ['熟悉AI辅助编程', '了解Agent搭建流程'],
      },
    ],
  },
  projects: {
    title: '项目经历',
    items: [
      {
        name: '智慧学工系统',
        role: 'Java后端开发',
        description:
          '本项目聚焦高校辅导员高频工作场景‌，提供八大高频业务使用场景：请假、通知、校园活动、信息收集、考勤签到、工作日志、宿舍管理、设备报修等模块。',
        tags: ['SpringCloud', 'Mybatis-plus', 'Nacos', 'OAuth2', 'MySQL', 'Redis', 'k8s', 'Vue', 'Quasar'],
        bullets: [
          '对接统一认证平台，基于OAuth2实现单点登录，通过Spring Security+JWT实现接口鉴权；构建多租户模型，完成账号权限与院校数据隔离。',
          '设计请假分级审批流程，动态匹配多级审批节点，支持多教师抢占式审批；采用Redisson 分布式锁解决多教师并行审批同一单据导致的数据覆盖、状态错乱问题。',
          '基于自定义线程池实现站内信、邮件、短信异步分发；统一消息落地归档、已读状态管理、失效撤回。',
          '基于AOP切面+Redis+Redisson分布式锁封装通用接口组件，实现重复操作拦截，避免核心业务重复提交导致数据冗余、业务异常。',
          '使用Redis做分布式缓存设计，对审批模板、高校院系信息、角色权限配置等高频读取、低频修改数据做缓存下沉，减少分布式微服务对数据库的跨节点访问，提升高并发场景下的接口响应速度，降低数据库压力。',
        ],
      },
      {
        name: '智慧教育平台',
        role: 'Java后端开发',
        description:
          '东软教育科技集团基于 TOPCARES 成果导向人才培养理念，整合标准体系、教学资源、业务平台为一体，覆盖培养方案、课程教学、项目实践、综合实训、素质活动、毕业设计等全流程模块，实现人才培养核心环节的数字化、一体化支撑',
        tags: ['SpringCloud', 'Mybatis-plus', 'Nacos', 'MySQL', 'Redis', 'k8s', 'MinIO', 'Vue'],
        bullets: [
          '参与核心业务开发，负责课程教学服务、素质活动服务两大模块的需求落地、接口设计与代码实现。',
          '集成 MinIO 对象存储服务，封装通用文件操作工具类，实现教学资源、活动素材的大文件分片上传、断点续传、统一平台资源存储规范。',
          '深度优化数据报表生成接口，通过 CompletableFuture 结合自定义线程池实现多任务异步编排，并行调用多数据源获取数据，接口平均响应时间大幅降低。',
          '编写 Swagger 接口文档，协同前端、测试团队完成联调与问题定位，快速修复业务逻辑 Bug，保障模块迭代上线效率与稳定性。',
        ],
      },
      {
        name: '教育质量检测数智化平台',
        role: 'Java后端开发',
        description:
          '本项目为教育主管部门、本科、职业教育等用户提供教育监测与评价一站式决策支持的智能化数据服务平台。结合客户的具体应用场景，定制化指标体系、计算引擎配置以及规划数据模型。模块化数据采集方式，数据驾驶舱等功能，最终构建拼搭积木式的 “量身定做” 解决方案，达到 “一校一案” 的效果。主要流程包括：元数据管理、指标管理、评估任务管理、数据填报、专家审核及调研管理等。',
        tags: ['SpringBoot', 'Mybatis-plus', 'MySQL', 'Redis', 'Hutool', 'Vue'],
        bullets: [
          '负责指标管理、评估任务管理核心模块的设计与开发，完成数据库建模、接口定义与业务逻辑实现。',
          '编写单元测试与接口文档，配合前端联调、测试人员问题定位，修复线上 Bug 并跟进版本发布。',
          '参与系统接口性能优化工作，分析数据库慢查询并优化。',
          '参与需求评审与技术方案讨论，针对业务场景提出可配置化、可扩展的实现思路。',
        ],
      },
      {
        name: '慧练英语',
        role: 'Java后端开发',
        description:
          '慧练英语是为了满足高校教育教学一体化信息化智慧化管理的需要，结合东软教育科技集团未来智慧教育平台发展的一体化规划，融合出版社产品与其他公司产品长处，兼具资源丰富性与兼容性、多模态用户学习体验、灵活的教学组织与管理等方面特色，一款适合高校师生围绕主教材组织开展课外英语拓展学习的App、项目分为Web网页管理端和app教学端、教师进入管理端管理学生一级创建发布学习任务，学生进入手机端App进行口语训练、习题训练、阅读训练、错题回顾等。',
        tags: ['SpringBoot', 'Mybatis-plus', 'PostgreSQL', 'Redis', 'Vue', 'Quasar'],
        bullets: [
          '负责 Web 端试卷管理、App 端习题练习模块的需求拆解、后端接口开发，实现试卷创建、题库管理、习题推送、作答提交等功能。',
          '参与接口文档编写与前后端联调，解决接口参数校验、数据返回格式、跨域等问题，保障两端功能正常对接。',
        ],
      },
    ],
  },
  experience: {
    title: '工作经历',
    items: [
      {
        company: '大连东软教育科技集团',
        role: 'Java开发工程师',
        period: '2020.07 - 2025.02',
        description:
          '所在部门为教育管理产品研发部，主要负责部门的产品系统设计、开发与维护工作。',
        bullets: [
        ],
      },
      {
        company: '大连华信计算机技术股份有限公司',
        role: 'Java开发工程师',
        period: '2024.06 - 2024.11',
        description:
          '所在部门为能源事业部，主要负责部门的产品系统设计、开发与维护工作。',
        bullets: [
        ],
      },
    ],
  },
  education: {
    title: '教育背景',
    items: [
      {
        school: '大连东软信息学院',
        major: '软件工程',
        degree: '本科',
        period: '2016.09 - 2020.06',
        description:
          '系统学习软件开发基础、数据结构、数据库原理与软件工程方法，毕业设计方向聚焦 Web 应用开发。',
      },
    ],
  },
  contact: {
    title: '联系方式',
    intro:
      '如果你对我的项目经历或技能背景感兴趣，欢迎随时联系我，我期待进一步沟通合适的岗位机会。',
    items: [
      { label: '邮箱', value: '970471726@qq.com', href: '#' },
      { label: '电话', value: '151-4334-8906', href: 'tel:15143348906' },
    ],
  },
}

export const navItems = [
  { label: '首页', target: 'hero' },
  { label: '关于我', target: 'about' },
  { label: '技能', target: 'skills' },
  { label: '项目', target: 'projects' },
  { label: '经历', target: 'experience' },
  { label: '教育', target: 'education' },
  { label: '联系', target: 'contact' },
]
