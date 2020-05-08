
$(document).ready(function(){

    const page_title = "Networking | Easy Career";
    const course_name = "Networking";
    const course_name_des = "";
    const price_origin = "549";
    const price_discount = "449";
    const course_open_date = "5月末";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-1-networking-1";
    const about_course = "学生将对networking建立起一个合理，积极的expectation, 并熟练掌握如果和快速与不认识的人打交道并转化成自己的人脉，帮助学员完成从0到1的转变和积累。学生还会通过课程学会如何与Industry Professional得体，妥当，自如的交流，建立起自己的自信心，从而开启职业的新篇章。";
    const course_points = [
        {
            title: "",
            des: "最后一个课时是赠送的bonus：鸡尾酒Cocktail Reception, 旨在课程结束后给大家提供一个Networking的实战机会，同时又可以和各路金融行业精英学习交流经验，积累宝贵人脉。",
            icon: "icon-bar-chart-2"
        },



    ];
    const target_group = [
        {
            title: "任何人群",
            des: "日后想从事任何商科/与人打交道的工作的同学，networking为求职必备技能。无需专业知识背景或基础，只需要学员有一个想提高自己networking技巧的mindset"
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

    const about_course_des = "从0到1的转变和积累，开启职业的新篇章";


    const course_list_tab = ["Schedule"];
    const course_list = [
            [
                {
                    title: `
                    Introduction to Networking  <br />
                    `,
                    detail: "05.24"
                },{
                    title: "Get everything ready before reaching out ",
                    detail: "05.31"
                },{
                    title: "Coffee Chat: What and how to talk ",
                    detail: "06.07"
                },
                {
                    title: "How to follow-up: Follow-up is the MOST important after establishing that relationship ",
                    detail: "06.14"
                },
                {
                    title: "How to stand out in a group networking session",
                    detail: "06.21"
                },
                {
                    title: "Bonus Class “Cocktail Reception”",
                    detail: "TBA"
                },
                

            ]
        

    ]

    const video_info = {src:"https://youtu.be/QbteVMi4QnQ", cover:assets_route + "images/courses/NETWORKING/cover.PNG"}

    const teacher_name = [
        "Tia老师"
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