export default function Header(){
    return(
    <header className="header">
      <div className="container d-flex flex-column align-items-center">
        <img className="header__avatar" src="./images/avatar.png" alt="avatar"/>
        <h1 className="header__title">MingZac</h1>
        <hr className="divider--light"/>
        <p className="header__slogan">I know U were trouble when u walk in </p>
    </div>
  </header>

    );

} 