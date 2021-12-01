import css from './AdvanceStatistics.css'
function AdvanceStatistics(){
    return(
            <div className="advanced-statistics">
              <h2 className="h2">Advanced Statistics</h2>
              <p className="subhead">
                Track how your links are performing across the web with our advanced
                statistics dashboard
              </p>
              <div className="box-group">
                <div className="box" id="box1">
                  <div className="box-circle" id="brand"></div>
                  <h3 className="h3">Brand Recognition</h3>
                  <p className="p">
                    Boost your brand recognition with each click. Generic links don’t
                    mean a thing. Branded links help instil confidence in your content.
                  </p>
                </div>
                <div className="line"></div>
                <div className="box" id="box2">
                  <div className="box-circle" id="records"></div>
                  <h3 className="h3">Detailed Records</h3>
                  <p className="p">
                    Gain insights into who is clicking your links. Knowing when and
                    where people engage with your content helps inform better decisions.
                  </p>
                </div>
                <div className="line"></div>
                <div className="box" id="box3">
                  <div className="box-circle" id="customize"></div>
                  <h3 className="h3">Fully Customizable</h3>
                  <p className="p">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          );
        }
export default AdvanceStatistics;
