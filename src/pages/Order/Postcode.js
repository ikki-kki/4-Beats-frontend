import React from "react";
import DaumPostcode from "react-daum-postcode";

class Postcode extends React.Component {
  handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }
    console.log(fullAddress);
  };

  render() {
    return <DaumPostcode onComplete={this.handleComplete} />;
  }
}

export default Postcode;
