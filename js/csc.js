
$(document).ready(function(){


    const page_title = "CSC证书班 | Easy Career";
    const course_name = "CSC证书班";
    const course_name_des = "全称Canadian Securities Course，是目前加拿大证券、金融、投资、银 行等行业最受欢迎的证书，同时也是相关行业最基本的入门级证书、敲门砖。";
    const price_origin = "750";
    const price_discount = "650";
    const course_open_date = "5月";
    const course_link = "https://ezcareer.shop/collections/2020-1/products/2020-2-csc";
    const course_points = [
        {
            title: "基础串讲",
            des: "丰富教学经验，积累核心要点。",
            icon: "icon-bar-chart-2"
        },
        {
            title: "时间灵活",
            des: "不受时间场地限制,线上线下同步直播。",
            icon: "icon-award"
        },
        {
            title: "独家教材",
            des: "直击CSC核心。",
            icon: "icon-command"
        },
        {
            title: "导师总结Tips",
            des: "传授稳过技巧。",
            icon: "icon-check-circle2"
        },
    ];

    const about_course_des = "建立金融知识体系，真题实训，保过考试";
    const about_course = `CSC证书课程共42小时，课程针对考试分为Volume 1 & Volume 2两部分， 考前冲刺课程时长为3小时，课次共计14节课，每期课程学段为5周。
    CSC证书班分为基础串讲与考前冲刺两个部分。`;

    const course_list_tab = ["Volume 1", "Volume 2"];
    const course_list = [
            [
                {
                    title: `
                    - The Canadian Securities Industry <br/>
                    - The Capital Market <br/>
                    `,
                    detail: "03.04"
                },{
                    title: `
                    - The Canadian Regulatory Environment <br/>
                    - Overview of Economics <br/>
                    `,
                    detail: "03.07"
                },{
                    title: `
                    - Economic Policy <br/>
                    - Fixed-Income Securities: Features and Types <br/>
                    `,
                    detail: "03.11"
                },
                {
                    title: `
                    - Fixed-Income Securities: Pricing and Trading <br/>
                    - Equity Securities: Common and Preferred Shares <br/>
                    `,
                    detail: "03.18"
                },
                {
                    title: `
                    - Equity Securities: Equity Transaction <br/>
                    - Derivatives <br/>
                    `,
                    detail: "03.25"
                },
                {
                    title: `
                    - Corporations and their Fianancial Statements <br/>
                    - Financing and Listing Securities <br/>
                    `,
                    detail: "04.01"
                },
                {
                    title: "Volume 1 Review Session",
                    detail: "04.08"
                },
            ], 
            [
                {
                    title: `
                    - Fundamental and Technical Analysis <br/>
                    - Company Analysis <br/>
                    `,
                    detail: "05.06"
                },{
                    title: `
                    - Introduction to the Portfolio Approach <br/>
                    - The Portfolio Management Process <br/>
                    `,
                    detail: "05.13"
                },{
                    title: `
                    - Mutual Funds: Structure and Regulation <br/>
                    - Mutual Funds: Types and Features <br/>
                    `,
                    detail: "05.16"
                },
                {
                    title: `
                    - Exchange-Trade Funds <br/>
                    - Ohter Managed Products <br/>
                    - Structure Product <br/>
                    `,
                    detail: "05.20"
                },
                {
                    title: `
                    - Canadian Taxation <br/>
                    - Fee-based Accounts <br/>
                    - Working with the Retail Client <br/>
                    - Working with the Institutional Client <br/>
                    `,
                    detail: "05.23"
                },
                {
                    title: `
                    - Working with the Retail Client  <br/>
                    - Working with the Institutional Client <br/>
                    `,
                    detail: "05.27"
                },
                {
                    title: `
                    Volume 2 Review Session
                    `,
                    detail: "05.30"
                },
            ]
        

    ]
    
    const target_group = [
        {
            title: "在校大学生",
            des: "未来希望进入金融行业等，系统性学习金融知识的的在校大学生"
        },
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
            src: "assets/images/courses/CSC/comp-1.png"
        },
        {
            src: "assets/images/courses/CSC/comp-2.png"
        },
        {
            src: "assets/images/courses/CSC/comp-3.png"
        },
        {
            src: "assets/images/courses/CSC/comp-4.png"
        },

    ]



    const video_info = {src:"https://www.youtube.com/watch?v=HZjCcG2iyaQ", cover:"assets/images/courses/CSC/cover.jpg"}

    const teacher_name = [
        "Andy Li",
    ]

    const text_books = [

        
    ]

    const text_books_picture = "assets/images/page/MockUp.png"

    const carousels = [
        {
            sml_title: "",
            big_title: "学员反馈",
            content: [
                {
                    src: "assets/images/courses/CSC/1.png"
                },
                {
                    src: "assets/images/courses/CSC/2.png"
                },
                {
                    src: "assets/images/courses/CSC/3.png"
                },
                {
                    src: "assets/images/courses/CSC/4.png"
                },
                {
                    src: "assets/images/courses/CSC/5.png"
                },
                {
                    src: "assets/images/courses/CSC/6.png"
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
    //         <img src="assets/images/demo/logo/logo-1.png" alt="Logo">
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