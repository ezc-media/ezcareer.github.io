
$(document).ready(function(){

    const page_title = "Python全程班 | Easy Career";
    const course_name = "Python全程班";
    const course_name_des = "Python是当今应用最广泛的编程语言之一，以其效率和代码可读性著称。作为一个科学数据的编程语言，Python介于R和java之间，前者主要集中在数据分析和可视化，而后者主要应用于大型应用。";
    const price_origin = "549";
    const price_discount = "449";
    const course_open_date = "五月";
    const course_link = "https://ezcareer.shop/products/2020-3-python";
    const course_points = [
        {
            title: "",
            des: "真实面试题",
            icon: "icon-bar-chart-2"
        },
        {
            title: "",
            des: "行业真实数据",
            icon: "icon-award"
        },
        {
            title: "",
            des: "职场情景模拟",
            icon: "icon-command"
        },
        {
            title: "",
            des: "实战商业案例",
            icon: "icon-check-circle2"
        },


    ];
    const target_group = [
        {
            title: "开发人员",
            des: `Python 的使用者是那些向深入钻研数据分析活着应用统计技术的程序员, 以及向数据科学寻求帮护的开发者`
        },
        {
            title: "商业数据分析",
            des: "Business Analyst (BA)商业数据分析: 为理工科和商科交叉专业, 是集统计学,计算机,商业管理为一体的新兴综合学科"
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
    const about_course = "Easy Career则提供目前市面上最全面针对商业数据分析方面的Python培训";

    const course_list_tab = ["Schedule", "Project"];
    const course_list = [
            [
                {
                    title: `
                    • Python常见数据类型 <br/>
                    • Python变量的创建和操作 <br/>
                    • Python常见函数使用 <br/>
                    • 实战练习 <br/>
                    `,
                    detail: "05.12"
                },{
                    title: `
                    • Python 数据集合(List, Set, Dictionaries) <br/>
                    • 流程控制和循环: for loop, If, While; break/continue <br/>
                    • Python常见容器使用(zip, range, enumerate) <br/>
                    • Python Function的创建和使用 <br/>
                    • Lambda <br/>
                    • 实战练习 <br/>
                    `,
                    detail: "05.14"
                },{
                    title: `
                    • Numpy基础以及工作中的使用场景 <br/>
                    • 外部文件的读取和操作 <br/>
                    • Python处理Excel文件 提高工作效率 <br/>
                    `,
                    detail: "05.16"
                }
            ],
            [
                {
                    title: `
                    Project One  – Python in Business Analytics
                    使用Pandas分析银行客户行为，评估市场营销策略的好坏 
                    体验银行中使用Python的真实场景
                    `,
                    detail: "05.18"
                },{
                    title: `
                    Project Two  – Python in Machine Learning （真实Case Interview)
                    掌握机器学习的基本概念
                    使用Python创建简单机器模型评估信用风险
                    
                    `,
                    detail: "05.20"
                }
            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=YjhwF97_80U", cover:"assets/images/courses/PYTHON/cover.png"}

    const teacher_name = [
        "Leo老师"
    ]

    const text_books = [
 
        
    ]

    const text_books_picture = ""

    const carousels = [
        {
            sml_title: "",
            big_title: "学员反馈",
            content: [
                {
                    src: "assets/images/courses/PYTHON/review-1.jpg"
                },
                {
                    src: "assets/images/courses/PYTHON/review-2.jpg"
                },
                {
                    src: "assets/images/courses/PYTHON/review-3.jpg"
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