$(document).ready(function () {
  const history_datas = () => {
    if (window.location.href.includes("/en/")) {
      return [
        {
          date: "2018",
          des: "Easy Career",
          src: assets_route + "images/office/1.jpg",
        },
        {
          date: "2018",
          des: "With Members of Parliament",
          src: assets_route + "images/events/event_4.jpg",
        },
        {
          date: "2018",
          des: "Study Group",
          src: assets_route + "images/events/event_3.jpg",
        },
        {
          date: "2018",
          des: "Group Annual Meeting",
          src: assets_route + "images/events/event_2.jpg",
        },
        {
          date: "2017",
          des: "Beijing Conference",
          src: assets_route + "images/events/event_5.jpg",
        },
        {
          date: "2018",
          des: "Take a Bow",
          src: assets_route + "images/events/event_6.jpg",
        },
        {
          date: "2019",
          des:
            "Zhang Yuwei, founder of Easy Group, was selected into the Forbes China 30 Under 30 Elite List (Education)",
          src: assets_route + "images/events/event_8.png",
        },
        {
          date: "2018",
          des:
            "Easy Group Receives Congratulatory Letter from Canadian Prime Minister",
          src: assets_route + "images/events/event_9.png",
        },
        {
          date: "2018",
          des:
            "Won Hurun Canada-China Outstanding Entrepreneur Contribution Award",
          src: assets_route + "images/events/event_10.png",
        },
        {
          date: "2018",
          des:
            "Attended the University of Pennsylvania China-US Education Summit",
          src: assets_route + "images/events/event_11.png",
        },
        {
          date: "2016",
          des:
            "Zhang Yuwei, founder of Easy Group, was invited to become honorary vice chairman of the Beacon Forum",
          src: assets_route + "images/events/event_12.png",
        },
        {
          date: "2019",
          des:
            "Easy Education won the Tencent annual influence international education brand",
          src: assets_route + "images/events/event_13.png",
        },
        {
          date: "2019",
          des:
            "Zhang Yuwei, founder of Easy Group, was included in the list of 2019 Hurun Under30s Entrepreneurship Leaders",
          src: assets_route + "images/events/event_15.png",
        },
        {
          date: "2019",
          des:
            "Li Haozhe, strategic director of Easy Group, was selected in the list of 2019 Hurun Under30s Entrepreneurship Leader",
          src: assets_route + "images/events/event_14.png",
        },
        {
          date: "2019",
          des:
            "Easy Group founder Zhang Yuwei was nominated for Hurun 30 X 30 Entrepreneurship Leader 2019",
          src: assets_route + "images/events/event_16.png",
        },
        {
          date: "2019",
          des:
            "Li Haozhe, strategic director of Easy Group, was nominated for the 2019 Hurun 30 X 30 Entrepreneurship Leader",
          src: assets_route + "images/events/event_16.png",
        },
      ];
    } else {
      return [
        {
          date: "2018",
          des: "Easy Career",
          src: assets_route + "images/office/1.jpg",
        },
        {
          date: "2018",
          des: "议员参会",
          src: assets_route + "images/events/event_4.jpg",
        },
        {
          date: "2018",
          des: "教学研讨会",
          src: assets_route + "images/events/event_3.jpg",
        },
        {
          date: "2018",
          des: "集团年会",
          src: assets_route + "images/events/event_2.jpg",
        },
        {
          date: "2017",
          des: "北京见面会",
          src: assets_route + "images/events/event_5.jpg",
        },
        {
          date: "2018",
          des: "年会谢幕",
          src: assets_route + "images/events/event_6.jpg",
        },
        {
          date: "2019",
          des:
            "Easy Group创始人张育维入选福布斯中国30 Under 30精英榜单（教育）",
          src: assets_route + "images/events/event_8.png",
        },
        {
          date: "2018",
          des: "易维集团获得加拿大总理签名贺信",
          src: assets_route + "images/events/event_9.png",
        },
        {
          date: "2018",
          des: "荣获胡润加中杰出企业家贡献奖",
          src: assets_route + "images/events/event_10.png",
        },
        {
          date: "2018",
          des: "出席宾夕法尼亚大学中美教育峰会",
          src: assets_route + "images/events/event_11.png",
        },
        {
          date: "2016",
          des: "Easy Group创始人张育维受邀成为灯塔创业论坛荣誉副主席",
          src: assets_route + "images/events/event_12.png",
        },
        {
          date: "2019",
          des: "易维教育获腾讯年度影响力国际教育品牌",
          src: assets_route + "images/events/event_13.png",
        },
        {
          date: "2019",
          des: "Easy Group 创始人张育维入选《2019年胡润Under30s创业领袖》榜单",
          src: assets_route + "images/events/event_15.png",
        },
        {
          date: "2019",
          des:
            "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲入选《2019年胡润Under30s创业领袖》榜单",
          src: assets_route + "images/events/event_14.png",
        },
        {
          date: "2019",
          des: "Easy Group 创始人张育维荣获《2019年胡润30 X 30创业领袖》提名",
          src: assets_route + "images/events/event_16.png",
        },
        {
          date: "2019",
          des:
            "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲荣获《2019年胡润30 X 30创业领袖》提名",
          src: assets_route + "images/events/event_16.png",
        },
      ];
    }
  };

  let companies = [
    {
      country: ["北美", "North America"],
      items: [
        ["安永", "Ernst & Young"],
        ["普华永道", "PwC"],
        ["毕马威", "KPMG"],
        ["德勤", "Deloitte"],
        ["摩根大通", "J.P Morgan"],
        ["苹果", "Apple"],
        ["亚马逊", "Amazon"],
        ["万国商用机器公司", "IBM"],
        ["微软", "Microsoft"],
        ["谷歌", "Google"],
        ["因特尔", "Intel"],
        ["脸书", "Facebook"],
        ["AT&T公司", "AT&T"],
        ["第一资本", " Capital One"],
        ["贝莱德", "BlackRock"],
        ["高盛", "Goldman Sachs"],
        ["花旗集团", "Citigroup"],
        ["百威", "Budweiser"],
        ["麦肯锡", "McKinsey & Company"],
      ],
    },
    {
      country: ["中国", "China"],
      items: [
        ["腾讯", "Tencent"],
        ["阿里巴巴", "Alibaba"],
        ["百度", "Baidu"],
        ["京东", "JD"],
        ["汇丰银行", "HSBC"],
        ["华为", "Huawei"],
        ["中国电信", "China Telecommunications"],
        ["中信证券", "CITIC Securities"],
        ["海通证券", "Haitong Securities"],
        ["平安中国", "Ping An Insurance"],
        ["香港花旗银行", "Citibank"],
        ["香港巴克莱银行", "Barclays"],
        ["普华永道中国", "PwC"],
        ["安永中国", "Ernst & Young"],
        ["毕马威中国", "KPMG"],
      ],
    },
    {
      country: ["加拿大", "Canada"],
      items: [
        ["RBC皇家银行", "RBC Royal Bank"],
        ["加拿大帝国商业银行", "Canadian Imperial Bank of Commerce"],
        ["丰业银行", "Scotiabank"],
        ["加拿大退休金计划投资局", "CPP INVESTMENT BOARD"],
        ["永明金融", "Sun Life Financial"],
        ["宏利金融", "Manulife"],
        ["贝尔", "Bell"],
        ["研科", "Telus"],
        ["罗杰斯通讯", "Rogers"],
      ],
    },
  ];

  let companies_en = [
    {
      country: ["北美", "North America"],
      items: [
        ["安永", "Ernst & Young"],
        ["普华永道", "PwC"],
        ["毕马威", "KPMG"],
        ["德勤", "Deloitte"],
        ["摩根大通", "J.P Morgan"],
        ["苹果", "Apple"],
        ["亚马逊", "Amazon"],
        ["万国商用机器公司", "IBM"],
        ["微软", "Microsoft"],
        ["谷歌", "Google"],
        ["因特尔", "Intel"],
        ["脸书", "Facebook"],
        ["AT&T公司", "AT&T"],
        ["第一资本", " Capital One"],
        ["贝莱德", "BlackRock"],
        ["高盛", "Goldman Sachs"],
        ["花旗集团", "Citigroup"],
        ["百威", "Budweiser"],
        ["麦肯锡", "McKinsey & Company"],
      ],
    },
    {
      country: ["中国", "China"],
      items: [
        ["腾讯", "Tencent"],
        ["阿里巴巴", "Alibaba"],
        ["百度", "Baidu"],
        ["京东", "JD"],
        ["汇丰银行", "HSBC"],
        ["华为", "Huawei"],
        ["中国电信", "China Telecommunications"],
        ["中信证券", "CITIC Securities"],
        ["海通证券", "Haitong Securities"],
        ["平安中国", "Ping An Insurance"],
        ["香港花旗银行", "Citibank"],
        ["香港巴克莱银行", "Barclays"],
        ["普华永道中国", "PwC"],
        ["安永中国", "Ernst & Young"],
        ["毕马威中国", "KPMG"],
      ],
    },
    {
      country: ["加拿大", "Canada"],
      items: [
        ["RBC皇家银行", "RBC Royal Bank"],
        ["加拿大帝国商业银行", "Canadian Imperial Bank of Commerce"],
        ["丰业银行", "Scotiabank"],
        ["加拿大退休金计划投资局", "CPP INVESTMENT BOARD"],
        ["永明金融", "Sun Life Financial"],
        ["宏利金融", "Manulife"],
        ["贝尔", "Bell"],
        ["研科", "Telus"],
        ["罗杰斯通讯", "Rogers"],
      ],
    },
  ];

  const cover_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        ignite_bigtitle: "Virtual Career Fair",
        ignite_smalltitle: "Online career event",
        ignite_gotobutton: "Exhibitor Registration",
        ignite_regibutton: "Job Seeker Registration",
        ignite_box1: "No physical restriction for all",
        ignite_box2: "Access to talents resume",
        ignite_box3: "Work with top companies in various industries",
        one_stop: "One-Stop International Student Career Consultant",
        contact_us: "Contact Us",
        watch_video: "Introduction Video",
        begin_2017: `<div style="font-size: 0.8em">Established in 2017</div>`,
        NA_findjob: `<div style="font-size: 0.8em">Bellwether of Career Consulting</div>`,
        teacher_200: `<div style="font-size: 0.8em">200+ Elite Mentors</div>`,
        protect_student: `<div style="font-size: 0.8em">Career Supports for Intl. Students</div>`,
        student_jb: "Job Board for International Student",
        go_jb: "Easy Education",
        vip_program: "VIP Program",
        learn_more: "Learn more",
        gpa_40: "Easy 4.0",
        career_consultant: "Career Consulting",
        jb: "Job Board",
        class_course: "Tutoring Service",
      };
    } else {
      return {
        ignite_bigtitle: "Virtual Career Fair",
        ignite_smalltitle: "线上职场活动",
        ignite_gotobutton: "参展方注册",
        ignite_regibutton: "求职者报名",
        ignite_box1: "免接触式职场会",
        ignite_box2: "携手各行业顶尖公司",
        ignite_box3: "简历直达HR",
        one_stop: "一站式留学生职业服务",
        contact_us: "联系我们",
        watch_video: "观看品牌视频",
        begin_2017: "始于2017",
        NA_findjob: "北美求职风向标",
        teacher_200: "200+ 精英导师",
        protect_student: "为留学生的就业保驾护航",
        student_jb: "适合留学生的Job Board",
        go_jb: "进入官网",
        vip_program: "私人订制求职特训计划",
        learn_more: "了解更多",
        gpa_40: "让你的GPA轻松4.0",
        career_consultant: "职业咨询",
        jb: "岗位直通车",
        class_course: "课程辅导",
      };
    }
  };

  const about_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        intro:
          "Easy Career is a job consultant agency. The company is headquartered in the center of Toronto. It is one of the subsidiaries of Canada ’s first education brand Easy Group. It is committed to helping university and college students and working elites with their employment around the world. Through independent and self-developed job skills training products and one on one VIP consulting services, the abilities and experiences of students are comprehensively improved. In the finance, consulting, technology, fast-moving consuming, data processing, marketing and many other popular industries, it helps students to get offer from world's leading companies.",
        card1title: "职业必备技能",
        card1content:
          "Mastering essential work skills through pratical projects in various industries. Our ON/OFFLine courses provide a flexible schedule for studnets to utilize their time on study.",
        card2title: "求职核心能力",
        card2content:
          "The 1-on-1 job search training program, hereinafter called VIP Program, aims to provide a customized, systematic and one-stop job search education consulting services for students, to prepare for the upcoming career in a targeted manner.",
        card3title: "保Offer全职/实习项目",
        card3content:
          "Providing assitances for applying leading companies, including venture capital and Global 500 and so on. Helping our customers to complete job applications according to their characteristics of ability and personal needs.",
      };
    } else {
      return {
        intro:
          "EASY CAREER是一家在线职业教育机构，公司总部位于多伦多市市中心，是加拿大第一教育品牌 Easy Group(易维教育集团)旗下的子公司之一，致力于帮助全球大学生和在职精英，提供一站式的就业解决方案。通过独立自主研发的职业技能培训产品和一对一体系化咨询服务，全方位提升学员能力与背景。在金融、咨询、科技、快消、数据、市场等众多热门行业，助力全球大学生入驻全球前沿企业。",
        card1title: "职业必备技能",
        card1content:
          "结合行业实战项目，在课程中熟练掌握不同行业工作中所需要的各种技能。灵活的线上加线下课程模式让用户充分利用自己的时间去学习。",
        card2title: "求职核心能力",
        card2content:
          "1对1求职特训计划，以下简称VIP Program，旨在为学生提供定制化的，系统性的一站式求职教育咨询服务，针对性地准备即将开始的职场生涯。",
        card3title: "保Offer全职/实习项目",
        card3content:
          "帮助申北美知名大公司，创投公司，世界五百强等。根据学生能力特点及个人需求，帮助其完成各类型职位申请。",
      };
    }
  };

  const gallery_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        toset: `<h2 class="h1">VIP Program <br><b style="color: #33aacc">Customized</b><br>Your Job Hunting Plan</h2>`,
        ask_now: "Contact Us",
      };
    } else {
      return {
        toset: `<h2 class="h1">VIP Program <br><b style="color: #33aacc">定制</b>属于你的<br>求职计划</h2>`,
        ask_now: "立刻咨询",
      };
    }
  };

  const product_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        hotCourse: "Popular Courses",
      };
    } else {
      return {
        hotCourse: "热门课程",
      };
    }
  };

  const homeCarousel_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        carousel_content:
          "Easy Career is one of the subsidiaries of Canada ’s first education brand Easy Group. Easy group owns subsidiary service training groups such as Easy 4.0(易途教育), ZiXun Edu, Easy Career, HiOffer and WeCare. The group is headquartered in Shenzhen, China, with overseas branches in Canada, the United States and other regions. Taking education as the starting point and 'responsibility first' as the core concept, the group's business covers fields such as study abroad planning, overseas life assistance, higher education counseling, job search consulting, graduate application, and business incubation. Creating a circle of the study abroad industry, and provide truly valuable services to students who want to study abroad, have already studied abroad, completed their study abroad, and their parents.",
      };
    } else {
      return {
        carousel_content:
          "Easy Career隶属于Easy Group集团。集团旗下拥有Easy 4.0 (易途教育)，孜循Edu, Easy Career (易职)，HiOffer，WeCare微致等附属服务培训体系。集团总部位于中国深圳，在加拿大、美国等地区设有海外分部。以教育作为出发点， “责任心至上” 作为核心理念，集团业务涵盖留学规划，海外生活辅助，高等教育辅导，求职咨询，研究生申请，创业孵化等领域。切实打造留学产业闭环，为想要留学，已经留学，完成留学的学子以及他们的家长创造真正有价值的服务。",
      };
    }
  };

  const offerDiv_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        offer_intro: `<h2>The Road to <br><span style="color:#33aacc">High Paying Jobs</span></br></h2>
                <p>Founded in early 2017, EASY CAREER is committed to integrating elites in various industries around the world to provide systematic and customized career consultance for college students. Through the 1-to-1, many-to-1, and live video/ online courses, connecting global students with the workplace elites through our services. From the perspective of the market and the needs of customers, we establish a complete career planning program and systematic curriculum planning for students, focus on enhancing the core competitiveness of students in the workplace, and provide targeted counseling and training to help students successfully entering the target industry.</p>`,
        elite_teacher: `Elimination rate of our elite mentors`,
        four_month: `Probability of obtain an Offer in Four Months`,
        satisfy: `Customer Satisfaction`,
      };
    } else {
      return {
        offer_intro: `<h2>这里是<br>你距离<span style="color:#33aacc">高薪Offer</span><br>最近的地方</h2>
                <p >EASY CAREER创立于2017年初，致力于整合全球各行业的职场精英，为大学生提供体系化，定制化的职业教育，通过1对1、多对1和班课实时在线视频/直播学习平台，将全球大学生和职场精英进行对接。
                我们从市场的角度和客户的需求出发，为学员建立完善的职业规划方案及体系化的课程规划，以提升学员职场核心竞争力为中心，开展针对性的辅导与培训，帮助学员顺利进入目标行业与公司岗位。</p>`,
        elite_teacher: `签约精英导师淘汰率`,
        four_month: `四个月内获得Offer成功率`,
        satisfy: `用户满意度`,
      };
    }
  };

  function createHotCourses() {
    let temp_html = "";
    let cert_data = certi_course();
    let skill_data = skill_course();

    let all_data = [].concat(cert_data, skill_data);

    temp_html += `
        <div class="container">
        <div class="row justify-content-between text-center">
          <div class="col-12 col-lg-12">
            <div class="row gutter-0">
        `;
    for (block of all_data) {
      temp_html +=
        `
            <div class="col-sm-6 col-lg-4">
                <div class="rising p-3 bg-white">
                    <a href=` +
        block.link +
        `><h4 class="text-gray">` +
        block.main_title +
        `</h4></a>
                </div>
            </div>
            `;
    }

    temp_html += `
            </div>
            </div>
        </div>
        </div>
        `;

    return temp_html;
  }

  function createHistory() {
    let temp_html = "";
    history_dt = history_datas();

    temp_html += `
        <div class="row" data-aos="fade-left" data-aos-delay="300">
        <div class="col">
        <div class="owl-carousel visible" data-items="[3,2,1]" data-margin="20" data-dots="true" data-loop="true" data-center="true">
        `;

    for (block of history_dt) {
      temp_html +=
        `
            <article class="tile tile-long">
                <div class="tile-image" style="background-image: url(` +
        block.src +
        `)"></div>
                <a class="tile-content">
                
                <div class="tile-footer">
                    <span class="eyebrow">` +
        block.date +
        `</span>
                    <h5>` +
        block.des +
        `</h5>
                </div>
                </a>
            </article>
            `;
    }

    temp_html += `
        </div>
        </div>
        </div>
        `;
    return temp_html;
  }

  function createCompanies(companies) {
    tempHTML = `
        
            <div class="col-md-8">
                <div class="row gutter-1">
        `;

    for (col of companies) {
      tempHTML +=
        `
            <div class="col-md-4">
            <div class="bordered rising p-2 p-md-4">
              <h5 class="mb-0">` +
        col.country[0] +
        `</h5>
              <span class="d-block text-primary mb-1">` +
        col.country[1] +
        `</span>
            `;

      for (item of col.items) {
        tempHTML +=
          `
                <h6 class="text-dark mb-0">` +
          item[0] +
          `</h6>
                <span class="d-block text-grey mb-1">` +
          item[1] +
          `</span>
                `;
      }
      tempHTML += `
            </div>
            </div>
            `;
    }
    tempHTML += `
                </div>
            </div>

        `;

    return tempHTML;
  }

  function createCover() {
    cover_dt = cover_data();

    return (
      `
    <div class="gallery">
      <div class="gallery-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide vh-100">
            <div class="image image-overlay" style="background-image:url(` +
      assets_route +
      `images/landing/vcf-1.jpg)"></div>
            <div class="caption text-white" data-swiper-parallax="-100%">
              <div class="container">
              <div class="row justify-content-between vh-100">
                <div class="col-lg-8 align-self-center text-white text-shadow" data-swiper-parallax="-100%">
                  <span class="eyebrow text-white mb-1">` +
      cover_dt.ignite_smalltitle +
      `</span>
                  <h1 class="display-2">` +
      cover_dt.ignite_bigtitle +
      `</h1>

                  <a href="http://careerfair.ezcareer.ca/" class="btn btn-white btn-rounded px-5">` +
      cover_dt.ignite_gotobutton +
      `</a>
                        <a href="https://easycareerfair.eventbrite.ca" class="btn btn-white btn-rounded px-5">` +
      cover_dt.ignite_regibutton +
      `</a>
                </div>
                <div class="col-lg-4 align-self-end">
                  <div class="row gutter-1">

                      <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                           <div class="equal-header">
                            <h4>
                                ` +
      cover_dt.ignite_box1 +
      `</h4>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                          <div class="equal-header">
                            <h4>` +
      cover_dt.ignite_box2 +
      `</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                          <div class="equal-header">
                            <h6>` +
      cover_dt.ignite_box3 +
      `</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        
          <div class="swiper-slide vh-100">
            <div class="image image-overlay" style="background-image:url(` +
      assets_route +
      `images/landing/landing-1.jpg)"></div>
            <div class="caption text-white" data-swiper-parallax="-100%">
              <div class="container">
              <div class="row justify-content-between vh-100">
                <div class="col-lg-8 align-self-center text-white text-shadow" data-swiper-parallax="-100%">
                  <span class="eyebrow text-white mb-1">Career Consulting Services</span>
                  <h1 class="display-2">` +
      cover_dt.one_stop +
      `</h1>

                  <a href="contacts.html" class="btn btn-white btn-rounded px-5">` +
      cover_dt.contact_us +
      `</a>
                </div>
                <div class="col-lg-4 align-self-end">
                  <div class="row gutter-1">

                      <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                           <div class="equal-footer">
                            <div class="component-example">
                                <a class="popup-youtube" href="https://www.youtube.com/watch?v=DZB46VAIfzc">` +
      cover_dt.watch_video +
      `<i class="icon-play2"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                          <div class="equal-header">
                            <h4>` +
      cover_dt.begin_2017 +
      `</h4>
                          </div>
                          <div class="equal-footer">
                            <span class="text-muted">` +
      cover_dt.NA_findjob +
      `</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 text-white">
                      <div class="equal">
                        <div class="bordered">
                          <div class="equal-header">
                            <h4>` +
      cover_dt.teacher_200 +
      `</h4>
                          </div>
                          <div class="equal-footer">
                            <span class="text-muted">` +
      cover_dt.protect_student +
      `</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <div class="swiper-slide">
            <div class="image image-overlay" style="background-image:url(` +
      assets_route +
      `images/landing/jobboard-2.jpg)">
            </div>
            <div class="caption text-white" data-swiper-parallax="-100%">
              <div class="container">
                <div class="row justify-content-center align-items-center vh-90">
                  <div class="col-md-10  col-lg-8 text-center">
                    <span class="eyebrow mb-2">Jobs.ezcareer.ca</span>
                    <h1 class="display-2">` +
      cover_dt.student_jb +
      `</h1>
                    <a href="http://jobs.ezcareer.ca" class="btn btn-white btn-rounded px-5" target="_blank">` +
      cover_dt.go_jb +
      `</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="swiper-slide">
            <div class="image image-overlay" style="background-image:url(` +
      assets_route +
      `images/landing/landing-2.jpg)">
            </div>
            <div class="caption text-white" data-swiper-parallax="-100%">
              <div class="container">
                <div class="row justify-content-center align-items-center vh-90">
                  <div class="col-md-10 col-lg-8 text-center">
                    <span class="eyebrow mb-2">VIP Program</span>
                    <h1 class="display-2">` +
      cover_dt.vip_program +
      `</h1>
                    <a href="http://www.ezcareer.ca/vip.html" class="btn btn-white btn-rounded px-5" target="_blank">` +
      cover_dt.learn_more +
      `</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div class="swiper-slide">
            <div class="image image-overlay" style="background-image:url(` +
      assets_route +
      `images/landing/learning-1-min.jpg)">
            </div>
            <div class="caption text-white" data-swiper-parallax="-100%">
              <div class="container">
                <div class="row justify-content-center align-items-center vh-90">
                  <div class="col-md-10 col-lg-8 text-center">
                    <span class="eyebrow mb-2">Tutoring Services</span>
                    <h1 class="display-2">` +
      cover_dt.gpa_40 +
      `</h1>
                    <a href="https://ez4edu.com/" class="btn btn-white btn-rounded px-5" target="_blank">` +
      cover_dt.go_jb +
      `</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

              

        </div>
      </div>
      <div class="gallery-thumbs">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
            <h5>` +
      cover_dt.ignite_bigtitle +
      `</h5>
        </div>
          <div class="swiper-slide">
            <h5>` +
      cover_dt.career_consultant +
      `</h5>
          </div>
          <div class="swiper-slide">
            <h5>` +
      cover_dt.jb +
      `</h5>
          </div>
          <div class="swiper-slide">
            <h5>VIP Program</h5>
          </div>
          <div class="swiper-slide">
            <h5>` +
      cover_dt.class_course +
      `</h5>
          </div>
        </div>
      </div>
    </div>
    `
    );
  }

  function createGallery() {
    gallery_dt = gallery_data();

    return (
      `
        <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-4">
            ` +
      gallery_dt.toset +
      `
            <ul class="list-group list-group-line">
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-check-circle2 fs-24 text-orange"></i>
                <span>行业趋势前瞻 Industrial Insights</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-briefcase2 fs-24 text-orange"></i>
                <span>求职规划 Consultation</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-book2 fs-24 text-orange"></i>
                <span>履历精修 Profile Improvement</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-check-circle2 fs-24 text-orange"></i>
                <span>面试直通车 Interview Package</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-check-circle2 fs-24 text-orange"></i>
                <span>求职社交 Networking</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-check-circle2 fs-24 text-orange"></i>
                <span>在线课堂 Hard Skills Training</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="icon-check-circle2 fs-24 text-orange"></i>
                <span>名企直推 Job Placement Opportunity</span>
              </li>
            </ul>
            <a href="contacts.html">
            <button type="button" class="btn btn-with-ico btn-orange text-white mt-3">` +
      gallery_dt.ask_now +
      ` <i class="icon-arrow-right2 fs-20"></i></button></a>
          </div>

          <div class="col-md-8">
            <ul class="masonry gallery row gutter-1">
              <li class="col-6" data-aos="zoom-in">
                <figure class="photo equal equal-double">
                  <a href="vip.jpg"
                    style="background-image: url(` +
      assets_route +
      `images/service/vip.jpg); pointer-events: none; cursor: default;">
                    <span class="photo-caption">
                      <span>VIP Mentorship Program</span>
                    </span>
                  </a>
                </figure>
              </li>
              <li class="col-6" data-aos="zoom-in">
                <figure class="photo equal">
                  <a href="` +
      assets_route +
      `images/service/resume.jpg"
                    style="background-image: url(` +
      assets_route +
      `images/service/resume.jpg); pointer-events: none; cursor: default;">
                    <span class="photo-caption">
                      <span>Profile Improvement Package</span>
                    </span>
                  </a>
                </figure>
              </li>
              <li class="col-6" data-aos="zoom-in">
                <figure class="photo equal">
                  <a href="` +
      assets_route +
      `images/service/interview.jpg"
                    style="background-image: url(` +
      assets_route +
      `images/service/interview.jpg); pointer-events: none; cursor: default;">
                    <span class="photo-caption">
                      <span>Interview Package</span>
                    </span>
                  </a>
                </figure>
              </li>
              
            </ul>

          </div>
        </div>
      </div>
        `
    );
  }

  function createAbout() {
    about_dt = about_data();
    return (
      `

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <h2>Easy career, better <span style="color: #33aacc;">job.</span></h2>
            </div>
            <div class="col-lg-6">
              <p class="lead">` +
      about_dt.intro +
      `</p>
  
            </div>
          </div>
          <div class="row gutter-1">
                <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                  <div class="bordered scaling p-4">
                    <i class="icon-course text-ezc fs-40 mb-3"></i>
                    <h6 class="mb-0 text-ezc">Learn Essential Skills</h6>
                    <h4 class="mb-2">` +
      about_dt.card1title +
      `</h4>
  
                    <p>` +
      about_dt.card1content +
      `</p>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
                  <div onclick={window.location='http://www.ezcareer.ca/vip.html'} class="bordered scaling p-4">
                    <i class="icon-vip text-ezc fs-40 mb-3"></i>
                    <h6 class="mb-0 text-ezc">100% Tailored Training</h6>
                    <h4 class="mb-2">` +
      about_dt.card2title +
      `</h4>
  
                    <p>` +
      about_dt.card2content +
      `</p>
  
                  </div>
                </div>
                 <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                  <div class="bordered scaling p-4">
                    <i class="icon-offer text-ezc fs-40 mb-3"></i>
                    <h6 class="mb-0 text-ezc">Guarantee Offer Program</h6>
                    <h4 class="mb-2">` +
      about_dt.card3title +
      `</h4>
  
                    <p>` +
      about_dt.card3content +
      `</p>
                  </div>
                </div>
              </div>  
  
  
        </div>
     

        `
    );
  }

  function createProduct() {
    // product_dt = product_data()
    hot_course_html = createHotCourses();
    return (
      `
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <span class="eyebrow mb-1 text-primary">Essential Courses</span>
                <h2>热门课程</h2>
            </div>
            </div>
            ` +
      hot_course_html +
      `
            </div>
        </div>
        `
    );
  }

  function createEdu() {
    if (window.location.href.includes("/en/")) {
      return (
        `
            <section class="bg-white"
            data-top-top="transform: translateY(0px);" 
            data-top-bottom="transform: translateY(70px);" style="background: url(` +
        assets_route +
        `images/map-3.png) no-repeat center; background-size: contain;">
            <div class="container" >
              <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                  <span class="eyebrow mb-1 text-primary">OUR MENTORS</span>
                  <h2>From</h2>
                </div>
              </div>
              <br>
              <div id="companies" class="row align-items-center">
              </div>
            </div>
          </section>
            `
      );
    } else {
      return (
        `
            <section class="bg-white"
            data-top-top="transform: translateY(0px);" 
            data-top-bottom="transform: translateY(70px);" style="background: url(` +
        assets_route +
        `images/map-3.png) no-repeat center; background-size: contain;">
            <div class="container" >
              <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                  <span class="eyebrow mb-1 text-primary">OUR MENTORS</span>
                  <h2>我们的导师来自于</h2>
                </div>
              </div>
              <br>
              <div id="companies" class="row align-items-center">
              </div>
            </div>
          </section>
            `
      );
    }
  }

  function createHomeCarousel() {
    homeCarousel_dt = homeCarousel_data();

    return (
      `
        <div class="decorated-bottom text-light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 40"  preserveAspectRatio="none">  
          <path d="">
            <animate 
              attributeName="d" 
              begin="0s" 
              dur="5s"
              repeatCount="indefinite"
              values="
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
              M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
              M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"></animate>
          </path>
        </svg>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <span class="eyebrow mb-1 text-primary">POWERED BY EASYGROUP</span>
            <h2>Easy Group 易维集团</h2>
            
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
              <img class="logo-m" src="` +
      assets_route +
      `images/logos/EZG_LOGO_DARK.png" alt="Logo">
            </div>
          </div>
         <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <p>` +
      homeCarousel_dt.carousel_content +
      `</p>
          </div>
        </div>
        
             <div id="history"></div>

      </div>
        `
    );
  }

  function createOfferDiv() {
    offerDiv_dt = offerDiv_data();

    return (
      `
        <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            ` +
      offerDiv_dt.offer_intro +
      `
            
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-12">
                <h4 class="fs-20 progress-title">` +
      offerDiv_dt.elite_teacher +
      `</h4>
                <div class="progress-item">
                  <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span>70%</span></div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4">
                <h4 class="fs-20 progress-title">` +
      offerDiv_dt.four_month +
      `</h4>
                <div class="progress-item">
                  <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 87.3%;" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"><span>87.3%</span></div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4">
                <h4 class="fs-20 progress-title">` +
      offerDiv_dt.satisfy +
      `</h4>
                <div class="progress-item">
                  <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span>100%</span></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
        `
    );
  }

  const news_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        recent_event: "Recent Events",
        news1title: "Canadian Minister of Commerce Banquet",
        news1content:
          "Easy Group was invited to attend the Canadian Minister of Commerce and Trade Luncheon",
        news2content:
          "Jacky Zhang, founder of Easy Group, is on the 2018 China Forbes 30 Top 30 Under 30 Elite List",
        news3title: "Nearly 10 million USD in Series A financing",
        news3content:
          "Overseas university education and tutoring company Easy Group recently announced that it has received nearly 10 million USD in Series A financing from Jingwei China",
      };
    } else {
      return {
        recent_event: "最近事件",
        news1title: "加拿大商贸部长宴会",
        news1content: "Easy Group受邀参加加拿大商贸部长午宴",
        news2content:
          "Easy Group创始人Jacky Zhang上榜2018中国福布斯30位30岁以下精英榜",
        news3title: "Easy Group获近千万美元A轮融资",
        news3content:
          "海外大学教育辅导公司Easy Group近日宣布获得经纬中国近千万美元A轮融资",
      };
    }
  };

  function createNews() {
    news_dt = news_data();

    return (
      `
        <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>` +
      news_dt.recent_event +
      `</h2>
          </div>
        </div>
        <div class="row gutter-2 text-center">
          <div class="col-md-6 col-lg-4">
            <article class="tile">
              <div class="tile-image" style="background-image: url(` +
      assets_route +
      `images/events/news_2.jpg)"></div>
              <div class="tile-content">
                <div class="tile-header">
                  <span class="eyebrow mb-1">News</span>
                  <h3>` +
      news_dt.news1title +
      `</h3>
                </div>
                <div class="tile-footer">
                  <p>` +
      news_dt.news1content +
      `</p>
                </div>
              </div>
            </article>

          </div>
          <div class="col-md-6 col-lg-4">
            <article class="tile">
              <div class="tile-image" style="background-image: url(` +
      assets_route +
      `images/events/news_3.jpg)"></div>
              <div class="tile-content">
                <div class="tile-header">
                  <span class="eyebrow mb-1">News</span>
                  <h3></h3>
                  
                </div>
                <div class="tile-footer">
                  <p>` +
      news_dt.news2content +
      `</p>
                </div>
              </div>
            </article>
            
          </div>
          <div class="col-md-6 col-lg-4">
            <article class="tile">
              <div class="tile-image" style="background-image: url(` +
      assets_route +
      `images/events/news_1.jpg)"></div>
              <div class="tile-content">
                <div class="tile-header">
                  <span class="eyebrow mb-1">News</span>
                  <h3>` +
      news_dt.news3title +
      `</h3>
                </div>
                <div class="tile-footer">
                  <p>` +
      news_dt.news3content +
      `</p>
                
                </div>
              </div>
            </article>
            
          </div>
         
        </div>

      </div>
        `
    );
  }

  if (window.location.href.includes("/en/")) {
    if (companies_en) {
      $companies = $(createCompanies(companies_en));
    }
  } else {
    if (companies) {
      $companies = $(createCompanies(companies));
    }
  }

  $history = $(createHistory());

  $("#navbar").html(createNavbar("dark"));
  $("#cover").html(createCover());
  $("#about").html(createAbout());
  $("#gallery").html(createGallery());
  $("#product").html(createProduct());
  $("#offerDiv").html(createOfferDiv());
  $("#education").html(createEdu());
  $("#homeCarousel").html(createHomeCarousel());
  $("#homeNews").html(createNews());
  $("#history").html($history);
  $("#companies").html($companies);
  $("#footer").html(createFooter());
});
