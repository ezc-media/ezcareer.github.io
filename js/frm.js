
$(document).ready(function(){

    const page_title = "FRM保过班 | Easy Career";
    const course_name = "FRM保过班";
    const course_name_des = "FRM是金融风险管理最为权威、要求最严格、最受认可的资格认证证书。 在2018年秋招金融风险的终面，可以发现几乎人人都有FRM。";
    const price_origin = "1700";
    const price_discount = "1450";
    const course_open_date = "预计7月";
    const course_link = "https://ezcareer.shop/collections/2020-1/products/2020-2-frm-part-i-1";
    const about_course = "Easy Career新版FRM保过班通过每周1-2节线上线下同步课的安排将基础知识课串讲与重点强化复 习相结合，在我们资深的风险管控导师和网红男神导师带领下，为每一个考生保驾护航。";
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
            des: "直击FRM核心。",
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

    const about_course_des = "建立金融知识体系，真题实训，保过考试";


    const course_list_tab = ["Schedule"];
    const course_list = [
            [
                {
                    title: "Foundations of Risk Management",
                    detail: "4 Days"
                },{
                    title: "Quantitative Analysis",
                    detail: "3 Days"
                },{
                    title: "Financial Markets and Products",
                    detail: "7 Days"
                },
                {
                    title: "Valuation and Risk Models",
                    detail: "5 Days"
                },
                {
                    title: "Review Session",
                    detail: "4 Days"
                },
            ]

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=lGHruKSW7hA", cover:"assets/images/courses/FRM/cover.png"}

    const teacher_name = [
        "周华鑫 Shelby",
        "刘畅",
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
                    src: "assets/images/courses/FRM/1.png"
                },
                {
                    src: "assets/images/courses/FRM/2.png"
                },
                {
                    src: "assets/images/courses/FRM/3.png"
                },
                {
                    src: "assets/images/courses/FRM/4.png"
                },
                {
                    src: "assets/images/courses/FRM/5.png"
                },
                {
                    src: "assets/images/courses/FRM/6.png"
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
    $(`#about`).html(createAbout(about_course_des, about_course, course_points, target_group));
    $(`#courseTable`).html(createCourseTable(course_list_tab, course_list, course_link));
    $(`#teachers`).html(createTeacher(teacher_name));
    $("#text_books").html(create_textbook(text_books));
    $("#text_books_picture").html($text_books_picture);
    $("#all_carousel").html(createCarousel(carousels));
    $('#footer').html(createFooter());
});