import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" backgroundUrl={Images.BLUE_BG} />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
      </div>
    </div>
  );
}

export default AddEditPage;
