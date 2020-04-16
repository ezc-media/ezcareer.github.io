

$(document).ready(function(){

    let data_1 = [
        {
            title:"Personal Assessment I",
            items: [
                {
                    title_en: "Life Coaching Assessment",
                    title_cn: "人生规划评估",
                    content: "注册心理咨询师针对学员现阶段，career、life time goal等方面进行全面分析解惑，出具报告",
                    packages: [
                        "Not Included", "1.5 hr + Report", "1.5 hr + Report"
                    ]
                }, 
                {
                    title_en: "Academic & Activity Planning",
                    title_cn: "专业导师进行学术与课外活动的定制规划",
                    content: "",
                    packages: [
                        "Not Included", "Not Included", "1 Hour"
                    ]
                }
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
                        "30 Minutes", "30 Minutes", "1 Hour"
                    ]
                }, 

            ]
        }, 
        {
            title:"Job Application Strategy",
            items: [
                {
                    title_en: "Personalized Job Application Strategy",
                    title_cn: "个人定制化工作申请策略",
                    content: "专业导师进行职业规划与行业剖析",
                    packages: [
                        "Not Included", "1 Hour", "2 Hours"
                    ]
                }, 

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
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                },
            ]
        },
        {
            title:"Networking",
            items: [
                {
                    title_en: "Networking Skill Development",
                    title_cn: "人脉拓展技能训练",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Networking Email Editing",
                    title_cn: "Networking邮件精修",
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
                        "Not Included", "5 Times", "Unlimited"
                    ]
                },
                {
                    title_en: "Networking Event Invitation",
                    title_cn: "人脉拓展活动邀请",
                    content: "",
                    packages: [
                        "Not Included", "Not Included", "Unlimited"
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
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Secret to Effective Communication II: Beyond Verbal",
                    title_cn: "沟通技能训练II",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                },
                {
                    title_en: "Key to Engaging Conversation: Insightful Question & Active Listening",
                    title_cn: "沟通技能训练III",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                },
                {
                    title_en: "Ace the Behaviour Interview: How to Tell Stories",
                    title_cn: "基础行为面试准备",
                    content: "",
                    packages: [
                        "1 Hour", "1 Hour", "1 Hour"
                    ]
                },
            ]
        },
        {
            title:"Hard Skill Development",
            items: [
                {
                    title_en: "Hard Skill Training Course Access ($2500)",
                    title_cn: "价值$2500刀硬技能线上培训精品速成小班课",
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
                    title_en: "Internship Trianning Program (Optional)",
                    title_cn: "多伦多本地实习",
                    content: "",
                    packages: [
                        "8 Weeks", "8-12 Weeks", "16 Weeks"
                    ]
                }, 
                {
                    title_en: "US Remote Internship Program (Optional)",
                    title_cn: "美国远程实习",
                    content: "",
                    packages: [
                        "4-6 Weeks", "4-6 Weeks", "4-6 Weeks"
                    ]
                }, 
            ]
        }, 
    ];

    let data_2 = [
        {
            title:"Personal Assessment II",
            items: [
                {
                    title_en: "Competitiveness Analysis",
                    title_cn: "求职竞争力分析",
                    content: "",
                    packages: [
                        "1 Hour + Report", "1 Hour + Report", "1 Hour + Report"
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
                        "Not Included", "2 Rounds", "Unlimited"
                    ]
                }, 
                {
                    title_en: "Cover Lettering Tailoring",
                    title_cn: "针对岗位的求职信精修",
                    content: "",
                    packages: [
                        "Not Included", "1 Rounds", "Unlimited"
                    ]
                }, 
                {
                    title_en: "Online Application Support I",
                    title_cn: "网申辅导I（针对不同公司的网申准备）",
                    content: "",
                    packages: [
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                },
                {
                    title_en: "Online Application Support II",
                    title_cn: "网申辅导II（针对不同公司的简历投递技巧）",
                    content: "",
                    packages: [
                        "Not Included", "Not Included", "40 Jobs"
                    ]
                },
                {
                    title_en: "Online Test/Assesment Support",
                    title_cn: "网申测试准备",
                    content: "",
                    packages: [
                        "Not Included", "1 Hour", "2 Hours"
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
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Technical Interview Preparation",
                    title_cn: "技能面试准备",
                    content: "",
                    packages: [
                        "Not Included", "2 Hours", "2 Hours"
                    ]
                },
                {
                    title_en: "Case Interview Preparation",
                    title_cn: "案例面试准备",
                    content: "",
                    packages: [
                        "Not Included", "2 Hours", "2 Hours"
                    ]
                },
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
                        "Not Included", "Not Included", "4 Hours"
                    ]
                }, 
                {
                    title_en: "Office Hours",
                    title_cn: "Office Hours 在线答疑",
                    content: "",
                    packages: [
                        "Not Included", "Unlimited", "Unlimited"
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

    let data_3 = [
        {
            title:"Pre-Employment Prep.",
            items: [
                {
                    title_en: "Pre-Employment Preparation: Hard Skill",
                    title_cn: "基础硬技能培训",
                    content: "",
                    packages: [
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Pre-Employment Preparation: Soft Skill",
                    title_cn: "基础软技能培训",
                    content: "",
                    packages: [
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                }, 
                {
                    title_en: "Career Advancement Coaching",
                    title_cn: "职场升职辅导",
                    content: "",
                    packages: [
                        "Not Included", "1 Hour", "1 Hour"
                    ]
                }, 
            ]
        }, 
    ];

    let allData = [data_1, data_2, data_3];
    let stages = [

        {phase_en: "Phase 1", phase_cn: "求职准备阶段"}, 
        {phase_en: "Phase 2", phase_cn: "求职冲刺阶段"}, 
        {phase_en: "Phase 3", phase_cn: "职前辅导阶段"}

    ];

    
    let $packOne = $("<div></div>");
    let $packTwo = $("<div></div>");
    let $packThree = $("<div></div>");

    let packs = [$packOne, $packTwo, $packThree];

    
    for (x = 0; x < stages.length; x++) {

        
        for (y = 0; y < allData.length; y++) { 
            let $phase_en = $(`<h2 class="mb-0"></h2>`);
            // let $phase_content = $(`<strong></strong>`);
            $phase_en.append(stages[y].phase_en);
            // $phase.append($title_content);
    
            let $phase_cn = $(`<h5 class="mb-4"></h5>`);
            // let $phase_content = $(`<strong></strong>`);
            $phase_cn.append(stages[y].phase_cn);
            // $phase.append($title_content);
    
            packs[x].append($phase_en);
            packs[x].append($phase_cn)
            
            for (block of allData[y]) {
                let $title_content = $(`<strong class="text-yellow"></strong>`);
                let $title = $(`<h4 class="mb-1"></h4>`);
                $title_content.append(block.title);
                $title.append($title_content);

                packs[x].append($title);

                for (item of block.items) {
                    let $theRow = $(`<div class="row"></div>`);
                    let $left_col = $(`<div class="col-4 mb-0"></div>`);
                    
                    let $title_en = $(`<h5 class="mb-0 text-info"></h5>`);
                    let $title_cn = $(`<h5 class="mb-2 text-secondary"></h5>`);
    
                    $title_en.append(item.title_en);
                    $title_cn.append(item.title_cn);
    
                    $left_col.append($title_en);
                    $left_col.append($title_cn);
    
                    // Right column
                    let $right_col = $(`<div class="col"></div>`);
                    let $right_col_content = $(`<a class="job row align-items-center"></a>`);
    
                    // Diff pack
                    let $spanOne = $(`<span class="col-md-6 font-weight-light text-white"></span>`);
                    let $spanTwo = $(`<span class="col-md-4"></span>`);
                    let $spanThree = $(`<span class="col-md-3 text-md-right"></span>`);
    
                    $spanOne.append(item.packages[x]);
    
                    $right_col_content.append($spanOne);
                    $right_col_content.append($spanTwo);
                    $right_col_content.append($spanThree);
                    $right_col.append($right_col_content);

                    $theRow.append($left_col);
                    $theRow.append($right_col);
                    packs[x].append($theRow);
                }
            }
        }


    }

    $("#packOne").html($packOne);
    $("#packTwo").html($packTwo);
    $("#packThree").html($packThree);
    $("#navbar").html(createNavbar("dark"));
    $('#footer').html(createFooter());

});