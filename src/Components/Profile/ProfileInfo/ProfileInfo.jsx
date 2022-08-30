import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import s from "./ProfileInfo.module.css";


const ProfileInfo = ({profile}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <img
        src="https://avatars.mds.yandex.net/i?id=9d9acd11a01abca6e2e649593676200d-4480798-images-thumbs&n=13"
        alt="аватарка"
      /> */}
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="аватарка" />
      </div>
      <ProfileStatus status={'Здорова дружище. Как дела?'} />
      <div>{profile.fullName}</div>
      <div>{profile.aboutMe}</div>
      <div>Мой стек: {profile.lookingForAJobDescription}</div>
      <div>{profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</div>
    </div>
  );
};

export default ProfileInfo;
