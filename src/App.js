import React from "react";

function App() {
  return (
    <div id="shell">
      {/*  <Header>  */}
      <div id="header">
        <h1 id="logo"><a href="#">MEGAZZINE</a></h1>
        <div className="top-bar">
          <div className="links"> <a href="#">SIGN IN</a> <a href="#">SIGN UP</a> <a href="#" className="rss">SUBSCRIBE</a> </div>
          <div className="cl">&nbsp;</div>
          <div id="search">
            <form action="#" method="post">
              <label for="search-string">IM LOOKING FOR</label>
              <div className="fields">
                <input type="text" value="..." id="search-string" className="field" />
                <input type="submit" value="" className="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*  </Header>  */}
      {/*  <Navigation>  */}
      <div id="navigation">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#" className="active">ARTICLES</a></li>
          <li><a href="#">PHOTOS</a></li>
          <li><a href="#">COMMUNITY</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div className="cl">&nbsp;</div>
      </div>
      {/*  </Navigation>  */}
      <div id="main">
        <div id="content">
          {/*  <CategoryArea>  */}
          <div className="box">
            <h2><span>CATEGORY ONE</span></h2>
            <a href="#" className="see-all">See all articles in this category</a>
            <div className="cl">&nbsp;</div>
            <div className="posts">
              <div className="post">
                <div className="image"> <a href="#"><img src="css/images/post-1.jpg" alt="" /></a> </div>
                <div className="data">
                  <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
                  <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
                </div>
              </div>
              <div className="post last">
                <div className="image"> <a href="#"><img src="css/images/post-2.jpg" alt="" /></a> </div>
                <div className="data">
                  <h4><a href="#">Maecenas scelerisque sapien </a></h4>
                  <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
                </div>
              </div>
              <div className="cl">&nbsp;</div>
              <div className="post">
                <div className="image"> <a href="#"><img src="css/images/post-3.jpg" alt="" /></a> </div>
                <div className="data">
                  <h4><a href="#">Cras ac ultrices ipsum. </a></h4>
                  <p>Vivamus adipiscing dui at turpis imperdiet congue. Fusce posuere augue et odio bibendum non dictum nisi posuere. </p>
                </div>
              </div>
              <div className="post last">
                <div className="image"> <a href="#"><img src="css/images/post-4.jpg" alt="" /></a> </div>
                <div className="data">
                  <h4><a href="#">Nunc ac lorem id ipsum.</a></h4>
                  <p>Maecenas sodales auctor urna cursus facilisis. Cras rutrum justo id mi bibendum luctus. </p>
                </div>
              </div>
              <div className="cl">&nbsp;</div>
            </div>
          </div>
          {/*  </CategoryArea>  */}
          <div className="cl">&nbsp;</div>
        </div>
        <div id="sidebar">
          {/*  <NavBox>  */}
          <div className="nav-box">
            <h2><span>CATEGORIES</span></h2>
            <ul>
              <li><a href="#">Cras nec lorem lecturs</a></li>
              <li><a href="#">Nunc pell entesq</a></li>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Amet sit laoreet</a></li>
              <li><a href="#">Lectus sit amet</a></li>
              <li><a href="#">Pellenstesuq nunc lorem</a></li>
            </ul>
          </div>
          {/*  </NavBox>  */}
        </div>
        {/*  <Banners>  */}
        <div id="banners">
          <div className="banner"> 
            <a href="#"><img src="css/images/small-banner.gif" alt="" /></a> 
          </div>
          <div className="banner"> 
            <a href="#"><img src="css/images/big-banner.gif" alt="" /></a> 
          </div>
        </div>
        {/*  </Banners>  */}

        <div className="cl">&nbsp;</div>
      </div>
      <div id="bottom">
        <div className="bg-top">
          <div className="bg-bottom">
            <div className="cl">&nbsp;</div>
          </div>
        </div>
      </div>
      {/*  <Footer>  */}
      <div id="footer">
        <p className="lf">Copyright &copy; 2010 <a href="#">SiteName</a> - All Rights Reserved</p>
        <p className="rf">Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a></p>
        <div style={{clear: "both"}} />
      </div>
      {/*  </Footer>  */}

    </div>
  );
}

export default App;
