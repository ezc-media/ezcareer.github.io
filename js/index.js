$(document).ready(function(){

    history_data = [
        {
            date: "2018",
            des: "Easy Career",
            src: "assets/images/office/1.jpg"
        },
        {
            date: "2018",
            des: "议员参会",
            src: "assets/images/events/event_4.jpg"
        },
        {
            date: "2018",
            des: "教学研讨会",
            src: "assets/images/events/event_3.jpg"
        },
        {
            date: "2018",
            des: "集团年会",
            src: "assets/images/events/event_2.jpg"
        },
        {
            date: "2017",
            des: "北京见面会",
            src: "assets/images/events/event_5.jpg"
        },
        {
            date: "2018",
            des: "年会谢幕",
            src: "assets/images/events/event_6.jpg"
        },
        {
            date: "2019",
            des: "Easy Group创始人张育维入选福布斯中国30 Under 30精英榜单（教育）",
            src: "assets/images/events/event_8.png"
        },
        {
            date: "2018",
            des: "易维集团获得加拿大总理签名贺信",
            src: "assets/images/events/event_9.png"
        },
        {
            date: "2018",
            des: "荣获胡润加中杰出企业家贡献奖",
            src: "assets/images/events/event_10.png"
        },
        {
            date: "2018",
            des: "出席宾夕法尼亚大学中美教育峰会",
            src: "assets/images/events/event_11.png"
        },
        {
            date: "2016",
            des: "Easy Group创始人张育维受邀成为灯塔创业论坛荣誉副主席",
            src: "assets/images/events/event_12.png"
        },
        {
            date: "2019",
            des: "易维教育获腾讯年度影响力国际教育品牌",
            src: "assets/images/events/event_13.png"
        },
        {
            date: "2019",
            des: "Easy Group 创始人张育维入选《2019年胡润Under30s创业领袖》榜单",
            src: "assets/images/events/event_15.png"
        },
        {
            date: "2019",
            des: "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲入选《2019年胡润Under30s创业领袖》榜单",
            src: "assets/images/events/event_14.png"
        },
        {
            date: "2019",
            des: "Easy Group 创始人张育维荣获《2019年胡润30 X 30创业领袖》提名",
            src: "assets/images/events/event_16.png"
        },
        {
            date: "2019",
            des: "Easy Group 战略总监、合肥孜循教育创始人、上海易路教育战略总监李浩哲荣获《2019年胡润30 X 30创业领袖》提名",
            src: "assets/images/events/event_16.png"
        },
 
        
    ];

    hot_courses = [
        {
            name: "CFA一级百时班Plus",
            src: "cfa.html"
        },
        {
            name: "CFA二级百时班",
            src: "cfa2.html"
        },
        {
            name: "FRM保过班",
            src: "frm.html"
            
        },
        {
            name: "CSC证书班",
            src: "csc.html"
        },
        {
            name: "SAS双证班",
            src: "sas.html"
        },
        {
            name: "SOA证书班",
            src: "soa.html"
        },
        {
            name: "CPA实战课",
            src: "cpa.html"
        },
        {
            name: "Tableau全程班",
            src: "tableau.html"
        },
        {
            name: "Python全程班",
            src: "python.html"
        },
        {
            name: "SQL全程班",
            src: "sql.html"
        },
        {
            name: "Excel VBA全程班",
            src: "excelvba.html"
        },
        {
            name: "Networking",
            src: "networking.html"
        },
        {
            name: "BA实战课",
            src: "ba.html"
        },
    ]

    function createHotCourses(hot_courses) {
        let temp_html = ""

        temp_html += `
        <div class="container">
        <div class="row justify-content-between text-center">
          <div class="col-12 col-lg-12">
            <div class="row gutter-0">
        `
        for (block of hot_courses) {
            temp_html += 
            `
            <div class="col-sm-6 col-lg-4">
                <div class="rising p-3 bg-white">
                    <a href=`+block.src+`><h4 class="text-gray">`+block.name+`</h4></a>
                </div>
            </div>
            `
        }

        temp_html += 
        `
            </div>
            </div>
        </div>
        </div>
        `

        return temp_html
    }

    function createHistory(history_data) {
        let temp_html = ""

        temp_html += 
        `
        <div class="row" data-aos="fade-left" data-aos-delay="300">
        <div class="col">
        <div class="owl-carousel visible" data-items="[3,2,1]" data-margin="20" data-dots="true" data-loop="true" data-center="true">
        `

        for (block of history_data) {

            temp_html += `
            <article class="tile tile-long">
                <div class="tile-image" style="background-image: url(`+block.src+`)"></div>
                <a class="tile-content">
                
                <div class="tile-footer">
                    <span class="eyebrow">`+block.date+`</span>
                    <h5>`+block.des+`</h5>
                </div>
                </a>
            </article>
            `

        }

        temp_html += `
        </div>
        </div>
        </div>
        `
        return temp_html
    }


    

    $history = $(createHistory(history_data));
    $hot_courses = $(createHotCourses(hot_courses));

    $("#navbar").html(createNavbar("dark"));
    $("#history").html($history);
    $('#hot_courses').html($hot_courses);
    $('#footer').html(createFooter());
});