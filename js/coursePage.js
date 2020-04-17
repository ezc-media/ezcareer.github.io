
    // Generate Cover
    function createCover(course_name, course_name_des, price_discount, price_origin, course_open_date, video_info, course_link) {
        return `
        

      <div class="container pt-10">
        <div class="row justify-content-start">

        <div class="col-md-6 text-left">
            <h1 class="display-3"><b>` + course_name +`</b></h1>
            <div class="col-md-10 text-left">
                <h2 class="h6">` + course_name_des + `</h2><br>
            	<h2 class="h2 fs-50"><b style="color: #666">$`+price_discount+`</b> <strike class="pl-1 fs-20">原价 $` + price_origin +`</strike></h2>
            	<h2 class="h6">本期开课时间：<b>`+course_open_date+`</b></h2>
            	
              <a class="btn btn btn-gray text-white mr-1 mt-1" href="#popup2 ">获取课程资料包</a>
              <div class="popup2" id="popup2">   
              <div class="card" style="text-align: center;">
                    <div class="card-body">
                    <iframe allowTransparency="true" style="min-height:30rem; min-width:30rem; height:inherit; overflow:auto;" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="http://sv.mikecrm.com/E57HLvt">
                    <p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p>
                    </iframe><a class="popup__close2" href="#">X</a>
                    </div>
                  </div>   
              	     
              </div>

              <a class="btn btn-with-ico btn-primary mt-1" href="#popup3 ">立刻报名<i class="icon-arrow-right2 fs-20"></i></a>
                <div class="popup2" id="popup3">
              
              
              <div class="col-md-2 col-lg-4">
                  <div class="card" style="text-align: center;">
                    <div class="card-body"><img class="card-img-top col-sm-5" src="assets/images/wechat-3.jpg" ">
                      <h5 class="card-title">扫码联系客服，了解课程详情</h5>
                      <p class="card-text">多伦多地区及滑铁卢地区，请扫描二维码，或添加微信 id:ezcteacher</p>
                      <a href=`+course_link+` target="_blank" class="btn btn-primary">我已经考虑好，想直接付款</a>
                    </div>
                  </div> <a class="popup__close2" href="#">X</a>
              </div>
              </div>     

        	</div>
          </div>
        

          <div class="col-md-6">
          <div>
            <video
            poster="`+video_info.cover+`"
            id="video"
            class="youtube video-js vjs-default-skin video-16-9"
            controls
            width="640" height="264"
            data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "`+video_info.src+`"}], "youtube": { "ytControls": 2 } }'
            >
            </div>
          </div>
        </div>
        
      </div>

        `


    }
    
    // Generate About
    function createAbout(about_course_des, about_course, course_points, target_group, hot_comps_data) {

        //  Course points
        course_points_html = ``
        for (block of course_points) {
            course_points_html += 
            `<div class="col-md-6" data-aos="fade-up">
                <div class="media">
                <i class="`+block.icon+` fs-30 text-primary mr-2"></i>
                <div class="media-body">
                    <h5 class="mt-0 text-uppercase font-weight-bold fs-14 letter-spacing">`+block.title+`</h5>
                    <p>`+block.des+`</p>
                </div>
                </div>
            </div>`
            
        }


        target_group_html = ``
        // Target groups
        for (block of target_group) {
            target_group_html += 
                `<div class="bordered rising p-3 mt-1">
                    <h4 class="mb-2">`+block.title+`</h4>
                    <p>`+block.des+`</p>
                </div>`
        }

        // hot company
        hot_comp_html = ``
        for (block of hot_comps_data) {
          hot_comp_html += `
          <div class="logo">
            <img src=`+block.src+` alt="Logo">
          </div>
          `
        }


        return `
        <!-- about -->

          <div class="container">
            <div class="row justify-content-start">
              <div class="col-lg-4 text-left">
                
                <h4 class="mb-1"><b>关于课程</b></h4>
                <h6 class="mb-2 text-ezc">`+ about_course_des +`</h6>
              </div>
              <div class="col-lg-8">
                <p class="lead">` + about_course +`</p>
                <br>
    
                <div class="row gutter-3">
                `+course_points_html+`
                
                </div>
              
            </div>
          </div>
          <div class="row justify-content-start">
              <div class="col-sm-6 col-lg-4">
                <h4 class="mb-1"><b>适合人群</b></h4>
                  <h6 class="mb-2 text-ezc">不盲从、不掉队</h6>
              </div>
    
    
              <div class="col-sm-6 col-lg-8">
                `+target_group_html+`
              </div>
    
    
               
              <div class="row justify-content-start">
              <div class="col-sm-6 col-lg-4">
                <h4 class="mb-1"><b>热门目标公司</b></h4>
                <h6 class="mb-2 text-ezc"></h6>
              </div>
              <div class="row mt-8">
              <div class="col-md-10 partners align-items-center">
                <div class="owl-carousel visible gallery" data-items="[4]" data-autoplay="true" data-loop="true" data-dots="true" data-margin="20" style="overflow:hidden"">
                `+hot_comp_html+`
                </div>
              </div>
            </div>
               </div>
           </div>

    
    
        <!-- / about -->
        `
    }

    // Generate Course Table
    function createCourseTable(course_list_tab, course_list, course_link) {

        // Course List Tab
        course_list_tab_html = ``

        for (i = 1; i < course_list_tab.length + 1; i++) {
            if (i === 1) {
                course_list_tab_html += `
                <a class="nav-item nav-link active show" data-toggle="tab" href="#component-`+ course_list_tab.length+`-`+ i +`">`+course_list_tab[i-1]+`</a>
                `
            } else {
                course_list_tab_html += `
                <a class="nav-item nav-link" data-toggle="tab" href="#component-`+ course_list_tab.length+`-`+ i +`">`+course_list_tab[i-1]+`</a>
                `
            }
        }

        // Course List
        course_list_html = ``
        for (i = 0; i < course_list.length; i++) {
            if (i === 0) {
                course_list_html += `<div class="tab-pane show active" id="component-`+course_list.length+`-` + eval(i+1) + `" role="tabpanel" aria-labelledby="component-`+course_list.length+`-` + eval(i+1) + `">`;
            } else {
                course_list_html += `<div class="tab-pane" id="component-`+course_list.length+`-` + eval(i+1) + `" role="tabpanel" aria-labelledby="component-`+course_list.length+`-` + eval(i+1) + `">`;
            }
        
            course_list_html += `<div class="row justify-content-center">`;
            course_list_html += `<div class="col-6">`;

            for (block of course_list[i]) {
                course_list_html += `
                <a class="outline row align-items-center">
                <span class="col-md-6 fs-10 font-weight-light text-white">
                `+block.title+`
                </span>
                <span class="col-md-3">
                `+block.detail+`
                </span>
                </a>
                `

                
            }
            course_list_html += `</div>`
            course_list_html += `</div>`
            course_list_html += `</div>`
        }

        return `
        <div class="container text-white">

        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <span class="eyebrow mb-1 text-primary">最全面的课程设计</span>
            <h2>课程大纲</h2>
          </div>
        </div>

        <div class="row text-primary">
            <div class="col text-center">
            <div class="nav nav-switch nav-lavalamp">
            `+course_list_tab_html+`
            </div>
            </div>
        </div>

        <div class="tab-content" id="component-1">
        `+course_list_html+`
        </div>

        <div class="row text-primary mt-5">
          <div class="col text-center">
            <a href=`+course_link+` type="button" class="btn btn-white text-black">立刻报名</a>
        </div>
        </div>
        
      </div>
        `;
    }

    // Generate Carousel
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
                <div class="owl-carousel visible gallery" data-items="[4]" data-autoplay="true" data-loop="true" data-dots="true" data-margin="20" style="overflow:hidden">
            `


            for (media of block.content) {
                carousel_html+=
                    `
                    <figure class="photo equal equal-double">
                      <a href=`+media.src+`
                      style="background-image: url(`+media.src+`)"></a>
                    </figure>
                    `
            }
            carousel_html += `</div>`
            carousel_html += end_html
        }

        return carousel_html;

    }

    // Generate teachers
    function createTeacher(teacher_name) {
    // Teacher List
    teacher_list_html = ``
    for (i = 0; i < teacher_name.length; i++) {
        if (i % 2 === 0) {
            teacher_list_html +=  `<div class="row justify-content-center">`;
            teacher_list_html += `
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
            teacher_list_html += `
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
    

        return `
        <div class="container mb-0">
            <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12 text-gray text-center">
                <h2><b>资深导师团队</b></h2>
            
            </div>
            </div>
        
            <br>

            `+teacher_list_html+`


        </div>
      `
    }

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