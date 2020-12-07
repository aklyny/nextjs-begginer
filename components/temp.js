const Temp = ({user})=>{
    return(
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="avatar" />
            <h2>{user.location}</h2>
        </div>
    )
}


export default Temp;