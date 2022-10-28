import "./not-found-page.css";
import notFoundImage from "../../assets/404-not-found-illustration.svg";

const NotFoundPage = () => {
  return (
    <div className="main-not-found">
      <h1>404, Sorry this page doesn't exist!! Try later.</h1>
      <img src={notFoundImage} alt="Page-Not-Found" />
    </div>
  );
};

export { NotFoundPage };
