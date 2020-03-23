

$(document).ready(function(){
    // var content = "<h2>jQuery Hello World!</h2>";

    var data_1 = [
        {
            title:"Personal Assessment I",
            items: [
                {
                    title_en: "Life Coaching Assessment",
                    title_cn: "人生规划评估",
                    content: "注册心理咨询师针对学员现阶段，career、life time goal等方面进行全面分析解惑，出具报告",
                    packages: [
                        "-", "1.5 hr + Report", "1.5 hr + Report"
                    ]
                }, 
            ]
        }, 
        {
            title:"Career Consultation",
            items: [
                {
                    title_en: "Career Planning & Industry Insight",
                    title_cn: "职业规划 & 行业剖析",
                    content: "专业导师进行职业规划与行业剖析",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Academic & Activity Planning",
                    title_cn: "专业导师进行学术与课外活动的定制规划",
                    content: "",
                    packages: [
                        "-", "-", "1 Hour"
                    ]
                }
            ]
        }, 
        {
            title:"Personal Profile Editing",
            items: [
                {
                    title_en: "Resume Editing",
                    title_cn: "简历精修",
                    content: "",
                    packages: [
                        "1 Hour + 2 Rounds 精修", "1 Hour + 2 Rounds 精修", "1 Hour + 2 Rounds 精修"
                    ]
                }, 
                {
                    title_en: "Cover Letter Editing",
                    title_cn: "求职信精修",
                    content: "",
                    packages: [
                        "1 Round", "1 Round", "1 Round"
                    ]
                },                {
                    title_en: "Linkedin Profile Editing",
                    title_cn: "Linkedin专属个人主页打造",
                    content: "",
                    packages: [
                        "-", "1 Hour", "1 Hour"
                    ]
                },
            ]
        },
        {
            title:"Networking",
            items: [
                {
                    title_en: "Networking Skill Development",
                    title_cn: "建立行业人脉",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Networking Email Editing",
                    title_cn: "人脉拓展技能训练",
                    content: "",
                    packages: [
                        "5 Times", "Unlimited", "Unlimited"
                    ]
                },
                {
                    title_en: "Coffee Chat",
                    title_cn: "与行业大咖进行咖啡约谈",
                    content: "",
                    packages: [
                        "-", "5 Times", "Unlimited"
                    ]
                },
                {
                    title_en: "Networking Event Invitation",
                    title_cn: "人脉拓展活动邀请",
                    content: "",
                    packages: [
                        "-", "-", "Unlimited"
                    ]
                },
            ]
        },
        {
            title:"Soft Skill Development",
            items: [
                {
                    title_en: "Secret to Effective Communication I: Structured Speaking",
                    title_cn: "沟通技能训练I",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "3 Hour"
                    ]
                }, 
                {
                    title_en: "Secret to Effective Communication II: Beyond Verbal",
                    title_cn: "沟通技能训练II",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "3 Hour"
                    ]
                },
                {
                    title_en: "Key to Engaging Conversation: Insightful Question & Active Listening",
                    title_cn: "沟通技能训练III",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "3 Hour"
                    ]
                },
                {
                    title_en: "Ace the Behaviour Interview: How to Tell Stories",
                    title_cn: "基础行为面试准备",
                    content: "",
                    packages: [
                        "2 Hours", "2 Hours", "？？？"
                    ]
                },
            ]
        },
        {
            title:"Hard Skill Development",
            items: [
                {
                    title_en: "Hard Skill Training Course Access ($3000)",
                    title_cn: "价值$3000刀硬技能线上培训精品速成小班课",
                    content: "",
                    packages: [
                        "Choose 2 From 5 Courses", "Choose 3 From 5 Courses", "All inclusive"
                    ]
                }, 
            ]
        },  
        {
            title:"Internship Placement",
            items: [
                {
                    title_en: "Internship Trianning Program",
                    title_cn: "多伦多本地实习",
                    content: "",
                    packages: [
                        "8 Weeks", "8 Weeks", "16 Weeks"
                    ]
                }, 
                {
                    title_en: "US Remote Internship Program",
                    title_cn: "美国远程实习",
                    content: "",
                    packages: [
                        "4 - 6 Weeks", "4 - 6 Weeks", "4 - 6 Weeks"
                    ]
                }, 
            ]
        }, 
    ];

    var data_2 = [
        {
            title:"Personal Assessment II",
            items: [
                {
                    title_en: "Competitiveness Analysis",
                    title_cn: "求职竞争力分析",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                }, 
            ]
        }, 
        {
            title:"Job Application Support",
            items: [
                {
                    title_en: "Resume Tailoring",
                    title_cn: "针对岗位的简历精修",
                    content: "",
                    packages: [
                        "-", "2 Rounds", "Unlimited"
                    ]
                }, 
                {
                    title_en: "Cover Lettering Tailoring",
                    title_cn: "针对岗位的求职信精修",
                    content: "",
                    packages: [
                        "-", "1 Rounds", "Unlimited"
                    ]
                }, 
                {
                    title_en: "Online Application Support I",
                    title_cn: "网申辅导I（针对不同公司的网申准备）",
                    content: "",
                    packages: [
                        "-", "-", "1 Hour"
                    ]
                },
                {
                    title_en: "Online Application Support II",
                    title_cn: "网申辅导II（针对不同公司的简历投递技巧）",
                    content: "",
                    packages: [
                        "-", "-", "40 Jobs"
                    ]
                },
                {
                    title_en: "Online Test/Assesment Support",
                    title_cn: "网申测试准备",
                    content: "",
                    packages: [
                        "-", "1 Hour", "2 Hours"
                    ]
                },
            ]
        }, 
        {
            title:"Interview Preparation",
            items: [
                {
                    title_en: "Behaviour Interview Preparation",
                    title_cn: "行为面试准备",
                    content: "",
                    packages: [
                        "???", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Technical/Case Interview Preparation",
                    title_cn: "技能面试准备",
                    content: "",
                    packages: [
                        "???", "2 Hours", "2 Hours"
                    ]
                }
            ]
        },
        {
            title:"Mock Interview",
            items: [
                {
                    title_en: "Mock Interview",
                    title_cn: "模拟面试",
                    content: "",
                    packages: [
                        "2 Hours", "2 Hours", "4 Hours"
                    ]
                }
            ]
        },
        {
            title:"Others",
            items: [
                {
                    title_en: "Action Accelerator & Consultation Session",
                    title_cn: "求职心理疏导 & 缓解求职压力",
                    content: "",
                    packages: [
                        "-", "-", "4 Hours"
                    ]
                }, 
                {
                    title_en: "Office Hours",
                    title_cn: "Office Hours 在线答疑",
                    content: "",
                    packages: [
                        "-", "Unlimited", "Unlimited"
                    ]
                },
                {
                    title_en: "Bonus Sessions",
                    title_cn: "附加课程（学生可根据自行需要与导师约课）",
                    content: "",
                    packages: [
                        "1 Hour", "2 Hours", "4 Hours"
                    ]
                },
            ]
        }
    ];

    var data_3 = [
        {
            title:"Pre-Employment Prep.",
            items: [
                {
                    title_en: "Pre-Employment Preparation: Hard Skill",
                    title_cn: "基础硬技能培训",
                    content: "",
                    packages: [
                        "-", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Pre-Employment Preparation: Soft Skill",
                    title_cn: "基础软技能培训",
                    content: "",
                    packages: [
                        "-", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Career Advancement Coaching",
                    title_cn: "职场升职辅导",
                    content: "",
                    packages: [
                        "-", "1 Hour", "1 Hour"
                    ]
                }, 
            ]
        }, 
    ];

    var allData = [data_1, data_2, data_3];
    
    var $tableOne = $("<div></div>");
    var $tableTwo = $("<div></div>");
    var $tableThree = $("<div></div>");

    var tables = [$tableOne, $tableTwo, $tableThree];

for (j = 0; j < tables.length; j++) {

    for (block of allData[j]) {
        
        // title comp
        var $title = $(`<h4 class="mb-1"></h4>`);
        var $title_content = $(`<strong></strong>`);
        $title_content.append(block.title);
        $title.append($title_content);

        var $theRow = $(`<div class="row mb-3"></div>`)
        // item comp
        for (item of block.items) {
            //Left column
            var $left_col = $(`<div class="col-4 mb-2"></div>`);
            var $title_en = $(`<h5 class="mb-0 text-yellow"></h5>`);
            var $title_cn = $(`<h6 class="mb-2"></h6>`);
            var $content = $(`<h8 class="mb-1"></h8>`);

            $title_en.append(item.title_en);
            $title_cn.append(item.title_cn);
            $content.append(item.content);
            
            $left_col.append($title_en);
            $left_col.append($title_cn);
            $left_col.append($content);

            //Right column
            var $right_col = $(`<div class="col-md-8 col-md-8 align-self-md-center"></div>`);
            var $right_col_content = $(`<a class="row text-center"></a>`);

            for (i = 0; i < item.packages.length; i++) {
                var $thePack = $(`<span class="col-md-4"></span>`);
                $thePack.append(item.packages[i]);
                $right_col_content.append($thePack);
            }

            $right_col.append($right_col_content);
            $theRow.append($left_col);
            $theRow.append($right_col);
        }


        tables[j].append($title);
        tables[j].append($theRow);
    }

}

    $("#phaseOne").html($tableOne);
    $("#phaseTwo").html($tableTwo);
    $("#phaseThree").html($tableThree);
});