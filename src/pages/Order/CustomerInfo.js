import React from "react";

class CustomerInfo extends React.Component {
  render() {
    const { name, email } = this.props;
    return (
      <>
        <tr>
          <th className="nameTitle">Name</th>
          <td>
            <div className="inputWrap">
              <input type="text" name="orderName" value={name} />
            </div>
          </td>
        </tr>
        <tr>
          <th className="nameTitle">E-mail</th>
          <td>
            <div className="inputWrap">
              <input type="text" name="orderName" value={email} />
            </div>
          </td>
        </tr>
      </>
    );
  }
}
export default CustomerInfo;
