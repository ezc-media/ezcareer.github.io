
$(document).ready(function(){


    const page_title = "SOA证书班 | Easy Career";
    const course_name = "SOA证书班";
    const course_name_des = "北美精算师协会 Society of Actuaries 即 SOA ，北美精算师证书是世界 上具权威性，规模大，拥有会员多的北美精算师协会认证的高端财会证书。";
    const price_origin = "1100";
    const price_discount = "799";
    const course_open_date = "待定";
    const course_link = "https://ezcareer.shop/collections/2020/products/2020-1-soa";
    const course_points = [
        {
            title: "一个月取双证",
            des: "P+FM",
            icon: "icon-bar-chart-2"
        },
        {
            title: "时间灵活",
            des: "线下授课+线上视频课, 无领域，时间限制， 无限制学习。",
            icon: "icon-award"
        },
        {
            title: "全球认证",
            des: `北美精算师资格证具备全球范围内最权威的资格，意味着持有SOA证书遍具备全球化的
            就业机会`,
            icon: "icon-command"
        },

    ];

    const about_course_des = "建立金融知识体系，真题实训，保过考试";
    const about_course = `Easy Career的SOA证书班目前包揽了ASA准精算师考试当中的前两门P-Probability概率论和FM-Fi- nancial Mathematics金融数学。`;

    const course_list_tab = ["TBD"];
    const course_list = [

        

    ]
    
    const target_group = [
        {
            title: "没有学历专业要求",
            des: "一般对数学, 精算, 经济, 金融, 统计等感兴趣的在读生, 毕业生都可以报考. "
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



    const video_info = {src:"https://www.youtube.com/watch?v=DZB46VAIfzc"}

    const teacher_name = [
        "Andy Li",
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