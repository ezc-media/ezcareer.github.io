
$(document).ready(function(){

    const career_data = [
        {
            title: "管理咨询实习生",
            company: "四大",
            location: "北京"
        },
        {
            title: "HR实习生",
            company: "ABB",
            location: "厦门"
        },
        {
            title: "Production Assistant",
            company: "ABB",
            location: "西安"
        },
        {
            title: "Quality & Production Assistant",
            company: "ABB",
            location: "北京"
        },
        {
            title: "人力资源及行政助理",
            company: "ABB",
            location: "厦门"
        },
        {
            title: "供应链管理助理",
            company: "ABB",
            location: "厦门"
        },
        {
            title: "项目管理助理",
            company: "ABB",
            location: "上海"
        },
        {
            title: "HR实习生",
            company: "ABB",
            location: "北京"
        },
        {
            title: "Data Analyst Co-op",
            company: "五大行",
            location: "多伦多"
        },
        {
            title: "Rotation Program 管培生",
            company: "西少爷",
            location: "多伦多"
        },
        {
            title: "R&D实习生",
            company: "ABB电网中国研究中心材料实验室",
            location: "北京"
        },
    ]

    function createReferrals(career_data) {
        let tempHTML = ``

        career_data.map((item, index) => {
            if (index < 2) {
                if (index === 0) {
                    tempHTML += `
                        <div class="col">
                            <a  class="job row align-items-center">
                            <span class="col-md-6 fs-22 font-weight-light text-white">
                                `+item.title+`
                            </span>
                            <span class="col-md-3">
                                `+item.company+`
                            </span>
                            <span class="col-md-3 text-md-right small">
                                `+item.location+`
                            </span>
                            </a>
                        </div>
                  `
                } else if (index === 1) {
                    tempHTML += `
                        <div class="col">
                            <a  class="job row align-items-center">
                            <span class="col-md-6 fs-22 font-weight-light text-white">
                                `+item.title+`
                            </span>
                            <span class="col-md-3">
                                `+item.company+`
                            </span>
                            <span class="col-md-3 text-md-right small">
                                `+item.location+`
                            </span>
                            </a>
                        </div>
                    </div>
              `
                }
            } else {
                if (index%2 === 0) {
                    tempHTML += `
                    <div class="row">
                        <div class="col">
                            <a  class="job row align-items-center">
                            <span class="col-md-6 fs-22 font-weight-light text-white">
                                `+item.title+`
                            </span>
                            <span class="col-md-3">
                                `+item.company+`
                            </span>
                            <span class="col-md-3 text-md-right small">
                                `+item.location+`
                            </span>
                            </a>
                        </div>
                    `
                } else {
                    tempHTML += `

                        <div class="col">
                            <a  class="job row align-items-center">
                            <span class="col-md-6 fs-22 font-weight-light text-white">
                                `+item.title+`
                            </span>
                            <span class="col-md-3">
                                `+item.company+`
                            </span>
                            <span class="col-md-3 text-md-right small">
                                `+item.location+`
                            </span>
                            </a>
                        </div>
                    </div>
                    `
                }
            }


            
        })

        
        return `
        
        <div class="container text-white" id="referrals">
          <div class="row">
            <div class="col text-left mb-5">
              <span>Referral</span>
              <h2>内推岗位</h2> 
              <a class="btn btn-warning text-white mr-1 mt-1" href="#popup2 ">申请</a>
              <div class="popup2" id="popup2">   
              <div class="card" style="text-align: center;">
                    <div class="card-body">
                    <iframe allowTransparency="true" style="min-height:30rem; min-width:30rem; height:inherit; overflow:auto;" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="http://sv.mikecrm.com/VPPgjPb">
                    <p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p>
                    </iframe><a class="popup__close2" href="#">X</a>
                    </div>
                  </div>   
                     
              </div>
            </div>
            <div class="col-12 mb-0">
              <h2 class="eyebrow mb-2">2020</h2>
            </div>

            `+tempHTML+`



          </div>
        </div>

        `;
    };

    $("#navbar").html(createNavbar("dark"));
    $('#footer').html(createFooter());
    $('#thereferrals').html(createReferrals(career_data))
    

});