import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AdditionalDetailGalleryStyled } from "./style";
import property1 from "../../assets/Image/ic_image_1.png";
import property2 from "../../assets/Image/ic_image_2.png";
import closeIcon from "../../assets/icons/ic_add_property_delete_photo.svg";
import addIcon from "../../assets/icons/ic_add_property_add_photo.svg";
import Headbar from "../../Components/Headbar/Headbar";

const data = [
  property1,
  property2,
  property1,
  property2,
  property1,
  property2,
  property1,
  property2,
];

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<any>(data);
  function handleChange(e: any) {
    setGalleryData((prev: any) => [
      ...prev,
      URL.createObjectURL(e.target.files[0]),
    ]);
  }

  const galleryItemsHanlder = (index: number) => {
    const data = [...galleryData];
    data.splice(index, 1);
    setGalleryData(data);
  };

  return (
    <AdditionalDetailGalleryStyled>
      <div className="inner-container">
        <Headbar title="Additional Details" />
        <Row className="gallery">
          {galleryData.map((img: any, index: number) => (
            <Col key={index} sm={6} md={4} className="picture">
              <img className="lg-img w-100" src={img} alt="property" />
              <img
                onClick={() => galleryItemsHanlder(index)}
                src={closeIcon}
                className="close-icon cursor-pointer"
                alt="close"
              />
            </Col>
          ))}
          <div className="add-img-container">
            <Col
              sm={6}
              md={4}
              className="add-img d-flex flex-column align-items-center justify-content-center cursor-pointer"
            >
              {/* <p className="add-text">Add more</p> */}
              <div className="upload-btn-wrapper">
                <button className="btn">
                  <span>
                    <img
                      className="lg-img w-100"
                      src={addIcon}
                      alt="property"
                    />
                  </span>
                  <p className="mt-2 mb-0">Add More</p>
                  <p className="size-text">(max size: 5mb)</p>
                </button>
                <input type="file" name="myfile" onChange={handleChange} />
              </div>
              {/* <input className="d-hidden" type="file" onChange={handleChange} /> */}
            </Col>
          </div>
        </Row>
      </div>
    </AdditionalDetailGalleryStyled>
  );
};

export default Gallery;
