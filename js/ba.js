
$(document).ready(function(){

    const page_title = "BA实战课 | Easy Career";
    const course_name = "BA实战课";
    const course_name_des = "Business Analyst (BA)商业数据分析: 为理工科和商科交叉专业, 是集统计学,计算机,商业管理为一体 的新兴综合学科。";
    const price_origin = "599";
    const price_discount = "499";
    const course_open_date = "待定";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-2-ba";
    const about_course = "Design A/B testing for Digital Marketing and Conduct Post-campaign Analysis with Tableau for a Telecom Company";
    const course_points = [
        {
            title: "Work as a real business analyst",
            des: `To develop marketing strategies include Email, mail and mobile`,
            icon: "icon-bar-chart-2"
        },
        {
            title: "Work with a real dataset",
            des: "Of a Telecom company from the IBM Watson Analytics community by using SQL",
            icon: "icon-award"
        },
        {
            title: "Design and implement A/B test with Python",
            des: "Based on customer behavior and segmentation analysis",
            icon: "icon-command"
        },
        {
            title: "Evaluate promotion effectives post campaign",
            des: "To decide which marketing strategy works the best",
            icon: "icon-check-circle2"
        },
        {
            title: "Use Tableau",
            des: "To create a dashboard to present the key business insights",
            icon: "icon-check-circle2"
        },
        {
            title: "Real BA Case Interview Mock",
            des: "",
            icon: "icon-check-circle2"
        },


    ];
    const target_group = [
        {
            title: "任何群体",
            des: "日后想从事商业分析 (BA)/数据分析/Finance的必备技能"
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
                    SQL for data mining <br />
                    · Data cleaning <br />
                    · Data processing <br />
                    · Data aggregation
`,
                    detail: "TBD"
                },{
                    title: `
                    Python for run statistical hypothesis testing and compute the statistical significance analysis <br />
                    · Customer segmentation <br />
                    · Test and control population design <br />
                    · Compare experiments result <br />
                    · Tableau for dashboard and presentation
                    `,
                    detail: "TBD"
                },
                

            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=DZB46VAIfzc"}

    const teacher_name = [
        "Leo老师"
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
    $(`#about`).html(createAbout(about_course_des, about_course, course_points, target_group));
    $(`#courseTable`).html(createCourseTable(course_list_tab, course_list, course_link));
    $(`#teachers`).html(createTeacher(teacher_name));
    $("#text_books").html(create_textbook(text_books));
    $("#text_books_picture").html($text_books_picture);
    $("#all_carousel").html(createCarousel(carousels));
    $('#footer').html(createFooter());

    

});