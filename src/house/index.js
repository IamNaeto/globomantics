import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const House = ({ house }) => {
    const [InquiryShown, setInquiryShown] = useState(false);

    const InquiryClick = () => {
        setInquiryShown(!InquiryShown);
    };

    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    {/* Add responsive image class */}
                    <img
                        src={`/images/${house.photo}.jpeg`}
                        alt="House"
                        className="img-fluid" // This class ensures the image scales with the container
                    />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>${house.description}</p>
                    <img
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={InquiryClick}
                    />
                    {InquiryShown && <Inquiry house={house} />}
                </div>
            </div>
        </div>
    );
};

export default House;
