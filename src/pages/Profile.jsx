import Sidebar from '../components/sidebar';
import Trends from '../components/trends';


const profile = () => {
  return (
    <>
    <Sidebar/>
    <div className="timeline">
    <div className="top">
        <button >
        pioche
        </button>
        <div className="info">
          <h1>edems</h1>
          <span className="info__tweets-count"> Tweets</span>
        </div>
      </div>
      <div className="cover">
        <img src="" alt="" />
      </div>
    </div>
    <Trends />
    
    </>
  )
}

export default profile