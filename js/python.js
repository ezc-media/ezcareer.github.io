
$(document).ready(function(){

    const page_title = "Python全程班 | Easy Career";
    const course_name = "Python全程班";
    const course_name_des = "Python是当今应用最广泛的编程语言之一，以其效率和代码可读性著称。作为一个科学数据的编程语言，Python介于R和java之间，前者主要集中在数据分析和可视化，而后者主要应用于大型应用。";
    const price_origin = "N/A";
    const price_discount = "N/A";
    const course_open_date = "N/A";
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

    const course_list_tab = ["Schedule"];
    const course_list = [
            [
                {
                    title: `Introduction to Python 
                    for data analytics: <br />
                    · Python basic <br />
                    · List and Dictionaries <br />
                    · Functions and Packages`,
                    detail: "01.28 / 03.10"
                },{
                    title: `Advanced data manipulation 
                    using Python: <br />
                    · Pandas basic <br />
                    · Control flow and Filtering`,
                    detail: "01.30 / 03.12"
                },{
                    title: `Import and clean data in Python: <br />
                    · Import data from 
                    different sources <br />
                    · Different skills to clean and 
                    prepare data for modeling <br />`,
                    detail: "02.03 / 03.16"
                },
                {
                    title: `Advanced Pandas
                    · Manipulate a large amount 
                    of data using Pandas: <br />
                    · Merge and combine data <br />
                    · Data visualization in Python`,
                    detail: "02.05 / 03.18"
                },
                {
                    title: `Project - Customer analytics and 
                    Retention Rate Prediction for Telecom Company`,
                    detail: "02.07 / 03.20"
                },
                

            ]
        

    ]

    const video_info = {src:"https://www.youtube.com/watch?v=YjhwF97_80U"}

    const teacher_name = [
        "Leo老师"
    ]

    const text_books = [
 
        
    ]

    const text_books_picture = ""

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
    function create_textbook(text_books) {
        temp_html = ``
        if (text_books.length > 0) {

            temp_html += 
            `
            <section class="bg-white">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                  <span class="eyebrow mt-5 mb-1 text-primary">保留最有效的备考资料</span>
                  <h2 class="mb-5">配套教材</h2>
                </div>
              </div>
            <div class="container">
               <div class="row justify-content-between">
                <div class="col-12 col-lg-8">
                  <div class="row">
                    <div class="col-lg-10">
                      <h2>工欲善其事，<b>必先利其器 </b></h2>
                    </div>
                  </div>
                  <div class="row gutter-0">
            `
    
            for (i = 0; i < text_books.length; i++) {
                if (i === 0) {
                    temp_html += `
                    <div class="col-sm-6 col-lg-4" data-aos="fade-up">
                        <div class="bordered rising p-3 bg-white">
                        <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                        <p>`+text_books[i].des+`</p>
                        </div>
                    </div>
                    `
                } else if (i === 1) {
                    temp_html += `
                    <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
                        <div class="bordered rising p-3 bg-white">
                        <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                        <p>`+text_books[i].des+`</p>
                        </div>
                    </div>
                    `
                } else {
                    temp_html += `
                    <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="bordered rising p-3 bg-white">
                        <h4 class="text-gray"><b>`+text_books[i].title+`</b></h4>
                        <p>`+text_books[i].des+`</p>
                        </div>
                    </div>
                    `
                }
            }
    
            temp_html += `
            </div>
                </div>
                <div id="text_books_picture" class="col-sm-4 col-lg-3  presentation presentation-responsive" data-aos="zoom-in-left">
                </div>
                </div>
            </div>
            </section>
            `
        }

        return temp_html
    }
    $text_books= $(create_textbook(text_books));


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
    $("#navbar").html(createNavbar("light"));

    

});