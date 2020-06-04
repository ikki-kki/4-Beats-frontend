import React from "react";

class CustomerInfo extends React.Component {
  render() {
    return (
      <>
        <tr>
          <th className="nameTitle">Name</th>
          <td>
            <div className="inputWrap">
              <input type="text" name="orderName" value="yun" />
            </div>
          </td>
        </tr>
        <tr>
          <th className="nameTitle">E-mail</th>
          <td>
            <div className="inputWrap">
              <input type="text" name="orderName" value="asd@gmail.com" />
            </div>
          </td>
        </tr>
      </>
    );
  }
}
export default CustomerInfo;
