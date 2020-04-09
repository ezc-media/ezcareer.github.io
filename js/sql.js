
$(document).ready(function(){

    const page_title = "SQL全程班 | Easy Career";
    const course_name = "SQL全程班";
    const course_name_des = "全程Structured Query Language，是专门为数据库而建立的操作命令 集，是一种功能齐全的数据库语言。作为一名数据分析师，提取数据是相 当重要，需要通过SQL语言来实现。";
    const price_origin = "549";
    const price_discount = "449";
    const course_open_date = "5月";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-3-sql";
    const about_course = "Easy Career的SQL课程将由行业内最专业的大牛全权负责，把基础知识和数据库知识进行串讲，并附加上全真模拟的面试辅导以及零售行业和市场Campaign项目的学习制作，优秀毕业的同学也可以在结课时获得导师提供的推荐信。";
    const course_points = [
        {
            title: "结合实践",
            des: "使用SQL应对工作中最常见的使用场景",
            icon: "icon-bar-chart-2"
        },
        {
            title: "AWS实战操作",
            des: "完全模拟公司真实使用环境",
            icon: "icon-award"
        },
        {
            title: "面试真题",
            des: "帮助学生从容面对Interview",
            icon: "icon-command"
        },
        {
            title: "Business Cases SQL Projects.",
            des: "学会使用SQL解决真正Business问题",
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
            src: "assets/images/courses/SQL/comp-1.png"
        },
        {
            src: "assets/images/courses/SQL/comp-2.png"
        },
        {
            src: "assets/images/courses/SQL/comp-3.png"
        },
        {
            src: "assets/images/courses/SQL/comp-4.png"
        },

    ]

    const about_course_des = "建立金融知识体系，真题实训，保过考试";


    const course_list_tab = ["真实面试题目", "Project"];
    const course_list = [
            [
                {
                    title: `
                    • SQL目前在各行业的实际应用 <br/>
                    • 登陆AWS SQL server <br/>
                    • SQL基本语法 <br/>
                    • SQL SELECT Statement <br/>
                    • 数据的筛选排序 <br/>
                    • 实战练习 
                    `,
                    detail: "05.01"
                },{
                    title: `
                    • 常见Functions在工作中的使用 - Substr(), Datediff(), Case When <br/>
                    • Subqueries <br/>
                    • 数据汇总 - Group by, Sum()/Min()/Max(), Count() <br/>
                    • 实战练习
                    `,
                    detail: "05.04"
                },{
                    title: `
                    • Real SQL Technical Interview 1 <br/>
                    • 真实面试题模拟 1 hour <br/>
                    • 题目讲解及面试注意事项 <br/>
                    • Join tables - Inner Join & Outer Join <br/>
                    • 实战练习
                    `,
                    detail: "05.06"
                }
            ], 
            [
                {
                    title: `
                    Project One  – Create monitoring reports for a retailer <br/>
                    使用SQL处理数据创建监测报表 <br/>
                    体验零售公司(Loblaw, Shoppers)等使用SQL的真实场景 <br/>
                    `,
                    detail: "05.08"
                },{
                    title: `
                    真实面试题模拟 题目讲解及面试注意事项 <br/>
                    Project Two  – Post campaign analysis for a bank <br/>
                    使用SQL 处理银行客户数据 <br/>
                    学习典型市场营销分析流程 <br/>
                    
                    `,
                    detail: "05.11"
                }
            ]

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=d8-tU_HXLg0", cover:"assets/images/courses/SQL/cover.PNG"}

    const teacher_name = [
        "Leo老师"
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
                    src: "assets/images/courses/SQL/review-1.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-2.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-3.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-4.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-5.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-6.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-7.jpg"
                },
                {
                    src: "assets/images/courses/SQL/review-8.png"
                },
                {
                    src: "assets/images/courses/SQL/review-9.png"
                },
                {
                    src: "assets/images/courses/SQL/review-10.jpeg"
                },
                {
                    src: "assets/images/courses/SQL/review-11.jpeg"
                },
                {
                    src: "assets/images/courses/SQL/review-12.jpeg"
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