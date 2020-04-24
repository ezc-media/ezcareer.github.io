
$(document).ready(function(){

    const page_title = "SAS双证班 | Easy Career";
    const course_name = "SAS双证班";
    const course_name_des = "全称STATISTICAL ANALYSIS SYSTEM，是一门主要运用的领域就在于统计 以及分析的计算机语言，在全球100多个国家地区普及程度极高，在行 政、科研、商业等领域也起着至关重要的作用。";
    const price_origin = "899";
    const price_discount = "799";
    const course_open_date = "5月";
    const course_link = "https://ezcareer.shop/products/2020-3-sas";
    const course_points = [
        {
            title: "基础串讲",
            des: "45个Data Coding例子 再现考题",
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
            des: "将历年考试核心重点梳理，整理总结SAS考试核心知识点，极大缩短了学生备考时间， 提升考试通过率",
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
            src: "assets/images/courses/SAS/comp-1.png"
        },
        {
            src: "assets/images/courses/SAS/comp-2.png"
        },
        {
            src: "assets/images/courses/SAS/comp-3.png"
        },
        {
            src: "assets/images/courses/SAS/comp-4.png"
        },
        {
            src: "assets/images/courses/SAS/comp-5.png"
        },
        {
            src: "assets/images/courses/SAS/comp-6.png"
        },

    ]

    const about_course_des = "建立SAS知识体系，真题实训，实战项目";
    const about_course = "Easy Career的SAS课程可以帮助学生在学习或者第一次零基础接触这门软件时避免走弯路，把有限的精力放在必考的考点上，而不是盲目的复习。通过线上线下同步学习，将每一个data coding，题目及重大考点逐个掌握。";

    const course_list_tab = ["Base", "Advanced", "Project"];
    const course_list = [
            [
                {
                    title: `
                    • Importing Excel Data into SAS <br/>
                    • Read Character Variable of Varying Length <br/>
                    • IF-Then-Else Statements <br/>
                    • Calculate Frequency Distribution with PROC FREQ <br/>
                    `,
                    detail: "05.05"
                },{
                    title: `
                    • SAS Date Formats and Informats <br/>
                    • INTCK & INTNX Function with Examples <br/>
                    • Missing Values in SAS <br/>
                    • Proc Format" <br/>
`,
                    detail: "05.06"
                },{
                    title: `
                    • Delete empty rows in SAS <br/>
                    • Joining and Merging in SAS <br/>
                    • Proc Sort: Identifying and storing unique and duplicate values <br/>
                    • Combining and Aggregating Data in SAS <br/>
                    • Proc Transpose Explained <br/>
                    `,
                    detail: "05.12"
                },
                {
                    title: `
                    • Calculating Percentiles with SAS <br/>
                    • SAS Arrays and DO Loops <br/>
                    • Pattern Matching with SAS <br/>
                    `,
                    detail: "05.13"
                },
                {
                    title: `
                    Base Mock Exam
                    `,
                    detail: ""
                },
            ],
            [
                {
                    title: `
                    • Proc SQL Joins (Merging) <br/>
                    • Combining Tables Vertically with PROC SQL <br/>
                    • Insert Rows in the Table <br/>
                    • Alter Table and Update Column <br/>
                    `,
                    detail: "05.19"
                },{
                    title: `
                    • Proc SQL Self Joins <br/>
                    •Join on Multiple Tables <br/>
                    • Find records only exist in one table <br/>
                    • Random Sampling with PROC SQL <br/>
                    `,
                    detail: "05.20"
                },{
                    title: `
                    • Alternative to _N_ in PROC SQL <br/>
                    • Use DISTINCT in CASE WHEN <br/>
                    • Multiple Ampersand Macro Variables <br/>
                    `,
                    detail: "05.26"
                },
                {
                    title: `
                    • Count number of variables assigned in a macro variable <br/>
                    • Dropping Variables Ending with a Specific String <br/>
                    • Identify and Remove Outliers with SAS <br/>
                    `,
                    detail: "05.27"
                },
                {
                    title: `
                    Advanced Mock Exam
                    `,
                    detail: ""
                },
            ],
            [
                {
                    title: `SAS Retail Banking 实战项目 1`,
                    detail: "06.16"
                },{
                    title: `SAS Retail Performance 
                    Monitoring 实战项目 2`,
                    detail: "06.18"
                },
            ],
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=ia5nDh4Exn4", cover:"assets/images/courses/SAS/cover.PNG"}

    const teacher_name = [
        "Leo老师",
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
                    src: "assets/images/courses/SAS/review-1.jpg"
                },
                {
                    src: "assets/images/courses/SAS/review-2.jpeg"
                },
                {
                    src: "assets/images/courses/SAS/review-3.jpeg"
                },
                {
                    src: "assets/images/courses/SAS/review-4.jpeg"
                },
                {
                    src: "assets/images/courses/SAS/review-5.jpeg"
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