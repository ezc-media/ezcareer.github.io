
$(document).ready(function(){


    const page_title = "CSC证书班 | Easy Career";
    const course_name = "CSC证书班";
    const course_name_des = "全称Canadian Securities Course，是目前加拿大证券、金融、投资、银 行等行业最受欢迎的证书，同时也是相关行业最基本的入门级证书、敲门砖。";
    const price_origin = "N/A";
    const price_discount = "N/A";
    const course_open_date = "N/A";
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
                    title: "The Canadian Investment Marketplace/ The Capital Market",
                    detail: "01.15"
                },{
                    title: "The Canadian Regulatory Environment/ Overview of Economics",
                    detail: "01.18"
                },{
                    title: "Economic Policy/ Fixed-Income Securities: Features and Types",
                    detail: "01.18"
                },
                {
                    title: "Fixed-Income Securities: Pricing and Trading/ Equity Securities: Common and Prefered Share",
                    detail: "01.22"
                },
                {
                    title: "Equity Securities: Equity Transaction/ Derivatives",
                    detail: "01.26"
                },
                {
                    title: "Corporations and their Financial Statements/ Financing and Listing Securities",
                    detail: "01.26"
                },
                {
                    title: "Volume 1 Review Session",
                    detail: "01.29"
                },
            ], 
            [
                {
                    title: `Fundamental and 
                    Technical Analysis
                    / Company Analysis`,
                    detail: "02.01"
                },{
                    title: `Introduction to 
                    the Portfolio Approach
                    / The Portfolio 
                    Management Process`,
                    detail: "02.01"
                },{
                    title: `Mutual Funds: 
                    Structure and Regulation
                    / Mutual Funds: 
                    Types and Features`,
                    detail: "02.05"
                },
                {
                    title: `Exchange-Trade Funds
                    / Other Managed Products
                    / Structure Products`,
                    detail: "02.08"
                },
                {
                    title: `Canadian Taxation
                    / Fee-based Accounts
                    / Working with the Retail Client
                    / Working with 
                    the Institutional Client`,
                    detail: "02.15"
                },
                {
                    title: `Volume 2 Review Session`,
                    detail: "02.19"
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
            src: "assets/images/demo/logo/logo-1.png"
        },
        {
            src: "assets/images/demo/logo/logo-2.png"
        },
        {
            src: "assets/images/demo/logo/logo-3.png"
        },
        {
            src: "assets/images/demo/logo/logo-4.png"
        },
        {
            src: "assets/images/demo/logo/logo-5.png"
        },
        {
            src: "assets/images/demo/logo/logo-6.png"
        },

    ]



    const video_info = {src:"https://www.youtube.com/watch?v=HZjCcG2iyaQ"}

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
    $(`#cover`).html(createCover(course_name, course_name_des, price_discount, price_origin, course_open_date, video_info));
    $(`#about`).html(createAbout(about_course_des, about_course, course_points, target_group));
    $(`#courseTable`).html(createCourseTable(course_list_tab, course_list));
    $(`#teachers`).html(createTeacher(teacher_name));
    $("#text_books").html(create_textbook(text_books));
    $("#text_books_picture").html($text_books_picture);
    $("#all_carousel").html(createCarousel(carousels));
    $('#footer').html(createFooter());
});