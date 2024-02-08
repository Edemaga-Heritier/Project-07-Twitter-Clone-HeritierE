import Sidebar from '../components/sidebar';
import Trends from '../components/trends';


const profile = () => {
  return (
    <>
    <Sidebar/>
    <div className="timeline">

     <div>
     <h3>Soy Segu</h3>
    <span>38.7k Tweets</span>
      </div> 
    
                <div class="headerprofileimage">
                    <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="header" id="headerimage"/>
                    <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="profile pic" id="profilepic"/>
                    <div class="editprofile">Edit Profile</div>
                </div>
                <div class="bio">
                    <div class="handle">
                        <h3>Soy Segun</h3>
                        <span>@segun_OS</span>
                    </div>
                    <p>Business Administration Student |</p>
                    <p>Front-end web developer |</p>
                    <p>Barça fan |</p>
                    <span>@Awelagos @4topsports</span> 
                    <span> <i class="fa fa-location-arrow "></i> Lagos, Nigeria. <a href="#"> <i
                                class="fa fa-external-link" aria-hidden="true"></i>linkedin.com/in/segun-olani… </a> <i
                            class="fa fa-birthday-cake" aria-hidden="true"></i> Born November 10</span>
                     <span><i class="fa fa-calendar"></i> Joined May 2013</span>
                    <div class="nawa">
                        <div class="followers"> 421 <span>Following</span></div>
                        <div>1519<span> Followers</span></div>
                    </div>
                
            

            <section class="tweets">
                <div class="heading">
                    <p>Tweets</p>
                    <p>Tweets and Replies</p>
                    <p>Media</p>
                    <p>Likes</p>
                </div>
            </section>
            <section class="mytweets">
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="avi" class="avi"/></div>
                <div class="tweetbody">
                    <div>Soy Segun @segun_OS - Feb. 11</div>
                    <div class="tweetcontent">Always check the replies for clarification before you retweet a tweet,
                        people deliberately mislead with their tweets.</div>
                    <ul class="retweeticons">
                        <i class="fa fa-comment" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                        <i class="fa fa-loveseat"></i>
                        <i class="fa fa-upload" aria-hidden="true"></i>
                    </ul>
                </div>

            </section>
        </div>

    
    </div>
    
    <Trends />
    
    </>
  )
}

export default profile