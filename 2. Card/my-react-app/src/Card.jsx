import profilePic from './assets/img1.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture" width="150px" height="150px"/>
            <h2 className='card-title'>Duy</h2>
            <p className='card-txt'>Learning React and TypeScript</p>
        </div>
    );
}

export default Card;