import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <img
        src="https://avatars.mds.yandex.net/i?id=9d9acd11a01abca6e2e649593676200d-4480798-images-thumbs&n=13"
        alt="аватарка"
      /> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="аватарка" />
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <div>Мой стек: {props.profile.lookingForAJobDescription}</div>
      <div>{props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</div>
    </div>
  );
};

export default ProfileInfo;
