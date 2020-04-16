
$(document).ready(function(){

    const page_title = "Python ML全程班 | Easy Career";
    const course_name = "Python ML全程班";
    const course_name_des = "Python 目前已经成为大数据和人工智能时代下最受欢迎的开源软件。无论是小公司还是大公司都在越来越多使用它。如果你熟悉python，找一份薪水不错的工作并不难。";
    const price_origin = "650";
    const price_discount = "449";
    const course_open_date = "5月中";
    const course_link = "https://ezc-alberta.shop/products/2020-2%E6%9C%9F-python-in-machine-learning-%E5%85%A8%E7%A8%8B%E7%8F%AD";
    const about_course = "通过本课程可以掌握Machine Learning的概念，作用，Numpy、pandas的使用，常见的Machine Learning模型(SVM, RF, LR, DT, NN等)，Neural Network的组成与运用，Neural Network的拓展形式。最后通过实际操作两次的Practice Project来进一步加强理解，获得两份高含金量的Project经验。";
    const course_points = [
        {
            title: "掌握Machine Learning概念",
            des: "学习Numpy、pandas的使用方式",
            icon: "icon-bar-chart-2"
        },
        {
            title: "Machine Learning模型教学",
            des: "SVM, RF, LR, DT, NN等",
            icon: "icon-award"
        },
        {
            title: "神经网络",
            des: "Neural Network的组成与运用",
            icon: "icon-command"
        },
        {
            title: "实例操作",
            des: "两份高含金量的Project经验",
            icon: "icon-check-circle2"
        },

    ];
    const target_group = [
        {
            title: "开发人员首选",
            des: "Python的使用者是那些向深入钻研数据分析或者运用统计技术的程序员，以及向数据科学寻求帮助的开发者。"
        },
        {
            title: "商业数据分析",
            des: "Business Analyst(BA)商业数据分析：为理工科和上课交叉专业，是集统计学，计算机，商业管理为一体的新兴综合学科。"
        }
    ];

    const hot_comps_data = [
        {
            src: "assets/images/courses/PYTHONML/comp-1.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-2.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-3.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-4.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-5.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-6.png"
        },
        {
            src: "assets/images/courses/PYTHONML/comp-7.png"
        },



    ]

    const about_course_des = "建立技术知识体系，真题实训";


    const course_list_tab = ["Schedule (U of Alberta)"];
    const course_list = [
            [
                {
                    title: `
                    Introduction to Machine Learning <br/>
                    · Real world applications of machine learning<br/>
                    · Machine Learning Concepts & Terminologies<br/>
                    · Training & Validation
                    `,
                    detail: `05.12`
                },{
                    title: `
                    Machine Learning tool: Pandas, numpy<br/>
                    · Read and write<br/>
                    · Operations<br/>
                    · Visualization
                    `,
                    detail: `05.14`
                },{
                    title: `
                    Classification <br/>
                    · Classification problem definition <br/>
                    · Common classifiers (kNN, SVM, etc.)
                    `,
                    detail: `
                    05.19
                    `
                },
                {
                    title: `
                    Regression <br/>
                    · Regression problem definition <br/>
                    · Multiple linear regression <br/>
                    · Non-linear regression methods
                    `,
                    detail: `
                    05.21
                    `
                },
                {
                    title: `
                    Project I:  <br/> Evaluating different classifiers and regressors
                    `,
                    detail: `
                    05.26
                    `
                },
                {
                    title: `
                    Artificial Neural Networks <br/>
                    · Neural networks definition <br/>
                    · Theoretical guarantees <br/>
                    · Loss functions and activation functions
                    `,
                    detail: `
                    05.28
                    `
                },
                {
                    title: `
                    Artificial Neural Networks (Cont.) <br/>
                    Convolutional Neural Networks <br/>
                    · Convolutional layers <br/>
                    · Pooling layers
                    `,
                    detail: `
                    06.02
                    `
                },
                {
                    title: `
                    Recurrent Neural Networks <br/>
                    · LSTM <br/>
                    · NARX
                    `,
                    detail: `
                    06.04
                    `
                },
                {
                    title: `
                    Project II:  <br/> Implementing neural networks
                    `,
                    detail: `
                    06.09
                    `
                },
            ]

    ]

    const video_info = {src:"https://youtu.be/DZB46VAIfzc"}

    const teacher_name = [
        "Z老师"
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
                    src: "assets/images/courses/PYTHONML/review-1.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-2.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-3.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-4.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-5.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-6.jpeg"
                },
                {
                    src: "assets/images/courses/PYTHONML/review-7.jpeg"
                },
            ]
        },

    ]


    $page_title = $(`<title>` + page_title + `</title>`);
    $text_books_picture = $(`
    <img class="top-0 ml-15" src=`+text_books_picture+`  alt="Decoration">
    `)


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