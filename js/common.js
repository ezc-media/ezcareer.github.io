
let link_lang = ""
let assets_route = "assets/"

if (window.location.href.includes("/en/")) {
    link_lang = "en/"
    assets_route = "../assets/"
}

const certi_course = () => {
    
    if (window.location.href.includes("/en/")) {
        
        return [
            {
                main_title: "CFA I Hundred Hours Plus Course",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `cfa.html`
            },
            {
                main_title: "CFA II Hundred Hour Course",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `cfa2.html`
            },
            {
                main_title: "FRM Pass Guaranteed Course",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `frm.html`
            },
            {
                main_title: "CSC Certification Class",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `csc.html`
            },
            {
                main_title: "SAS Double Certificate Class",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `sas.html`
            },
            {
                main_title: "SOA Certificates Class",
                sub_title: "Pass Guaranteed | ON/OFFline | North America",
                link: link_lang + `soa.html`
            },
        ]
    } else {
        return [
            {
                main_title: "CFAI级 百时班Plus",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `cfa.html`
            },
            {
                main_title: "CFAII级 百时班",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `cfa2.html`
            },
            {
                main_title: "FRM保过班",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `frm.html`
            },
            {
                main_title: "CSC证书班",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `csc.html`
            },
            {
                main_title: "SAS双证班",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `sas.html`
            },
            {
                main_title: "SOA证书班",
                sub_title: "签约保过 | 线上线下 | 北美同开",
                link: link_lang + `soa.html`
            },
        ]
    }
}

const skill_course = () => {
    
    if (window.location.href.includes("/en/")) {
        
        return [
            {
                main_title: "Python ML Full Course",
                sub_title: "Live Course | North America | U of Alberta",
                link: link_lang + `pythonml.html`
            },
            {
                main_title: "Tableau Full Course",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `tableau.html`
            },
            {
                main_title: "Python Full Course",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `python.html`
            },
            {
                main_title: "SQL Full Course",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `sql.html`
            },
            {
                main_title: "Excel VBA Full Course",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `excelvba.html`
            },
            {
                main_title: "Networking",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `networking.html`
            },
            {
                main_title: "BA Pratical Course",
                sub_title: "ON/OFFline | North America",
                link: link_lang + `ba.html`
            },
        ]
    } else {
        return [
            {
                main_title: "Python ML全程班",
                sub_title: "线上直播 | 北美同开 | UA校区",
                link: link_lang + `pythonml.html`
            },
            {
                main_title: "Tableau全程班",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `tableau.html`
            },
            {
                main_title: "Python全程班",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `python.html`
            },
            {
                main_title: "SQL全程班",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `sql.html`
            },
            {
                main_title: "Excel VBA全程班",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `excelvba.html`
            },
            {
                main_title: "Networking",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `networking.html`
            },
            {
                main_title: "BA实战课",
                sub_title: "线上线下 | 北美同开",
                link: link_lang + `ba.html`
            },
        ]
    }
}

const registration_course = () => {
    if (window.location.href.includes("/en/")) {
        return [
            {
                main_title: "Student Portal",
                sub_title: "Registered Student Only",
                link: `http://moodle.ez4edu.com`
            },
            {
                main_title: "Grand Toronto Area",
                sub_title: "Waterloo | ON/OFFline Courses",
                link: `https://ezcareer.shop`
            },
            {
                main_title: "Alberta Area",
                sub_title: "ON/OFFline Courses",
                link: link_lang + `https://ezc-alberta.shop`
            },
            
        ]
    } else {
        return [
            {
                main_title: "学员系统",
                sub_title: "已经报名课程的同学",
                link: `http://moodle.ez4edu.com`
            },
            {
                main_title: "大多伦多地区",
                sub_title: "包括滑铁卢 | 线上及线下课程",
                link: `https://ezcareer.shop`
            },
            {
                main_title: "阿尔伯塔地区",
                sub_title: "线上及线下课程",
                link: link_lang + `https://ezc-alberta.shop`
            },
            
        ]
    }
}

const teachers = {
    "周华鑫 Shelby": 
    {
        name: "周华鑫 Shelby",
        title: "CFA & FRM双料持证人",
        des: `前北京新东方教师, 10年教学经验;<br> CFA三级成绩全球Top 0.5%; <br>曾执教于人民大学, 中央财经大学, 北方工业大学;<br>前巴基斯坦驻华使馆翻译主管, 大使翻译`,
        src: "assets/images/tutor/shelby.png"
    },
    "周悦 Jorry": 
    {
        name: "周悦 Jorry",
        title: "CPA持证人",
        des: `前PwC咨询师，
        6个月高分通过USCPA全科，
        熟悉Financial Reporting and Analysis考试中的重难点套路`,
        src: "assets/images/tutor/jorry.png"
    }, 
    "刘畅": 
    {
        name: "刘畅",
        title: "北京市一级教师",
        des: `曾获北京市三好学生，收获好评无数，在线学员超10万人。`,
        src: "assets/images/tutor/liuchang.png"
    },
    "Andy Li": 
    {
        name: "Andy Li",
        title: "现就职于加拿大皇家银行 RBC，担任Senior Manager",
        des: `已获得CSC与CPA认证，同时也是国际注册内部审计师（CIA），CPA Ontario专业教育（PEP)认证导师
        研究生毕业于多伦多大学Rotman商学院 Master of Finance
        金融领域职业辅导名师，毕业前就已斩获四大与五大行Offer`,
        src: "assets/images/tutor/andyli.png"
    },
    "Leo老师": 
    {
        name: "Leo老师",
        title: `美国五大银行Capital One高级
        数据科学家`,
        des: `超过8年数据领域培训经验。
        深挖行业前沿技术。
        `,
        src: "assets/images/tutor/man.svg"
    },
    "Josh老师": 
    {
        name: "Josh老师",
        title: `现就职于加拿大最大的养老金投资基金，
        担任投资分析师。 专注于资产分配和
        跨资产投资研究。`,
        des: `曾任职于J.P.Morgan Asset Management，
        专门研究阿尔法驱动策略。 
        毕业于多伦多大学 经济学与数学应用专业
        `,
        src: "assets/images/tutor/man.svg"
    },
    "Tia老师": 
    {
        name: "Tia老师",
        title: `多大金融工程研究生毕业`,
        des: `目前就职于世界最大的养老金机构之一CPPIB从事资产管理工作。拥有丰富的Networking经验，曾通过Networking斩获多分实习以及全职工作的Offer
        `,
        src: "assets/images/tutor/woman.svg"
    },
    "Evan": 
    {
        name: "Evan",
        title: `5年CFA教学经验，CFA三级高分通过`,
        des: `现任多伦多大型Pension Fund高级分析师
        段子手里，最会讲CFA的
        `,
        src: "assets/images/tutor/man.svg"
    },
    "Bob": 
    {
        name: "Bob",
        title: `3年CFA教学经验，CFA持证人，CFA协会前考官`,
        des: `参与多年CFA培训项目与监考
        现就职于BMO Capital Markets 任高级分析师
        `,
        src: "assets/images/tutor/man.svg"
    },
    "月半 Alex": 
    {
        name: "月半 Alex",
        title: `曾就职于顶级投行部`,
        des: `6年多大金融课程资深名师, 多伦多最懂Economics和, Fixed Income的经济学人, 曾就职于顶级投行部，约克Schulich商学院硕士
        `,
        src: "assets/images/tutor/AlexJiao.png"
    },
    "Jack": 
    {
        name: "Jack",
        title: `3年多大高级金融课程人气名师`,
        des: `熟悉Quantitative和Derivatives考试中的重难点套路，经济金融统计课程GPA4.0
        `,
        src: "assets/images/tutor/JackZhang.png"
    },
    "Z老师": 
    {
        name: "Z老师",
        title: `U of A Ph.D. in Computer Science`,
        des: `研究方向为Sensor Network，Transfer Learning。3篇Machine Learning/ Transfer Learning 相关 ACM/ IEEE publications。
        `,
        src: "assets/images/tutor/man.svg"
    },

}