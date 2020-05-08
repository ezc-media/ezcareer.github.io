
$(document).ready(function(){

    
    const page_title = "CFA一级百时班 | Easy Career";
    const course_name = `CFA一级百时班<i style="color: #33aacc ">Plus</i>`;
    const course_name_des = "CFA资深讲师，前北京新东方名师带你一次通过CFA证书考试";
    const price_origin = "2200";
    const price_discount = "1700";
    const course_open_date = "近期开班";
    const course_link = "https://ezcareer.shop/collections/2020-1/products/2020-2-cfa-level-1-plus-dt-1";
    const about_course = "全程百时班Plus包含基础串讲、强化复习与千题冲刺三大板块，由国内顶级CFA资深讲师“周华鑫”助力教研，系统梳理CFA1~2级知识点，覆盖各科目的考点重难点，结合独家的概念与公式手册、全真模拟考试、千题训练与押题，带你用别人一半的时间通关CFA 1~2级。    ";
    const course_points = [
        {
            title: "基础串讲",
            des: "实现对每个知识点了如指掌，真正透彻理解每个知识点，打牢基础。",
            icon: "icon-bar-chart-2"
        },
        {
            title: "强化复习",
            des: "通过对要点快速复习，建立系统的知识框架，攻破重难点的记忆与考试技巧。",
            icon: "icon-award"
        },
        {
            title: "千题冲刺",
            des: "官方原版书习题 + 官方模考 + Exam Prep + 独家重点高频表（押题）与习题等超过2000道题目，集中训练，差缺不漏。",
            icon: "icon-command"
        },
        {
            title: "签约保过",
            des: "CFA学员若未通过考试，可全额退款，具体信息请咨询小助手。",
            icon: "icon-check-circle2"
        },


    ];
    const target_group = [
        {
            title: "金融从业人员",
            des: "目前已经入职银行等相关行业，担任入门级工作，但是希望继续晋升和发展的在职员工"
        },
        {
            title: "新移民",
            des: "刚刚来到加拿大，希望学习新技能，增加就业机会的、提高发展前景、提升自身实力的新移民"
        },
        {
            title: "其他行业",
            des: "目前已经就职在其他行业，但是依然想进入投行金融、咨询行业的其他行业人员"
        },
    ];

    const hot_comps_data = [
        {
            src: assets_route + "images/courses/CFA/comp-1.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-2.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-3.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-4.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-5.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-6.png"
        },
        {
            src: assets_route + "images/courses/CFA/comp-7.png"
        },

    ]

    const about_course_des = "建立金融知识体系，真题实训，保过考试";


    const course_list_tab = ["基础串讲","强化复习","刷题冲刺"];
    const course_list = [
            [
                {
                    title: "Quantitative",
                    detail: "01.18"
                },{
                    title: "Quantitative",
                    detail: "01.19"
                },{
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "02.01"
                },
                {
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "02.02"
                },
                {
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "02.08"
                },
                {
                    title: "Equity",
                    detail: "02.15"
                },
                {
                    title: "Equity",
                    detail: "02.16"
                },
                {
                    title: `Corporate 
                    Finance`,
                    detail: "02.29"
                },
                {
                    title: `Corporate 
                    Finance`,
                    detail: "03.01"
                },
                {
                    title: "Economics",
                    detail: "03.07"
                },
                {
                    title: "Economics",
                    detail: "03.08"
                },
                {
                    title: "Derivatives",
                    detail: "03.14"
                },
                {
                    title: `Alternative 
                    Investments`,
                    detail: "03.15"
                },
                {
                    title: "Fixed Income",
                    detail: "03.21"
                },
                {
                    title: "Fixed Income",
                    detail: "03.22"
                },
                {
                    title: "Portfolio",
                    detail: "03.29"
                },
                {
                    title: "Ethics",
                    detail: "04.05"
                },
            ],[
                {
                    title: "Quantitative",
                    detail: "04.25"
                },{
                    title: `Economics`,
                    detail: "04.26"
                },
                {
                    title: `Financial 
                    Reporting 
                    & Analysis`,
                    detail: "05.01"
                },
                {
                    title: "Corporate Finance",
                    detail: "05.02"
                },
                {
                    title: `Equity`,
                    detail: "05.03"
                },
                {
                    title: `
                    · Portfolio <br/>
                    · Derivatives <br/>
                    · Alternative Investment <br/>`,
                    detail: "05.06"
                },
                {
                    title: `Fixed Income`,
                    detail: "05.09"
                },
                {
                    title: `Ethics`,
                    detail: "05.10"
                },
                {
                    title: `强化阶段模考`,
                    detail: "05.13"
                },
            ], [
                {
                    title: `
                    · Quantitative <br/>
                    · Economics <br/>`,
                    detail: "05.15"
                },{
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "05.16"
                },{
                    title: `
                    · Corporate Finance <br/>
                    · Equity <br/>`,
                    detail: "05.17"
                },
                {
                    title:  `
                    · Portfolio <br/>
                    · Derivatives <br/>
                    · Alternative Investment <br/>`,
                    detail: "05.22"
                },
                {
                    title: `Fixed Income`,
                    detail: "05.23"
                },
                {
                    title: `Ethics
                    `,
                    detail: "05.24"
                },
                {
                    title: `模考`,
                    detail: "05.31"
                },
                {
                    title: "June Exam",
                    detail: "06.06"
                }
            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=AjERHb5rVpU", cover:assets_route + "images/tutor/shelby.jpg"}

    const teacher_name = [
        "周华鑫 Shelby",
        "月半 Alex",
        "Jack",
    ]

    const text_books = [
        {
            title: "CFA百词斩 I",
            des: "全部知识点概念注释与解读"
        },
        {
            title: "CFA百词斩 II",
            des: "考试必考公式汇总与习题解答"
        },
        {
            title: "知识框架图",
            des: "快速搭建CFA知识体系"
        },
        {
            title: "科目独家讲义",
            des: "随堂讲义，反复巩固"
        },
        {
            title: "考场专用计算器",
            des: "BA II Plus计算器免费送"
        },
        {
            title: "备考读物Notes",
            des: "报名就送权威Notes"
        },
        
    ]

    const text_books_picture = assets_route + "images/page/MockUp.png"

    const carousels = [
        {
            sml_title: "",
            big_title: "成功案例",
            content: [
                {
                    src: assets_route + "images/records/CFA1.png"
                },
                {
                    src: assets_route + "images/records/CFA2.png"
                },
                {
                    src: assets_route + "images/records/CFA3.png"
                },
                {
                    src: assets_route + "images/records/CFA4.png"
                },
                {
                    src: assets_route + "images/records/CFA5.png"
                },
                {
                    src: assets_route + "images/records/CFA6.png"
                },
            ]
        },
        {
            sml_title: "",
            big_title: "学员反馈",
            content: [
                {
                    src: assets_route + "images/courses/CFA/review-1.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-2.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-3.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-4.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-5.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-6.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-7.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-8.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-9.jpg"
                },
                {
                    src: assets_route + "images/courses/CFA/review-10.jpg"
                },
                {
                    src: assets_route + "images/courses/CFA/review-11.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-12.jpg"
                },
                {
                    src: assets_route + "images/courses/CFA/review-13.png"
                },
                {
                    src: assets_route + "images/courses/CFA/review-14.png"
                },
            ]
        },

    ]


    $page_title = $(`<title>` + page_title + `</title>`);
    $text_books_picture = $(`
    <img class="top-0 ml-15" src=`+text_books_picture+`  alt="Decoration">
    `)



    // Hot companies 

    // function createCompany(hot_comps_data) {
    //     let hot_comp_html = `
    //     <div class="row justify-content-start">
    //     <div class="col-sm-6 col-lg-4">
    //       <h4 class="mb-1"><b>热门目标公司</b></h4>
    //       <h6 class="mb-2 text-ezc"></h6>
    //     </div>

    //     <div class="row mt-8" data-aos="zoom-in">
    //       <div class="col partners align-items-center">
    //         <div class="owl-carousel" data-items="[6,4,2]">
    //     `

    //     let end_html = `
    //             </div>
    //             </div>
    //         </div>

    //         </div>
    //         `
        
        
    //         hot_comp_html += `
    //         <div class="logo">
    //         <img src=assets_route + "images/demo/logo/logo-1.png" alt="Logo">
    //         </div>
    //         `
        

    //     hot_comp_html += end_html;

    //     return hot_comp_html;

    // }
    // $hot_comps = $(createCompany(hot_comps_data));
    // $("#hot_comps").html($hot_comps);


    $("#page_title").html($page_title);
    $("#navbar").html(createNavbar("light"));
    $(`#cover`).html(createCover(course_name, course_name_des, price_discount, price_origin, course_open_date, video_info, course_link));
    $(`#about`).html(createAbout(about_course_des, about_course, course_points, target_group, hot_comps_data));
    $(`#courseTable`).html(createCourseTable(course_list_tab, course_list, course_link));
    $(`#teachers`).html(createTeacher(teacher_name));
    $("#text_books").html(create_textbook(text_books));
    $("#text_books_picture").html($text_books_picture);
    $("#all_carousel").html(createCarousel(carousels));
    $('#footer').html(createFooter());

});