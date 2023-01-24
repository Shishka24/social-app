import styles from "./users.module.css";
import userPhoto from "../../assets/imgs/png-transparent-computer-icons-user-profile-avatar-blue-heroes-window.png";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((el) => (
          <span
            className={props.currentPage === el && styles.selectedPage}
            onClick={() => {
              props.onPageChanger(el);
            }}
          >
            {el}
          </span>
        ))}
      </div>
      {props.users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <img
                src={el.photos.small != null ? el.photos.small : userPhoto}
                alt="pic"
                className={styles.userPhoto}
              />
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(el.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{el.name}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{"el.location.country"}</div>
              <div>{"el.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
