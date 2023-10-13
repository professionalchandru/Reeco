/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../uielements/button";
import Text from "../uielements/text";
import {
  HeaderBarConatiner,
  HeaderBottomRow,
  HeaderBottomRowLeft,
  HeaderBottomRowRight,
  HeaderTopRow,
} from "./headerbar.style";
import { Iproduct } from "../../redux/types";
import { updateOrder } from "../../redux/actions/app_actions";

interface Iprops {
  products: Iproduct[];
  isOrderApproved: boolean;
  updateOrder: () => void;
}

const HeaderBar = (props: Iprops) => {
  const { products, isOrderApproved, updateOrder } = props;

  const handleApproveOrder = () => {
    const isStaisfied = products.every((product) => product.status !== "");
    if (isStaisfied) {
      updateOrder();
    } else {
      alert("All the items needs to be handled using CTA");
    }
  };

  const handleBack = () => {
    window.location.reload();
  };

  return (
    <>
      <HeaderBarConatiner>
        <HeaderTopRow>
          <Text size="tiny">
            Orders &nbsp; &gt; &nbsp;{" "}
            <span style={{ textDecoration: "underline" }}>Order 432435</span>
          </Text>

          {isOrderApproved && (
            <Text size="tiny" color="text-primary" fontWeight="800">
              Order Approved Successfully...
            </Text>
          )}
        </HeaderTopRow>

        <HeaderBottomRow>
          <HeaderBottomRowLeft>
            <Text style={{ fontSize: "25px" }}>Order 432435</Text>
          </HeaderBottomRowLeft>

          <HeaderBottomRowRight>
            <Button bgColor="transparent" onClick={handleBack}>
              Back
            </Button>
            {!isOrderApproved ? (
              <Button bgColor="fill" onClick={handleApproveOrder}>
                Approve Order
              </Button>
            ) : null}
          </HeaderBottomRowRight>
        </HeaderBottomRow>
      </HeaderBarConatiner>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    products: state.App.products,
    isOrderApproved: state.App.isOrderApproved,
  };
};
const mapDispatchToProps = {
  updateOrder: () => updateOrder(),
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
