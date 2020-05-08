
$(document).ready(function(){

    const page_title = "CFA二级百时班 | Easy Career";
    const course_name = `CFA百时班<i style="color: #33aacc ">二级</i>`;
    const course_name_des = "CFA资深讲师，前北京新东方名师带你一次通过CFA证书考试";
    const price_origin = "N/A";
    const price_discount = "2400";
    const course_open_date = "2月";
    const course_link = "https://ezcareer.shop/collections/2020-1/products/2020-1-cfa-level-2-plus-dt-1";
    const about_course = "Easy Career的CFA证书班涵盖CFA二级证书中所有知识点与考点。";
    const course_points = [
        {
            title: "基础串讲",
            des: "实现对每个知识点了如指掌，真正透彻理解每个知识点，打牢基础。",
            icon: "icon-bar-chart-2"
        },
        {
            title: "时间灵活",
            des: "通过对要点快速复习，建立系统的知识框架，攻破重难点的记忆与考试技巧。",
            icon: "icon-award"
        },
        {
            title: "独家教材",
            des: "直击CFA核心。",
            icon: "icon-command"
        },
        {
            title: "导师总结Tips",
            des: "传授稳过技巧。",
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
            src: assets_route + "images/demo/logo/logo-1.png"
        },
        {
            src: assets_route + "images/demo/logo/logo-2.png"
        },
        {
            src: assets_route + "images/demo/logo/logo-3.png"
        },
        {
            src: assets_route + "images/demo/logo/logo-4.png"
        },
        {
            src: assets_route + "images/demo/logo/logo-5.png"
        },
        {
            src: assets_route + "images/demo/logo/logo-6.png"
        },

    ]

    const about_course_des = "建立金融知识体系，真题实训，保过考试";


    const course_list_tab = ["基础串讲","强化复习","刷题冲刺"];
    const course_list = [
            [
                {
                    title: "Equity",
                    detail: "02.08 (2课时)"
                },{
                    title: "Equity",
                    detail: "02.09"
                },{
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "02.15 (2课时)"
                },
                {
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "02.16 (2课时)"
                },
                {
                    title: "Quantitative",
                    detail: "02.22"
                },
                {
                    title: "Quantitative",
                    detail: "02.23"
                },
                {
                    title: `Corporate 
                    Finance`,
                    detail: "02.29 (2课时)"
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
                    title: "Derivatives",
                    detail: "03.15"
                },
                {
                    title: `Alternative 
                    Investments (2课时)`,
                    detail: "03.21 (2课时)"
                },
                {
                    title: "Fixed Income",
                    detail: "03.22"
                },
                {
                    title: "Fixed Income (2课时)",
                    detail: "03.28"
                },
                {
                    title: "Portfolio (2课时)",
                    detail: "03.29"
                },
                {
                    title: "Ethics",
                    detail: "04.04 (2课时)"
                },
            ],[
                {
                    title: "Ethics",
                    detail: "04.11"
                },{
                    title: `Economics
                    / Corporate 
                    Finance`,
                    detail: "04.12 (2课时)"
                },{
                    title: `Quantitative`,
                    detail: "04.18"
                },
                {
                    title: `Financial 
                    Reporting 
                    & Analysis`,
                    detail: "04.19 (2课时)"
                },
                {
                    title: "Equity",
                    detail: "04.25 (2课时)"
                },
                {
                    title: `Alternative
                    Investments
                    / Portfolio`,
                    detail: "04.26 (2课时)"
                },
                {
                    title: `Derivatives`,
                    detail: "05.02 (2课时)"
                },
                {
                    title: `Fixed Income`,
                    detail: "05.03 (2课时)"
                },
            ], [
                {
                    title: `Quantitative
                    / Economics`,
                    detail: "05.09 (2课时)"
                },{
                    title: `Financial 
                    Reporting
                    & Analysis`,
                    detail: "05.10 (2课时)"
                },{
                    title: `Corporate 
                    Finance`,
                    detail: "05.16 (2课时)"
                },
                {
                    title: `Equity`,
                    detail: "05.17 (2课时)"
                },
                {
                    title: `Alternative
                    Investments`,
                    detail: "05.22"
                },
                {
                    title: "Fixed Income",
                    detail: "05.23 (2课时)"
                },
                {
                    title: `Ethics
                    / Portfolio`,
                    detail: "05.24 (2课时)"
                },
                {
                    title: `Derivatives`,
                    detail: "05.30 (2课时)"
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
        "Evan",
        "Bob",
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