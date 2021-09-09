<template>
  <div class="profile">
    
		<div class="container font-container">
      <div class="row">
          <img src="../assets/avatar/Pic.jpg" class="avatarImg">
      </div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center heading"  style="width: auto;">
					<h2>About Me</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<ul class="info">
						<li><span class="first-block">Full Name:</span><span class="second-block">Phisitpong Imjinda</span></li>
            <li><span class="first-block">Nick Name:</span><span class="second-block">James</span></li>
						<li><span class="first-block">Phone:</span><span class="second-block">091-8959249</span></li>
						<li><span class="first-block">Email:</span><span class="second-block">James_ksj@hotmail.com</span></li>
						<!--<li><span class="first-block">Website:</span><span class="second-block">www.yoursite.com</span></li>-->
						<li><span class="first-block">Address:</span><span class="second-block">Si Ayutthaya 7, Thung Phaya Thai, Khet Ratchathewi, Bangkok, 10400</span></li>
					</ul>
				</div>
				<div class="col-md-8">
					<h2>Hello </h2>
					<p>I'm open-minded and I'd love learning new things. I like team work and always have new ideas. I can learn anything fast and be loyal to corporate culture. I'm flexible person to adjust myself in difficult situation.</p>
          <h3>Career Objective </h3>
					<p>I'd like to challenge myself to develop my skills and I want to succeed in a stimulating and challenging environment where will provide me with advancement opportunities that I can grow professionally and personally.</p>
					
				</div>
			</div>
		</div>
	</div>
  
</template>
<script>
</script>
<style>
  h1, h2, h3, h4, h5, h6, a, figure {
    color: #000;
    font-family: "Space Mono", Arial, serif;
    font-weight: 400;
    margin: 0 0 20px 0;
  }
  p {
    margin-bottom: 30px;
  }
  .avatarImg {
    height: 200px;
    border-radius: 50%;
    margin-bottom: 2rem;
    margin-Top: 2rem;
  }
  .font-container {
    font-family: "Space Mono", Arial, serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #4d4d4d;
    background: #fff;
  }
  .heading {
    margin-bottom: 5em;
  }
  .heading h2 {
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 1.5;
    color: #000;
  }
  .info {
    margin: 0;
    padding: 0;
    width: 90%;
    float: left;
  }
    .info li {
      width: 100%;
      float: left;
      list-style: none;
      padding: 10px 0;
    }
    .info li:first-child {
        padding-top: 0;
    }
    .info li .first-block {
        width: 40%;
        display: inline-block;
        float: left;
        color: #000;
        font-weight: bold;
    }
    .info li .second-block {
        width: 60%;
        display: inline-block;
        color: rgba(0, 0, 0, 0.5);
    }

  @media (min-width: 992px){
    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }
  }
  @media (min-width: 992px){
    .col-md-8 {
      width: 66.66666667%;
    }
  }
</style>
