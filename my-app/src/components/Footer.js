import React from 'react'
import '../styles/footer.css';

function Footer() {
  return (
    <div>
        <div className="footer uk-background-secondary">
        <div className="uk-child-width-1-1 uk-child-width-1-4@m uk-grid-small" uk-grid>
          <div className='uk-display-inline-block'>
              <div class="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
                <h3>Discover</h3>
                <div><a>Nav-Stack Footer 3 test falcon</a></div>
                <div><a>Partners</a></div>
                <div><a>Events</a></div>
                <div><a>Market Place</a></div>
                <div><a>TechBeacon</a></div>
              </div>
          </div>
          
          <div className='uk-display-inline-block'>
              <div class="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
                <h3>Resources</h3>
                <div><a>Support Login</a></div>
                <div><a>Resource Library</a></div>
                <div><a>Free Trials</a></div>
                <div><a>Community</a></div>
                <div><a>Subscribe</a></div>
              </div>
          </div>

          <div className='uk-display-inline-block'>
              <div class="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
                <h3>Company</h3>
                <div><a>About</a></div>
                <div><a>Carrers</a></div>
                <div><a>Contact</a></div>
                <div><a>Corporate Blog</a></div>
                <div><a>Tax Stratergy</a></div>
              </div>
          </div>

          <div className='uk-display-inline-block'>
              <div class="uk-card uk-card-default uk-card-body uk-background-secondary uk-light">
                <h3>Legal & Compliance</h3>
                <div><a>Legal Information</a></div>
                <div><a>Privacy & Cookie Notice</a></div>
                <div><a>Website Terms of Use</a></div>
                <div><a>Code of Conduct</a></div>
                <div><a>Accessibility</a></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;