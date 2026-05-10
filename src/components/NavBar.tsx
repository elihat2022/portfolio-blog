export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
            src="https://res.cloudinary.com/dvsouhagn/image/upload/v1778412490/Group_3_rdqbbe.png"
            alt="Logo"
            style={{ width: "auto", height: "30px", display: "block" }}
          />
        </a>
        <ul className="navbar-menu">
          <li>
            <a href="/">Developer</a>
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
      <style>
        {`
      .navbar {
        width: 90%;
        max-width: 500px;
        border-radius:100px;
        background-color: #0f2500;
        color: white;
        padding: 10px 20px;
        box-sizing: border-box;
        margin: 20px auto;
        position: sticky;
        top: 20px;
        z-index: 1000;
      }
      @media (max-width: 600px) {
        .navbar {
          width: 95%;
          padding: 8px 15px;
          top: 10px;
        }
      }
      .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .navbar-menu {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 25px;
        margin: 0;
        padding: 0;
      }
      .navbar-menu li a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .navbar-menu li a:hover {
          text-decoration: none;
          color: #90cd27;
          text-shadow: 0 0 10px rgba(144, 205, 39, 0.8), 0 0 20px rgba(144, 205, 39, 0.4);
        }
      .navbar-logo {
       
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        text-decoration: none;
      }
      .navbar-logo:hover {
        text-decoration: underline; 
        color: #90cd27;
      `}
      </style>
    </nav>
  );
}
