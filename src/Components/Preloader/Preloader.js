import spinner from "../../assets/imgs/Spinner-1s-200px.svg";

export let Preloader = (props) => {
  return (
    <div>
      <img src={spinner} alt="loader" />
    </div>
  );
};
