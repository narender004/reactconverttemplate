import React from 'react';

class App extends React.Component {
  render(){
    return (
    <React.Fragment>

<div className="App">
<section className="info-head">
<div className="container">
<ul>
<li><i className="fa fa-headphones"></i> 01800034567</li>
<li><i className="fa fa-comment"></i> <a href="#">Live chat</a></li>
<li>
<ul>
<li className="dropdown">
<i className="fa fa-globe"></i>
<a className="dropdown-toggle" data-toggle="dropdown" href="#">
Language<i className="fa fa-angle-down"></i>
</a>
<ul className="dropdown-menu">
<li><a href="#"><img src="img/language/spanish.png" alt="" />Spanish</a></li>
<li><a href="#"><img src="img/language/english.png" alt="" />English</a></li>
<li><a href="#"><img src="img/language/frances.png" alt="" />Frances</a></li>
<li><a href="#"><img src="img/language/portugues.png" alt="" />Portuguese</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</section>


<header>

<div className="container">

<div className="row">

<div className="col-md-3">
<div className="logo">
<a href="index-2.html" title="Return Home">
<img src="img/logo.png" alt="Logo" className="logo_img" />
</a>
</div>
</div>


<nav className="col-md-9">

<ul id="menu" className="sf-menu">
<li>
<a href="index.html">HOME <i className="fa fa-angle-down"></i></a>
</li>
<li><a href="about-us.html">ABOUT<i className="fa fa-angle-down"></i></a>
</li>
<li><a href="services.html">SERVICES <i className="fa fa-angle-down"></i></a>
</li>
<li><a href="contact.html">CONTACT</a></li>
</ul>

</nav>

</div>

</div>

</header>


{/* <div className="tp-banner-container">
<div className="tp-banner">
<ul>
<li data-transition="zoomout" data-slotamount="7" data-masterspeed="1500">

<img src="img/slide/slides/1.jpg" alt="kenburns6" data-bgposition="center center" data-kenburns="on" data-duration="25000" data-ease="Linear.easeNone" data-bgfit="100" data-bgfitend="120" data-bgpositionend="center top" />

<div className="tp-caption large_text lft tp-resizeme" data-x="0" data-y="150" data-speed="500" data-start="1200" data-easing="Power4.easeOut" data-splitin="lines" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300"  style={{ zIndex: '5',maxWidth: '700px', lineHeight: '60px', maxHeight: 'auto', whiteSpace: 'normal' }}>
GREAT TEMPLATE
</div>
<div className="tp-caption large_bold_white lft tp-resizeme" data-x="-5" data-y="210" data-speed="500" data-start="1200" data-easing="Power4.easeOut" data-splitin="lines" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" style={{zIndex: '5',maxWidth: '700px', lineHeight: '60px', maxHeight: 'auto', whiteSpace: 'normal'}}>
RETINA DISPLAY
</div>
<div className="tp-caption line-slide lfb tp-resizeme" data-x="14" data-y="295" data-speed="500" data-start="1200" data-easing="Power4.easeOut" data-splitin="lines" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300">
</div>


<div className="tp-caption medium_text lfb tp-resizeme" data-x="10" data-y="330" data-speed="500" data-start="1200" data-easing="Power4.easeOut" data-splitin="lines" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300" 
style={{zIndex: '3',color:'#dedede',maxWidth: '800px', maxHeight: 'auto', whiteSpace: 'normal'}}>
We develop original products, innovative and quality high.
</div>


<div className="tp-caption lfb tp-resizeme" data-x="16" data-y="380" data-speed="300" data-start="1400" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300">
<a href='#' className='btn btn-primary'>View More</a>
</div>

</li>

</ul>
<div className="tp-bannertimer"></div>
</div>
</div> */}

</div>
</React.Fragment>

  );
}
}

export default App;
