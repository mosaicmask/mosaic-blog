<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-04-07 17:04:45
-->
<template>
  <Welcome v-if="showWelcome" />
  <div
    v-else
    class="home-body"
  >
    <!-- 自我介绍板块开始 -->
    <section>
      <div class="introduction">
        <div class="text-body">
          <span class="welcome">欢迎来到我的博客</span>
          <h6>你可以在主页对我进行大概的了解，因为我会在主页简单的<b>展示</b>一下子自己</h6>
          <h6>你也可以去画廊，欣赏我给你拍摄的<b>照片</b></h6>
          <h6>你也可以去我的<b>笔记</b>库，跟我一起学习以及进步</h6>
          <h6>你也可以去欣赏我用来练习的，小<b>demo</b>，那是一些很有趣的东西</h6>
          <h6>想更加了解我？成为我的<b>朋友</b>，或者有好的<b>职位</b>推荐？欢迎联系我！</h6>
        </div>
        <div class="showSomething">
          <svg class="gegga">
            <defs>
              <filter id="gegga">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="7"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
                  result="inreGegga"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="inreGegga"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
          <svg
            class="snurra"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <defs>
              <linearGradient id="linjärGradient">
                <stop
                  class="stopp1"
                  offset="0"
                />
                <stop
                  class="stopp2"
                  offset="1"
                />
              </linearGradient>
              <linearGradient
                y2="160"
                x2="160"
                y1="40"
                x1="40"
                gradientUnits="userSpaceOnUse"
                id="gradient"
                xlink:href="#linjärGradient"
              />
            </defs>
            <path
              class="halvan"
              d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
            />
            <circle
              class="strecken"
              cx="100"
              cy="100"
              r="64"
            />
          </svg>
          <svg
            class="skugga"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <path
              class="halvan"
              d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
            />
            <circle
              class="strecken"
              cx="100"
              cy="100"
              r="64"
            />
          </svg>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1617344671">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <!-- 自我介绍板块结束 -->

    <!-- 掌握技能板块开始 -->
    <section>
      <div class="skills">
        <div class="title-box">
          <span>掌握的技能</span>
          <span>在学习专业知识的同时，发展摄影爱好也成为了我的次要目标，因此在掌握专业技能的同时，也能汲取到图形处理的知识</span>
        </div>
        <div class="skill-body">
          <ul>
            <li
              v-for="item in skills"
              :key="item.text"
              class="skill-box"
            >
              <svg class="icon">
                <use :xlink:href="item.iconName"></use>
              </svg>
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="custom-shape-divider-bottom-1617759839">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 掌握技能板块结束 -->

    <!-- 兴趣爱好板块开始 -->
    <section>
      <div class="myLike">
        <div class="title-box">
          <span>兴趣爱好</span>
          <span>提高时间利用和工作效率，给你全新的能量和激情，让你在接下来的活动中精力充沛，激发创新思维，兴趣爱好带来的好处无穷无尽</span>
        </div>
        <div class="like-body">
          <ul>
            <li
              class="like-box"
              v-for="item in likes"
              :key="item"
            >
              <div class="text-box">
                <span>{{item}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="custom-shape-divider-bottom-1617681446">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 兴趣爱好板块结束 -->

    <!-- 项目展示板块开始 -->
    <section>
      <div class="projects">
        <div class="title-box">
          <span>项目Demo</span>
          <span>抛开工作接触到的项目，个人也借鉴了其他许多大型项目进行练习，受益匪浅</span>
        </div>
        <div class="projects-box">
          <ul class="options-list">
            <li
              v-for="(item,index) in projects"
              :key="item"
              :class="projectsFlg == index?'hover':''"
              @mouseenter="changeProjectsTage(index)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="img-box">
          <img
            v-for="item in projectsImgs"
            :key="item"
            :src="url + item"
            class="card-img-top"
            alt="..."
          >
        </div>
        <div class="custom-shape-divider-bottom-1617759620">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 项目展示板块结束 -->

    <!-- 技术文档开始 -->
    <section>
      <div class="notes">
        <div class="title-box">
          <span>技术文档</span>
          <span>学习中的新知识点，工作中遇到的问题，记下来，记下来，记下来</span>
        </div>
        <div class="notes-box">
          <div
            class="card"
            style="width: 18rem;"
            v-for="item in 6"
            :key="item"
          >
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <router-link
                to="/photography"
                class="notes-btn btn btn-1"
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                  />
                </svg>
                let's go
              </router-link>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1617779411">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <!-- 技术文档结束 -->

    <!-- 摄影作品展示开始 -->
    <section>
      <div class="photography">
        <div class="title-box">
          <span>摄影作品集</span>
          <span>摄影对我的影响非常巨大，摄影让我认识了自己，认识了生活，认识了许多有意思的人</span>
        </div>
        <div class="photo-album-box">
          <div class="photo-album">
            <a
              href="http://www.flickr.com/photos/nataliedowne/2254117707/in/set-72157604232220981"
              class="large polaroid img1"
            ><img
                src="http://media.24ways.org/2009/14/img/volcanic.jpg"
                alt=""
              >This breathtaking volcanic lake is at Wai-O-Tapu Thermal Wonderland</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2254700486/in/set-72157604232220981/"
              class="large polaroid img2"
            ><img
                src="http://media.24ways.org/2009/14/img/waterfall.jpg"
                alt=""
              >This lovely waterfall was at Rotorua in Rainbow Springs</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2254704566/in/set-72157604232220981/"
              class="small polaroid img3"
            ><img
                src="http://media.24ways.org/2009/14/img/leaf.jpg"
                alt=""
              >Ferntastic</a>

            <a
              href="http://www.flickr.com/photos/nataliedowne/2311404989/in/set-72157604232220981/"
              class="medium polaroid img4"
            ><img
                src="http://media.24ways.org/2009/14/img/whale.jpg"
                alt=""
              >At Kaikoura we went whale watching!</a>

            <a
              href="http://www.flickr.com/photos/nataliedowne/2312219680/in/set-72157604232220981"
              class="small polaroid img5"
            ><img
                src="http://media.24ways.org/2009/14/img/seal.jpg"
                alt=""
              >Found this little cutie on a walk in New Zealand!</a>

            <a
              href="http://www.flickr.com/photos/nataliedowne/2254789880/in/set-72157604232220981/"
              class="medium polaroid img6"
            ><img
                src="http://media.24ways.org/2009/14/img/lake.jpg"
                alt=""
              >An amazing bubbling volcanic spring, a bit muddy</a>

            <a
              href="http://www.flickr.com/photos/nataliedowne/2341399904/in/set-72157604232220981/"
              class="medium polaroid img7"
            ><img
                src="http://media.24ways.org/2009/14/img/simon.jpg"
                alt=""
              >Simon in a giant Kiwi, pretending to be a Kiwi (the bird)</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2352603191/in/set-72157604232220981/"
              class="small polaroid img8"
            ><img
                src="http://media.24ways.org/2009/14/img/albatross.jpg"
                alt=""
              >Albatross in Dunedin</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2340993237/in/set-72157604232220981/"
              class="medium polaroid img9"
            ><img
                src="http://media.24ways.org/2009/14/img/raft.jpg"
                alt=""
              >White water rafting in Queenstown</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2306995686/in/set-72157604033893095/"
              class="large polaroid img10"
            ><img
                src="http://media.24ways.org/2009/14/img/whiteisland.jpg"
                alt=""
              >White Island</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2306989200/in/set-72157604033893095/"
              class="small polaroid img11"
            ><img
                src="http://media.24ways.org/2009/14/img/sulphur.jpg"
                alt=""
              >Sulphurous</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2352608953/in/set-72157604232220981/"
              class="small polaroid img12"
            ><img
                src="http://media.24ways.org/2009/14/img/sealions.jpg"
                alt=""
              >Sea lions!</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2341816430/in/set-72157604232220981/"
              class="small polaroid img13"
            ><img
                src="http://media.24ways.org/2009/14/img/horses.jpg"
                alt=""
              >Horse riding</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2352490411/in/set-72157604232220981/"
              class="small polaroid img14"
            ><img
                src="http://media.24ways.org/2009/14/img/camping.jpg"
                alt=""
              >Stewart Island</a>
            <a
              href="http://www.flickr.com/photos/nataliedowne/2339184562/in/set-72157604232220981/"
              class="medium polaroid img15"
            ><img
                src="http://media.24ways.org/2009/14/img/us.jpg"
                alt=""
              >Us in a blue cave on the Franz Josef glacier</a>
          </div>
          <div class="custom-shape-divider-bottom-1617781801">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- 摄影作品展示结束 -->
    <!-- 有意思的小demo -->
    <section>
      <div class="demo">
        <div class="title-box">
          <span>这个网站看起来怎么样？</span>
          <span>动动你的小手指，给我打个分吧！当然,我也会一直完善这个小东西...</span>
        </div>
        <div class="container">
          <div class="feedback">
            <div class="rating">
              <input
                type="radio"
                name="rating"
                id="rating-5"
              >
              <label for="rating-5"></label>
              <input
                type="radio"
                name="rating"
                id="rating-4"
              >
              <label for="rating-4"></label>
              <input
                type="radio"
                name="rating"
                id="rating-3"
              >
              <label for="rating-3"></label>
              <input
                type="radio"
                name="rating"
                id="rating-2"
              >
              <label for="rating-2"></label>
              <input
                type="radio"
                name="rating"
                id="rating-1"
              >
              <label for="rating-1"></label>
              <div class="emoji-wrapper">
                <div class="emoji">
                  <svg
                    class="rating-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle
                      cx="256"
                      cy="256"
                      r="256"
                      fill="#ffd93b"
                    />
                    <path
                      d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                      fill="#f4c534"
                    />
                    <ellipse
                      transform="scale(-1) rotate(31.21 715.433 -595.455)"
                      cx="166.318"
                      cy="199.829"
                      rx="56.146"
                      ry="56.13"
                      fill="#fff"
                    />
                    <ellipse
                      transform="rotate(-148.804 180.87 175.82)"
                      cx="180.871"
                      cy="175.822"
                      rx="28.048"
                      ry="28.08"
                      fill="#3e4347"
                    />
                    <ellipse
                      transform="rotate(-113.778 194.434 165.995)"
                      cx="194.433"
                      cy="165.993"
                      rx="8.016"
                      ry="5.296"
                      fill="#5a5f63"
                    />
                    <ellipse
                      transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                      cx="345.695"
                      cy="199.819"
                      rx="56.146"
                      ry="56.13"
                      fill="#fff"
                    />
                    <ellipse
                      transform="rotate(-148.804 360.25 175.837)"
                      cx="360.252"
                      cy="175.84"
                      rx="28.048"
                      ry="28.08"
                      fill="#3e4347"
                    />
                    <ellipse
                      transform="scale(-1) rotate(66.227 254.508 -573.138)"
                      cx="373.794"
                      cy="165.987"
                      rx="8.016"
                      ry="5.296"
                      fill="#5a5f63"
                    />
                    <path
                      d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                      fill="#3e4347"
                    />
                  </svg>
                  <svg
                    class="rating-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle
                      cx="256"
                      cy="256"
                      r="256"
                      fill="#ffd93b"
                    />
                    <path
                      d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                      fill="#f4c534"
                    />
                    <path
                      d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                      fill="#3e4347"
                    />
                    <path
                      d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                      fill="#f4c534"
                    />
                    <path
                      d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                      fill="#fff"
                    />
                    <path
                      d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                      fill="#3e4347"
                    />
                    <path
                      d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                      fill="#fff"
                    />
                    <path
                      d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                      fill="#f4c534"
                    />
                    <path
                      d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                      fill="#fff"
                    />
                    <path
                      d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                      fill="#3e4347"
                    />
                    <path
                      d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                      fill="#fff"
                    />
                  </svg>
                  <svg
                    class="rating-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle
                      cx="256"
                      cy="256"
                      r="256"
                      fill="#ffd93b"
                    />
                    <path
                      d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                      fill="#f4c534"
                    />
                    <path
                      d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                      fill="#3e4347"
                    />
                    <path
                      d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                      fill="#fff"
                    />
                    <circle
                      cx="340"
                      cy="260.4"
                      r="36.2"
                      fill="#3e4347"
                    />
                    <g fill="#fff">
                      <ellipse
                        transform="rotate(-135 326.4 246.6)"
                        cx="326.4"
                        cy="246.6"
                        rx="6.5"
                        ry="10"
                      />
                      <path d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z" />
                    </g>
                    <circle
                      cx="168.5"
                      cy="260.4"
                      r="36.2"
                      fill="#3e4347"
                    />
                    <ellipse
                      transform="rotate(-135 182.1 246.7)"
                      cx="182.1"
                      cy="246.7"
                      rx="10"
                      ry="6.5"
                      fill="#fff"
                    />
                  </svg>
                  <svg
                    class="rating-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle
                      cx="256"
                      cy="256"
                      r="256"
                      fill="#ffd93b"
                    />
                    <path
                      d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                      fill="#3e4347"
                    />
                    <path
                      d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                      fill="#f4c534"
                    />
                    <g fill="#fff">
                      <path d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z" />
                      <ellipse
                        cx="356.4"
                        cy="205.3"
                        rx="81.1"
                        ry="81"
                      />
                    </g>
                    <ellipse
                      cx="356.4"
                      cy="205.3"
                      rx="44.2"
                      ry="44.2"
                      fill="#3e4347"
                    />
                    <g fill="#fff">
                      <ellipse
                        transform="scale(-1) rotate(45 454 -906)"
                        cx="375.3"
                        cy="188.1"
                        rx="12"
                        ry="8.1"
                      />
                      <ellipse
                        cx="155.6"
                        cy="205.3"
                        rx="81.1"
                        ry="81"
                      />
                    </g>
                    <ellipse
                      cx="155.6"
                      cy="205.3"
                      rx="44.2"
                      ry="44.2"
                      fill="#3e4347"
                    />
                    <ellipse
                      transform="scale(-1) rotate(45 454 -421.3)"
                      cx="174.5"
                      cy="188"
                      rx="12"
                      ry="8.1"
                      fill="#fff"
                    />
                  </svg>
                  <svg
                    class="rating-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <circle
                      cx="256"
                      cy="256"
                      r="256"
                      fill="#ffd93b"
                    />
                    <path
                      d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                      fill="#f4c534"
                    />
                    <path
                      d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                      fill="#e24b4b"
                    />
                    <path
                      d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                      fill="#d03f3f"
                    />
                    <path
                      d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                      fill="#fff"
                    />
                    <path
                      d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                      fill="#e24b4b"
                    />
                    <path
                      d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                      fill="#d03f3f"
                    />
                    <path
                      d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                      fill="#fff"
                    />
                    <path
                      d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                      fill="#3e4347"
                    />
                    <path
                      d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                      fill="#e24b4b"
                    />
                  </svg>
                  <svg
                    class="rating-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g fill="#ffd93b">
                      <circle
                        cx="256"
                        cy="256"
                        r="256"
                      />
                      <path d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z" />
                    </g>
                    <path
                      d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                      fill="#e9eff4"
                    />
                    <path
                      d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                      fill="#45cbea"
                    />
                    <path
                      d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                      fill="#e84d88"
                    />
                    <g fill="#38c0dc">
                      <path d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z" />
                    </g>
                    <g fill="#d23f77">
                      <path d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z" />
                    </g>
                    <path
                      d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                      fill="#3e4347"
                    />
                    <path
                      d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                      fill="#e24b4b"
                    />
                    <path
                      d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                      fill="#fff"
                      opacity=".2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 有意思的小demo结束 -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Welcome from '../components/welcome/welcome.vue';
import Footer from '../components/Footer/Footer.vue';

// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { Welcome, Footer },
  data() {
    return {
      url: 'https://blog-img-data.oss-cn-shanghai.aliyuncs.com/image-home/',
      skills: [
        { text: 'JavaScript', iconName: '#icon-js' },
        { text: 'TypeScript', iconName: '#icon-ts' },
        { text: 'Node.js', iconName: '#icon-Nodejs' },
        { text: 'HTML5', iconName: '#icon-html' },
        { text: 'CSS3', iconName: '#icon-css' },
        { text: 'Sass', iconName: '#icon-sass' },
        { text: 'less', iconName: '#icon-less' },
        { text: 'Vue', iconName: '#icon-vue' },
        { text: '微信小程序', iconName: '#icon-weixinxiaochengxu' },
        { text: 'webpack', iconName: '#icon-webpack' },
        { text: 'Mysql', iconName: '#icon-mysql' },
        { text: 'PHP', iconName: '#icon-php' },
        { text: 'Git', iconName: '#icon-git' },
        { text: '剪辑', iconName: '#icon-jianji' },
        { text: '摄影', iconName: '#icon-sheying' },
        { text: 'PS', iconName: '#icon-Ps' },
      ],
      likes: ['摄影', '编程', '跑步', '动漫'],
      projects: [
        '影评小程序',
        'miniAprender',
        '菜谱App',
        '一见民宿',
        '采销一体化',
        '索罗门物流(小程序)',
        '索罗门物流(App)',
        '闲置位',
      ],
      projectsImgs: [''],
      imgArr: [
        ['YP1.jpg', 'YP2.jpg', 'YP3.jpg', 'YP4.jpg'],
        ['mini1.jpg', 'mini2.jpg', 'mini3.jpg', 'mini4.jpg'],
        ['cp1.jpg', 'cp2.jpg', 'cp3.jpg', 'cp4.jpg'],
      ],
      projectsFlg: 0,
    };
  },
  setup() {
    // 判断是否首次加载
    const showWelcome = ref(false);
    onMounted(() => {
      // 根据是否存在会话缓存判断
      let isFalst = sessionStorage.getItem('isFalst');
      typeof isFalst === 'object'
        ? ((showWelcome.value = true), //更改状态
          sessionStorage.setItem('isFalst', 'not'), //存入缓存
          setTimeout(() => {
            //设置定时器结束欢迎动画
            showWelcome.value = false;
          }, 7500))
        : (showWelcome.value = false);
    });
    return {
      showWelcome,
    };
  },
  created() {
    this.changeProjectsTage(0);
  },
  methods: {
    //鼠标移入事件
    changeProjectsTage(index: number) {
      if (index >= this.imgArr.length) return;
      // 更改显示图片
      this.projectsImgs = [...this.imgArr[index]];
      // 更改选中项
      this.projectsFlg = index;
    },
  },
});
</script>

<style scoped src="../assets/css/out/home.css">
</style>