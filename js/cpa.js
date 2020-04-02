
$(document).ready(function(){

    const page_title = "CPA实战课 | Easy Career";
    const course_name = "CPA实战课";
    const course_name_des = "注册会计师在经济的不同领域(包括工业，公共会计，政府，教育和非营 利部门)有着至关重要的作用。";
    const price_origin = "N/A";
    const price_discount = "N/A";
    const course_open_date = "N/A";
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
    const about_course = "Easy Career的SAS课程可以帮助学生在学习或者第一次零基础接触这门软件时避免走弯路，把有限 的精力放在必考的考点上，而不是盲目的复习。通过线上线下同步学习，将每一个data coding，题目及重大考点逐个掌握。";

    const course_list_tab = ["TBD"];
    const course_list = [

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=DZB46VAIfzc"}

    const teacher_name = [
        "Andy Li",
    ]

    const text_books = [
        {
            title: "CFA百词斩 I",
            des: "全部知识点概念注释与解读"
        },
        {
            title: "CFA百词斩 II",
            des: "考试必考公式汇总与习题解答"
        },
        {
            title: "知识框架图",
            des: "快速搭建CFA知识体系"
        },
        {
            title: "科目独家讲义",
            des: "随堂讲义，反复巩固"
        },
        {
            title: "考场专用计算器",
            des: "BA II Plus计算器免费送"
        },
        {
            title: "备考读物Notes",
            des: "报名就送权威Notes"
        },
        
    ]

    const text_books_picture = "assets/images/page/MockUp.png"

    const carousels = [


    ]


    $page_title = $(`<title>` + page_title + `</title>`);
    $course_name = $(`<h1 class="display-3"><b>` + course_name +`</b></h1>`);
    $course_name_des = $(`<h2 class="h6">` + course_name_des + `</h2><br>`);
    $course_price = $(`<h2 class="h2 fs-50"><b style="color: #666">$`+price_discount+`</b> <strike class="pl-1 fs-20">原价 $` + price_origin +`</strike></h2>`);
    $course_open_date = $(`<h2 class="h6">本期开课时间：<b>`+course_open_date+`</b></h2>`);


    $video_info = $(`
    <video
    poster="`+video_info.cover+`"
    id="video"
    class="youtube video-js vjs-default-skin video-16-9"
    controls
    width="640" height="264"
    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "`+video_info.src+`"}], "youtube": { "ytControls": 2 } }'
    >
    `)

    $about_course_des = $(`<h6 class="mb-2 text-ezc">`+ about_course_des +`</h6>`);
    $about_course = $(`<p class="lead">` + about_course +`</p>`);
    $about_course_points = $(`<div class="row gutter-3"></div>`);

    $target_group = $(`<div></div>`);

    $course_list_tab = $(`<div class="col text-center"></div>`);

    $course_list_tab_content = $(`<div class="nav nav-switch nav-lavalamp"></div>`)

    $course_list = $(`<div class="tab-content" id="component-1"></div>`)

    $teacher_list = $(`<div></div>`)
    let tempHTML = "";

    $text_books = $(`<div class="row gutter-0"></div>`);
    let text_books_html = "";
    $text_books_picture = $(`
    <img class="top-0 ml-15" src=`+text_books_picture+`  alt="Decoration">
    `)

    $all_carousel = $(createCarousel(carousels));



    
    // Carousel
    function createCarousel(carousels) {
        let carousel_html = ""
        const end_html = `
            </div>
            </div>
        </div>
        </section>
        `
        for (block of carousels) {
            carousel_html += `
            <section class="pt-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12 text-gray text-center">
                  <span class="eyebrow mb-1 text-primary">`+block.sml_title+`</span>
                  <h2><b>`+block.big_title+`</b></h2>
                 
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10">
                <div class="owl-carousel visible gallery" data-items="[4]" data-autoplay="true" data-loop="true" data-dots="true" data-margin="20">
            `


            for (media of block.content) {
                carousel_html+=
                    `
                    <figure class="photo">
                    <img src=`+media.src+` alt="Image">
                    </figure>
                    `
            }
            carousel_html += `</div>`
            carousel_html += end_html
        }

        return carousel_html;

    }


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




    // Textbooks
    for (i = 0; i < text_books.length; i++) {
        if (i === 0) {
            text_books_html += `
            <div class="col-sm-6 col-lg-4" data-aos="fade-up">
                <div class="bordered rising p-3 bg-white">
                <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                <p>`+text_books[i].des+`</p>
                </div>
            </div>
            `
        } else if (i === 1) {
            text_books_html += `
            <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
                <div class="bordered rising p-3 bg-white">
                <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                <p>`+text_books[i].des+`</p>
                </div>
            </div>
            `
        } else {
            text_books_html += `
            <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="bordered rising p-3 bg-white">
                <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                <p>`+text_books[i].des+`</p>
                </div>
            </div>
            `
        }
    }
    $text_books.append(text_books_html);


    // Teacher List
    for (i = 0; i < teacher_name.length; i++) {
        if (i % 2 === 0) {
            tempHTML +=  `<div class="row justify-content-center">`;
            tempHTML += `
            <div class="col-md-10 col-lg-5">
            <div class="row mb-2">
              <div class="col">
                <div class="boxed">
                  <div class="row align-items-center justify-content-right p-3">
                    <div class="col-md-4 pb-2 pb-md-0 text-center">
                      <img src=`+teachers[teacher_name[i]].src+` alt="Avatar" class="avatar avatar-lg rounded">
                    </div>
                    <div class="col-md-8 text-center text-md-left">
                      <h4 class="mb-0">`+teachers[teacher_name[i]].name+`</h4>
                      <p class="fs-14 text-primary">`+teachers[teacher_name[i]].title+`</p>
                      <p class="mt-2">`+teachers[teacher_name[i]].des+`</p>
                    </div>
             
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
            `
            
        } else {
            tempHTML += `
            <div class="col-md-10 col-lg-5">
            <div class="row mb-2">
              <div class="col">
                <div class="boxed">
                  <div class="row align-items-center justify-content-right p-3">
                    <div class="col-md-4 pb-2 pb-md-0 text-center">
                      <img src=`+teachers[teacher_name[i]].src+` alt="Avatar" class="avatar avatar-lg rounded">
                    </div>
                    <div class="col-md-8 text-center text-md-left">
                      <h4 class="mb-0">`+teachers[teacher_name[i]].name+`</h4>
                      <p class="fs-14 text-primary">`+teachers[teacher_name[i]].title+`</p>
                      <p class="mt-2">`+teachers[teacher_name[i]].des+`</p>
                    </div>
             
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            `
            
        }
    }
    $teacher_list.append(tempHTML);

    //  Course points
    for (block of course_points) {
        $about_course_points.append(
        `<div class="col-md-6" data-aos="fade-up">
            <div class="media">
              <i class="`+block.icon+` fs-30 text-primary mr-2"></i>
              <div class="media-body">
                <h5 class="mt-0 text-uppercase font-weight-bold fs-14 letter-spacing">`+block.title+`</h5>
                <p>`+block.des+`</p>
              </div>
            </div>
          </div>`
        )
    }


    // Target groups
    for (block of target_group) {
        $target_group.append(
            `<div class="bordered rising p-3 mt-1">
                <h4 class="mb-2">`+block.title+`</h4>
                <p>`+block.des+`</p>
            </div>`
        )
    }


    // Course List Tab
    for (i = 1; i < course_list_tab.length + 1; i++) {
        if (i === 1) {
            $course_list_tab_content.append(`
            <a class="nav-item nav-link active show" data-toggle="tab" href="#component-`+ course_list_tab.length+`-`+ i +`">`+course_list_tab[i-1]+`</a>
            `)
        } else {
            $course_list_tab_content.append(`
            <a class="nav-item nav-link" data-toggle="tab" href="#component-`+ course_list_tab.length+`-`+ i +`">`+course_list_tab[i-1]+`</a>
            `)
        }
    }
    $course_list_tab.append($course_list_tab_content);


    // Course List
    for (i = 0; i < course_list.length; i++) {
        if (i === 0) {
            $course_list_wrap1 = $(`<div class="tab-pane show active" id="component-`+course_list.length+`-` + eval(i+1) + `" role="tabpanel" aria-labelledby="component-`+course_list.length+`-` + eval(i+1) + `"></div>`);
        } else {
            $course_list_wrap1 = $(`<div class="tab-pane" id="component-`+course_list.length+`-` + eval(i+1) + `" role="tabpanel" aria-labelledby="component-`+course_list.length+`-` + eval(i+1) + `"></div>`);
        }
    
        $course_list_wrap2 = $(`<div class="row justify-content-center"></div>`);
        $course_list_wrap3 = $(`<div class="col-6"></div>`);

        for (block of course_list[i]) {
            $theCourse = $(`
            <a class="outline row align-items-center">
            <span class="col-md-6 fs-10 font-weight-light text-white">
              `+block.title+`
            </span>
            <span class="col-md-3">
              `+block.detail+`
            </span>
            </a>
            `)
            $course_list_wrap3.append($theCourse);
        }
        $course_list_wrap2.append($course_list_wrap3);
        $course_list_wrap1.append($course_list_wrap2);

        $course_list.append($course_list_wrap1);
    }


    


    $("#page_title").html($page_title);
    $("#course_name").html($course_name);
    $("#course_name_des").html($course_name_des);
    $("#course_price").html($course_price);
    $("#course_open_date").html($course_open_date);
    $("#about_course").html($about_course);
    $("#about_course_des").html($about_course_des);
    $("#about_course_points").html($about_course_points);
    $("#target_group").html($target_group);
    $("#course_list").html($course_list);
    $("#teacher_list").html($teacher_list);
    $("#course_list_tab").html($course_list_tab);
    $("#text_books").html($text_books);
    $("#video_info").html($video_info);
    $("#text_books_picture").html($text_books_picture);
    $("#all_carousel").html($all_carousel);
    // $("#hot_comps").html($hot_comps);
    

    

});