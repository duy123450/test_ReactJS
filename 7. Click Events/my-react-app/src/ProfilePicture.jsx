
function ProfilePicture() {
    const imgUrl = './src/assets/img1.jpg';

    const handleClick = (e) => {
        e.target.style.display = 'none';
    }

    return (
        <img src={imgUrl} alt="" onClick={(e) => handleClick(e)} />
    );
}

export default ProfilePicture;