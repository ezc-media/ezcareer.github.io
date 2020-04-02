$(document).ready(function(){


    $navbar = $(`

    <!-- header -->
    <header class="header-sticky header-dark" style="border: none !important;">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="index.html">
            <img class="navbar-logo navbar-logo-light logo-m" src="assets/images/logos/logodark.svg" alt="Logo">
            <img class="navbar-logo navbar-logo-dark logo-m" src="assets/images/logos/logolight.svg" alt="Logo">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="burger"><span></span></span></button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav align-items-center mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html" role="button">
                  首页
                </a>
              </li>


              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  证书课程
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <a class="dropdown-item" href="cfa.html">
                  <span>CFAI级 百时班Plus</span>
                  <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="frm.html">
              <span>FRM保过班</span>
              <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="csc.html">
              <span>CSC证书班</span>
              <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="sas.html">
              <span>SAS双证班</span>
              <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="soa.html">
              <span>SOA证书班</span>
              <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="cpa.html">
              <span>CPA实战课</span>
              <p>签约保过 | 线上线下 | 北美同开</p>
              </a>
              </li>
              
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  技能课程
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <a class="dropdown-item" href="Tableau.html">
                  <span>Tableau全程班</span>
                  <p>线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="python.html">
                  <span>Python全程班</span>
                  <p>线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="excelvba.html">
                  <span>Excel VBA全程班</span>
                  <p>线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="networking.html">
                  <span>Networking</span>
                  <p>线上线下 | 北美同开</p>
              </a>
              <a class="dropdown-item" href="ba.html">
                  <span>BA实战课</span>
                  <p>线上线下 | 北美同开</p>
              </a>
              </li>
              
              <li class="nav-item dropdown">
               <a class="nav-link" href="vip.html" role="button">
                  1对1求职服务
                </a>
                
              </li>
               <li class="nav-item dropdown">
               <a class="nav-link" href="http://jobs.ezcareer.ca/" role="button" target="_blank">
                  岗位直通车
                </a>
                
              </li>

  <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  联系我们
                </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="career.html" target="_blank">
                  <span>加入我们</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="contacts.html" target="_blank">
                  <span>联系我们</span>
                </a>
              </div>
                
              </li>

            </ul>

            <ul class="navbar-nav align-items-center mr-0">
              <li class="nav-item">
                <a class="nav-link" href="http://www.easygroup.ca" role="button">
                  Powered by Easy Group
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- header -->

    `)

    $("#navbar").html($navbar);


});


