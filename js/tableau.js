
$(document).ready(function(){

    const page_title = "Tableau全程班 | Easy Career";
    const course_name = "Tableau全程班";
    const course_name_des = "在大数据时代，数据分析能力尤为重要。Tableau其界面美观、易于操 作，已成为数据分析必备技能之一。不仅仅是集合了商业智能BI和数据可 视化于一身，更是被广泛应用于各个行业。";
    const price_origin = "299";
    const price_discount = "199";
    const course_open_date = "5月中";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-3-tableau-bootcamp";
    const course_points = [
        {
            title: "",
            des: "Tableau Intro and Data Connection",
            icon: "icon-bar-chart-2"
        },
        {
            title: "",
            des: "Data Visual Analytics in Tableau",
            icon: "icon-award"
        },
        {
            title: "",
            des: "CreateDashboards and Storytelling",
            icon: "icon-command"
        },
        {
            title: "",
            des: "Real Tableau Project - Industrial Level",
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
            des: "日后想从事商业分析 (BA)/数据分析/Finance的必备技能，不需要一定专业背景/知识基础"
        },
    ];

    const hot_comps_data = [
        {
            src: "assets/images/courses/TABLEAU/comp-1.png"
        },
        {
            src: "assets/images/courses/TABLEAU/comp-2.png"
        },
        {
            src: "assets/images/courses/TABLEAU/comp-3.png"
        },
        {
            src: "assets/images/courses/TABLEAU/comp-4.png"
        },
        {
            src: "assets/images/courses/TABLEAU/comp-5.png"
        },
        {
            src: "assets/images/courses/TABLEAU/comp-6.png"
        },

    ]

    const about_course_des = "目前最受欢迎的大数据商业智能分析软件，毕业生找工作的必备技能之一";
    const about_course = "Easy Career针对Tableau数据可视化开展为期两天的基础与实战BOOTCAMP集中营，在覆盖全部知识点的同时也实实在在的带领着学生完成一个Tableau Project。是针对大二到大四缺少实习与项目经验的大学生不可或缺的一门课程。";

    const course_list_tab = ["TBD"];
    const course_list = [
            [

                
            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=4ltP61tM7G4", cover:"assets/images/courses/TABLEAU/cover.PNG"}

    const teacher_name = [
        "Leo老师",
    ]

    const text_books = [

        
    ]

    const text_books_picture = "assets/images/page/MockUp.png"

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