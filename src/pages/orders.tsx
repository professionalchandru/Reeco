/* eslint-disable react-refresh/only-export-components */
import Navbar from "../components/navbar/navbar";
import HeaderBar from "../components/headerbar/headerbar";
import { PageBody } from "../config/global_style";
import OrderInfoRow from "../components/order_info_row/order_info_row";
import OrderTable from "../components/order_table/order_table";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { getAllProducts } from "../redux/actions/app_actions";
import { useEffect } from "react";
import { Iproduct } from "../redux/types";
import { BackgroundOverLay, Loading } from "../components/modal/modal.style";

interface IProps {
  getAllProducts: () => void;
  products: Iproduct[];
  isLoading: boolean;
}

const Orders = (props: IProps) => {
  useEffect(() => {
    props.getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {props.isLoading ? (
        <BackgroundOverLay>
          <Loading>Loading....</Loading>
        </BackgroundOverLay>
      ) : (
        <>
          <Navbar />
          <HeaderBar />
          <PageBody>
            <OrderInfoRow />
            <OrderTable />
          </PageBody>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    products: state.App.products,
    isLoading: state.App.isLoading,
  };
};
const mapDispatchToProps = {
  getAllProducts: () => getAllProducts(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
