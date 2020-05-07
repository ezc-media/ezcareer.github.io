
  function createNavbar(mode) {
    header_mode = ""
    navbar_mode = ""

    let menu_all = () => {
      let cer_course = certi_course()
      let skl_course = skill_course()
      let regi_course = registration_course()

      if (window.location.href.includes("/en/")) {
        return [
          {
            title: "Home",
            link: "index.html",
            items: []
          },
          {
            title: "Certif. Course",
            link: "#",
            items: cer_course
          },
          {
            title: "Skill Course",
            link: "#",
            items: skl_course
          },
          {
            title: "Registration",
            link: "#",
            items: regi_course
          },
          {
            title: "VIP Program",
            link: "vip.html",
            items: []
          },
          {
            title: "Job Board",
            link: "http://jobs.ezcareer.ca/",
            items: []
          },
          {
            title: "Contact",
            link: "#",
            items: [
              {title: "Join Us", link: "career.html"},
              {title: "Contact Us", link: "contacts.html"}
            ]
          }
        ]
      } else {
        return [
          {
            title: "首页",
            link: "index.html",
            items: []
          },
          {
            title: "证书课程",
            link: "#",
            items: cer_course
          },
          {
            title: "技能课程",
            link: "#",
            items: skl_course
          },
          {
            title: "报名课程",
            link: "#",
            items: regi_course
          },
          {
            title: "1对1求职服务",
            link: "vip.html",
            items: []
          },
          {
            title: "岗位直通车",
            link: "http://jobs.ezcareer.ca/",
            items: []
          },
          {
            title: "联系我们",
            link: "#",
            items: [
              {title: "加入我们", link: "career.html"},
              {title: "联系我们", link: "contacts.html"}
            ]
          }
        ]
      }

    }

    let language_button = () => {
      let button_text = ""
      let button_href = ""
      if (window.location.href.includes("/en/")) {
        button_text = "中文"
        if (window.location.href.includes("ezcareer.github.io")) {
          button_href = window.location.origin + window.location.pathname.replace("/en", "")
        } else {
          button_href = window.location.origin + window.location.pathname.slice(3,)
        }
        
      } else {
        button_text = "English"
        if (window.location.href.includes("ezcareer.github.io")) {
          lastSlash = window.location.pathname.lastIndexOf("/")
          button_href = window.location.origin + window.location.pathname.slice(0,lastSlash) + "/en/" + window.location.pathname.slice(lastSlash+1)
        } else {
          button_href = window.location.origin + "/en" + window.location.pathname
        }
        
        
      }

      return `
      <a class="nav-link" href="`+button_href+`" role="button">
        `+button_text+`
      </a>
      `
    }

    if (mode === "light") {
      header_mode = "header-light"
      navbar_mode = "navbar-light"
    } else if (mode === "dark") {
      header_mode = "header-dark"
      navbar_mode = "navbar-dark"
    } else {
      header_mode = "header-dark"
      navbar_mode = "navbar-dark"
    }

    function createItems() {
      theMenu = menu_all()
      lang_button = language_button()
      
      tempHTML = `<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav align-items-center mr-auto">
      `

      for (block of theMenu) {

        if (block.items.length > 0) {
          tempHTML += `
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              `+block.title+`
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          `
          if (block.items.length === 2) {
            for (item of block.items) {
              tempHTML += 
              `
              <a class="dropdown-item" href="`+item.link+`">
              <span>`+item.title+`</span>
              </a>
              `
            }
          } else {
            for (item of block.items) {
              tempHTML += 
              `
              <a class="dropdown-item" href="`+item.link+`">
              <span>`+item.main_title+`</span>
              <p>`+item.sub_title+`</p>
              </a>
              `
            }
  
            tempHTML += `</li>`
          }


        } else {
          tempHTML += `
          <li class="nav-item">
            <a class="nav-link" href="`+block.link+`" role="button">
              `+block.title+`
            </a>
          </li>
          `
        }
      }
      tempHTML += 
      `
      </ul>

          <ul class="navbar-nav align-items-center mr-0">
            <li class="nav-item">
            `+lang_button+`
            </li>
          </ul>
        </div>

      `
      return tempHTML
    }


    menu_items_html = createItems()

    return `

    <!-- header -->
    <header class="header-sticky `+header_mode+`" style="border: none !important;">
      <div class="container">
        <nav class="navbar navbar-expand-lg `+navbar_mode+`">
          <a class="navbar-brand" href="index.html">
            <img class="navbar-logo navbar-logo-light logo-m" src="`+assets_route+`images/logos/logodark.svg" alt="Logo">
            <img class="navbar-logo navbar-logo-dark logo-m" src="`+assets_route+`images/logos/logolight.svg" alt="Logo">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="burger"><span></span></span></button>

          `+menu_items_html+`
        </nav>
      </div>
    </header>
    <!-- header -->

    `


  }

  const footer_data = () => {
    if (window.location.href.includes("/en/")) {
      return {
        contactUs: "Contact",
        joinUs: "Jobs"
      }
    } else {
      return {
        contactUs: "联系我们",
        joinUs: "加入我们"
      }
    }

  }
    
  function createFooter() {
    footer_dt = footer_data()
    return `
    <div class="separator-top">
      <div class="container py-5">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-5 text-center text-md-left">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="contacts.html">`+footer_dt.contactUs+`</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="career.html">`+footer_dt.joinUs+`</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Legal Information</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 text-center">
            <img class="logo-m" src="`+assets_route+`images/logos/logodark.svg" alt="Logo">
            <a class="nav-link" href="index.html" style="font-size:0.5em !important">
            Powered by Easy Group
            </a>
          </div>
          <div class="col-md-5 text-center text-md-right">
            <ul class="socials">
              <li><a href="https://www.youtube.com/channel/UCsXdZooAGMJpd5xycwSPGGQ" target="_blank" class="icon-youtube fs-20"></a></li>
              <li><a href="https://www.linkedin.com/company/easy-career/" target="_blank" class="icon-linkedin fs-20"></a></li>
              <li><a href="https://www.instagram.com/ezcareer/" class="icon-instagram fs-20" target="_blank"></a></li>
              <li><a href="contacts.html" class="icon-wechat fs-20"></a></li>

          </div>
        </div>
      </div>
    </div>

    `
  }
  




