
$(document).ready(function(){

    const page_title = "Excel VBA全程班 | Easy Career";
    const course_name = "Excel VBA全程班";
    const course_name_des = "全称为Visual Basic for Application(金融建模)，是应用程序开发语言 visual basic的子集，主要用于执行程序通用的自动化任务。";
    const price_origin = "549";
    const price_discount = "449";
    const course_open_date = "6月";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-3-excel-vba";
    const about_course = "Easy Career Excel VBA全程班，从金融建模到简历面试再到实战项目，循序渐进的讲解Excel VBA的相 关知识，通过basics&model, table, Advanced Automation, Financial四大部分的讲解，引领学员成为 职场王。";
    const course_points = [
        {
            title: "",
            des: "金融建模",
            icon: "icon-bar-chart-2"
        },
        {
            title: "",
            des: "简历面试",
            icon: "icon-award"
        },
        {
            title: "",
            des: "项目实战",
            icon: "icon-command"
        },
        {
            title: "",
            des: "循序渐进的讲解",
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
            title: "专业背景",
            des: "零专业背景需求。Financial background preferred but suitable for All。"
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
                    title: `
                    Introduction: Microsoft Excel Basics <br/>
                    Advanced Function：Simple Return, Exposure Segmentation, Compound Growth Rate, Present Value, Future Value, Net Present Value, Internal Rate of Return <br/>
                    Case Study: Business analysis and data visualization of a company's historical sales <br/>
                    `,
                    detail: "05.02"
                },{
                    title: `
                    Data Analysis I：Vlookup, Hlookup, Index, Match, Offset, Charts, Pivot Table, Conditional Formatting  <br/>
                    Case Study: Portfolio Return and Attribution <br/>
                    `,
                    detail: "05.03"
                },{
                    title: `
                    Data Analysis II：Matrix Calculation, Solver Linear, Solver Non Linear,Data Table <br/>
                    Case Study: Asset Allocation and Optimization <br/>
                    `,
                    detail: "05.09"
                },
                {
                    title: `
                    VBA: If Statement, Loops - For Loop, While Loop, Do Until <br/>
                    Case Study: Build a basic Inventory, Management/Sales Management tool <br/>
                    `,
                    detail: "05.10"
                },
                {
                    title: `
                    VBA: Userform <br/>
                    Case Study: Build a basic trading record system using Unseform and VBA <br/>
                    `,
                    detail: "05.16"
                },
                {
                    title: `
                    Final Project：Financial Modelling <br/>
                    Project: Investment Portfolio Analysis <br/>
                    `,
                    detail: "05.16"
                },
            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=7QEarwh8O0A", cover:"assets/images/courses/EXCELVBA/cover.png"}

    const teacher_name = [
        "Josh老师"
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
                    src: "assets/images/courses/EXCELVBA/review-1.jpeg"
                },
                {
                    src: "assets/images/courses/EXCELVBA/review-2.jpeg"
                },
                {
                    src: "assets/images/courses/EXCELVBA/review-3.jpeg"
                },
                {
                    src: "assets/images/courses/EXCELVBA/review-4.jpeg"
                },
                {
                    src: "assets/images/courses/EXCELVBA/review-5.jpeg"
                },
                {
                    src: "assets/images/courses/EXCELVBA/review-6.jpeg"
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