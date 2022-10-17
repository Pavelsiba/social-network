import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../Users/user.png";
import { Form } from "@altiore/form";
import Field from "../../Common/Fields/Fields";
import styled from "styled-components";
import { PaginatorButton } from "../../Common/Paginator/Paginator";

const tooShort = (values) => {
  if (values && values.length < 5) {
    return 'Too short';
  }
};

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, error}) => {

   let [editMode, setEditMode ] = useState(false);
   

    if (!profile) {
      return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };

    const Contact = ({ contactTitle, contactValue }) => {
      return (
        <div className={s.contact}>
          <b>{contactTitle}</b>: {contactValue}
        </div>
      );
    };

    const handleSubmit = async (values) => {
      /* saveProfile(values)
      setEditMode(false) */
      await saveProfile(values)
     setEditMode(false)
    }
    

    const ProfileData = ({ profile, isOwner, goToEditMode }) => {
      return (
        <div> {isOwner && <PaginatorButton onClick={goToEditMode}>Edit</PaginatorButton>}
          <div> <b>Мое имя</b>: {profile.fullName}</div>
          <div> <b>About me</b>: {profile.aboutMe}</div>
          <div> <b>Мой стек</b>: {profile.lookingForAJobDescription}</div>
          <div> {profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}</div>
          <div><b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}/>)})}
          </div>
        </div>
      );
    };


    const ContactForm = ({contactTitle}) => {
      return (
        <div className={s.contact}>
         <Field.Text name={"contacts."+ contactTitle} 
                     placeholder={contactTitle} 
                     className={s.profileForm} 
                     validate={tooShort} 
                    />
        </div>
      );
    };
    
    const ProfileDataForm = ({profile, handleSubmit,error}) => {
      return (<div>
        <Form onSubmit={handleSubmit} defaultValues={profile}>
          <PaginatorButton type="submit">Save</PaginatorButton>
            <div> <Field.Text name="fullName" placeholder="Мое имя" className={s.profileForm} /></div>
            <div> <Field.Text name="aboutMe" placeholder="Обо мне" className={s.profileForm} /></div>
            <div> <Field.Text name="lookingForAJobDescription" placeholder="Мой стек" className={s.profileForm} /></div>
            <div> <Field.CheckBox name="lookingForAJob" label={'Ищу работу'} className={s.profileForm} /></div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
              return (
                <ContactForm
                  error={error}
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}/>)})}
            </div>
          </Form>
        </div>)};

    return (
      <div className={s.descriptionBlock}>
        <div className={s.photoBlock}>
          <img
            src={profile.photos.large || userPhoto}
            alt="аватарка"
            className={s.mainPhoto} />
          {isOwner && <InputFile type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div>
        <ProfileStatusHooks status={status} updateStatus={updateStatus} />   
        </div> 
        <div className={s.edit}>
          <div>
            <ProfileData goToEditMode={()=>setEditMode(true)} profile={profile} isOwner={isOwner} />
          </div>
          <div style={{paddingLeft:'20px'}}>
            {editMode && <ProfileDataForm profile={profile} goToEditMode={()=>setEditMode(false)} handleSubmit={handleSubmit} />}
          </div>
          {error&&<span className={s.errorServer}>{error}</span>}
        </div>
      </div>
    );
  };

export default ProfileInfo;

const InputFile = styled.input`
    font-size: 18px;
    font-weight: 400;
    color: red;
    line-height: 1.2;
    margin-left: 20px;
    &::-webkit-file-upload-button {
      font-size: 18px;
      cursor: pointer;
      color: white;
      background-color: gray;
      height: 40px;
      width: 150px;
      border-radius: 6px;
      transition: all 0.7s ease;
      &:hover {
        background-color: white;
        color: black;
      }
    }
`
/* <img
        src="https://avatars.mds.yandex.net/i?id=9d9acd11a01abca6e2e649593676200d-4480798-images-thumbs&n=13"
        alt="аватарка"
      /> */


      

           

        