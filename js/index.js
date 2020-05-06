$(document).ready(function(){

    let history_data = [
        {
            date: "2018",
            des: "Easy Career",
            src: "assets/images/office/1.jpg"
        },
        {
            date: "2018",
            des: "议员参会",
            src: "assets/images/events/event_4.jpg"
        },
        {
            date: "2018",
            des: "教学研讨会",
            src: "assets/images/events/event_3.jpg"
        },
        {
            date: "2018",
            des: "集团年会",
            src: "assets/images/events/event_2.jpg"
        },
        {
            date: "2017",
            des: "北京见面会",
            src: "assets/images/events/event_5.jpg"
        },
        {
            date: "2018",
            des: "年会谢幕",
            src: "assets/images/events/event_6.jpg"
        },
        {
            date: "2019",
            des: "Easy Group创始人张育维入选福布斯中国30 Under 30精英榜单（教育）",
            src: "assets/images/events/event_8.png"
        },
        {
            date: "2018",
            des: "易维集团获得加拿大总理签名贺信",
            src: "assets/images/events/event_9.png"
        },
        {
            date: "2018",
            des: "荣获胡润加中杰出企业家贡献奖",
            src: "assets/images/events/event_10.png"
        },
        {
            date: "2018",
            des: "出席宾夕法尼亚大学中美教育峰会",
            src: "assets/images/events/event_11.png"
        },
        {
            date: "2016",
            des: "Easy Group创始人张育维受邀成为灯塔创业论坛荣誉副主席",
            src: "assets/images/events/event_12.png"
        },
        {
            date: "2019",
            des: "易维教育获腾讯年度影响力国际教育品牌",
            src: "assets/images/events/event_13.png"
        },
        {
            date: "2019",
            des: "Easy Group 创始人张育维入选《2019年胡润Under30s创业领袖》榜单",
            src: "assets/images/events/event_15.png"
        },
        {
            date: "2019",
            des: "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲入选《2019年胡润Under30s创业领袖》榜单",
            src: "assets/images/events/event_14.png"
        },
        {
            date: "2019",
            des: "Easy Group 创始人张育维荣获《2019年胡润30 X 30创业领袖》提名",
            src: "assets/images/events/event_16.png"
        },
        {
            date: "2019",
            des: "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲荣获《2019年胡润30 X 30创业领袖》提名",
            src: "assets/images/events/event_16.png"
        },
 
        
    ];

    let hot_courses = [
        {
            name: "CFA一级百时班Plus",
            src: "cfa.html"
        },
        {
            name: "CFA二级百时班",
            src: "cfa2.html"
        },
        {
            name: "FRM保过班",
            src: "frm.html"
            
        },
        {
            name: "CSC证书班",
            src: "csc.html"
        },
        {
            name: "SAS双证班",
            src: "sas.html"
        },
        {
            name: "SOA证书班",
            src: "soa.html"
        },
        // {
        //     name: "CPA证书全程班",
        //     src: "cpa.html"
        // },
        {
            name: "Python ML全程班",
            src: "pythonml.html"
        },
        {
            name: "Tableau全程班",
            src: "tableau.html"
        },
        {
            name: "Python全程班",
            src: "python.html"
        },
        {
            name: "SQL全程班",
            src: "sql.html"
        },
        {
            name: "Excel VBA全程班",
            src: "excelvba.html"
        },
        {
            name: "Networking",
            src: "networking.html"
        },
        {
            name: "BA实战课",
            src: "ba.html"
        },
    ]

    let companies = [
        {
            country: ["北美", "USA"],
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
            ]

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

            ]
        },
        {
            country: ["加拿大", "Canada"],
            items: [
                ["RBC皇家银行", "RBC Royal Bank"],
                ["加拿大帝国商业银行", "Canadian Imperial Bank of Commerce"],
                ["丰业银行", "Scotiabank"],
                ["道明银行", "Toronto-Dominion Bank"],
                ["加拿大退休金计划投资局", "CPP INVESTMENT BOARD"],
                ["永明金融", "Sun Life Financial"],
                ["宏利金融", "Manulife"],
                ["贝尔", "Bell"],
                ["研科", "Telus"],
                ["罗杰斯通讯", "Rogers"],

            ]
        },

    ]

    let companies_en = [
        {
            country: ["USA", "USA"],
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
            ]

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

            ]
        },
        {
            country: ["加拿大", "Canada"],
            items: [
                ["RBC皇家银行", "RBC Royal Bank"],
                ["加拿大帝国商业银行", "Canadian Imperial Bank of Commerce"],
                ["丰业银行", "Scotiabank"],
                ["道明银行", "Toronto-Dominion Bank"],
                ["加拿大退休金计划投资局", "CPP INVESTMENT BOARD"],
                ["永明金融", "Sun Life Financial"],
                ["宏利金融", "Manulife"],
                ["贝尔", "Bell"],
                ["研科", "Telus"],
                ["罗杰斯通讯", "Rogers"],

            ]
        },

    ]

    function createHotCourses(hot_courses) {
        let temp_html = ""

        temp_html += `
        <div class="container">
        <div class="row justify-content-between text-center">
          <div class="col-12 col-lg-12">
            <div class="row gutter-0">
        `
        for (block of hot_courses) {
            temp_html += 
            `
            <div class="col-sm-6 col-lg-4">
                <div class="rising p-3 bg-white">
                    <a href=`+block.src+`><h4 class="text-gray">`+block.name+`</h4></a>
                </div>
            </div>
            `
        }

        temp_html += 
        `
            </div>
            </div>
        </div>
        </div>
        `

        return temp_html
    }

    function createHistory(history_data) {
        let temp_html = ""

        temp_html += 
        `
        <div class="row" data-aos="fade-left" data-aos-delay="300">
        <div class="col">
        <div class="owl-carousel visible" data-items="[3,2,1]" data-margin="20" data-dots="true" data-loop="true" data-center="true">
        `

        for (block of history_data) {

            temp_html += `
            <article class="tile tile-long">
                <div class="tile-image" style="background-image: url(`+block.src+`)"></div>
                <a class="tile-content">
                
                <div class="tile-footer">
                    <span class="eyebrow">`+block.date+`</span>
                    <h5>`+block.des+`</h5>
                </div>
                </a>
            </article>
            `

        }

        temp_html += `
        </div>
        </div>
        </div>
        `
        return temp_html
    }

    function createCompanies(companies) {
        tempHTML = `
        
            <div class="col-md-8">
                <div class="row gutter-1">
        `

        for (col of companies) {
            tempHTML += 
            `
            <div class="col-md-4">
            <div class="bordered rising p-2 p-md-4">
              <h5 class="mb-0">`+col.country[0]+`</h5>
              <span class="d-block text-primary mb-1">`+col.country[1]+`</span>
            `
            
            for (item of col.items) {
                tempHTML += 
                `
                <h6 class="text-dark mb-0">`+item[0]+`</h6>
                <span class="d-block text-grey mb-1">`+item[1]+`</span>
                `
            }
            tempHTML += `
            </div>
            </div>
            `
        }
        tempHTML += 
        `
                </div>
            </div>

        `

        return tempHTML;
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

    $history = $(createHistory(history_data));
    $hot_courses = $(createHotCourses(hot_courses));

   

    $("#navbar").html(createNavbar("dark"));
    $("#history").html($history);
    $('#hot_courses').html($hot_courses);
    $('#companies').html($companies)
    $('#footer').html(createFooter());
});