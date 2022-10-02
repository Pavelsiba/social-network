import { Form } from "@altiore/form";
import Field from "../Fields/Fields";
import style from "./delo.module.css";

const ModalWindow = () => {
  return (<div>
    
    <div className={style.wrapper}>
      <header>
      <div className={style.close}><span>X</span></div>
        <h1>Создать дело</h1>
      </header>
      <div className={style.appWrapper}>
     
        <div>
          <p>УИД</p>
          <p>Номер</p>
          <p>Истец:</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <Form>
            <Field.Number name="uid"  />
            <Field.Number name="number" />
            <Field.CheckBox name='istec' text='Юридическое лицо' />
          </Form>
        </div>
        <div>3</div>
        <div>
          <Form></Form>
        </div>
      </div>
    </div>
    <button className={style.btn}>Показать окно</button>
    </div>
  );
};

export default ModalWindow;

/* <div className={style.uid}>
<Field.Number name="uid" label='УИД' className={style.delo}/>
<Field.Number name="number" label='Номер' className={style.delo}/>
</div>
<div className={style.data}>
<Field.Data name="data" label='Дата' className={style.delo} />
</div>
<div className={style.istec}>
<Field.CheckBox name='istec' label='Истец:' text='Юридическое лицо' />
<Field.Text name="urname" label="Фамилия" className={style.delo}/>
<Field.Text name="name" label="Имя"  className={style.delo}/>
<Field.Text name="patronymic" label="Отчество" className={style.delo}/>
<Field.Data name="birthday" label='Дата рождения' className={style.delo}/>
<Field.Text name="adresreg" label="Адрес регистрации" className={style.delo}/>
<Field.Text name="adreslive" label="Адрес проживания" className={style.delo}/>
<Field.Phone name='phone' label='Номер телефона' className={style.delo} />
</div>
<div className={style.answers}>
<Field.CheckBox name='otvet' label='Ответчик:' text='Юридическое лицо' />
<Field.Number name="inn" label='ИНН' className={style.delo}/>
<Field.Number name="ogrn" label='ОГРН' className={style.delo}/>
<Field.Text name="company" label="Название компании" className={style.delo}/>
<Field.Text name="uradres" label="Юридический адрес"  className={style.delo}/>
<Field.CheckBox name='poctadres' text='Почтовый адрес совпадает с юридическим'/>
<Field.Text name="poctadress" label="Почтовый адрес" className={style.delo}/>
<Field.Number name="kpp" label='КПП' className={style.delo}/>
<Field.Number name="рс" label='Р/с' className={style.delo}/>
<Field.Text name="bank" label="Банк" className={style.delo}/>
<Field.Number name="bik" label='БИК' className={style.delo}/>
<Field.Number name="kс" label='К/с' className={style.delo}/>
</div> */
