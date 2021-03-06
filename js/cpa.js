
$(document).ready(function(){

    const page_title = "CPA证书全程班 | Easy Career";
    const course_name = "CPA证书全程班";
    const course_name_des = "注册会计师在经济的不同领域(包括工业，公共会计，政府，教育和非营 利部门)有着至关重要的作用。";
    const price_origin = "N/A";
    const price_discount = "2400";
    const course_open_date = "待定";
    const course_link = "https://ezcareer.shop/collections/2020-1/products/2020-1-cpa";
    const course_points = [
        {
            title: "基础串讲",
            des: "再现考题",
            icon: "icon-bar-chart-2"
        },
        {
            title: "真实考试界面题目练习",
            des: "10大考点各个击破",
            icon: "icon-award"
        },
        {
            title: "冲刺备考",
            des: "详解考题难点，预测押题，全面备考",
            icon: "icon-command"
        },
        {
            title: "千题冲刺",
            des: "将历年考试核心重点梳理，整理总结CPA考试核心知识点，极大缩短了学生备考时间， 提升考试通过率",
            icon: "icon-check-circle2"
        },


    ];
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
            src: assets_route + "images/courses/CPA/comp-1.png"
        },
        {
            src: assets_route + "images/courses/CPA/comp-2.png"
        },
        {
            src: assets_route + "images/courses/CPA/comp-3.png"
        },
        {
            src: assets_route + "images/courses/CPA/comp-4.png"
        },

    ]

    const about_course_des = "建立金融知识体系，真题实训";
    const about_course = "";

    const course_list_tab = ["TBD"];
    const course_list = [

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=DZB46VAIfzc"}

    const teacher_name = [
        "Andy Li",
    ]

    const text_books = [

        
    ]

    const text_books_picture = assets_route + "images/page/MockUp.png"

    const carousels = [


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