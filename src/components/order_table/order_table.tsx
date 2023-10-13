/* eslint-disable react-refresh/only-export-components */
import {
  HeaderRow,
  Table,
  OrderTableOuterConatiner,
  PrintIcon,
  RowRight,
  SearchBar,
  TableHead,
  TableRow,
  Thead,
  TableData,
  ProductImg,
  ActionRow,
  ActionImg,
  ActionImgClose,
  CenterDiv,
} from "./order_table.style";

import printIcon from "../../assets/images/png/asset_print_png.png";
import avacado from "../../assets/images/jpg/asset_avacado_jpg.jpg";
import tickBlack from "../../assets/images/png/asset_tick_black_png.png";
import tickGreen from "../../assets/images/png/asset_tick_green_png.png";
import wrongBlack from "../../assets/images/png/asset_close_black_png.png";
import wrongRed from "../../assets/images/png/asset_close_red_png.png";
import Button from "../uielements/button";
import Tag, { tagType } from "../uielements/tag";
import Text from "../uielements/text";
import Modal from "../modal/modal";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Iproduct } from "../../redux/types";
import {
  addProduct,
  openModal,
  updateStatus,
} from "../../redux/actions/app_actions";

interface Iprops {
  products: Iproduct[];
  isModalOpen: boolean;
  isOrderApproved: boolean;
  addProduct: () => void;
  openModal: (productId: number) => void;
  updateStatus: (id: number, status: tagType) => void;
}

const OrderTable = (props: Iprops) => {
  const {
    products,
    isOrderApproved,
    isModalOpen,
    addProduct,
    openModal,
    updateStatus,
  } = props;

  const handelOpenModal = (productId: number) => {
    if (isOrderApproved) {
      alert(`Order is already approved. You can't modify now!`);
    } else {
      openModal(productId);
    }
  };

  const handleApprove = (id: number) => {
    if (isOrderApproved) {
      alert(`Order is already approved. You can't modify now!`);
    } else {
      updateStatus(id, "approved");
    }
  };

  const handleAddProduct = () => {
    if (isOrderApproved) {
      alert(`Order is already approved. You can't modify now!`);
    } else {
      addProduct();
    }
  };

  return (
    <>
      <OrderTableOuterConatiner>
        <HeaderRow>
          <SearchBar placeholder="Search..."></SearchBar>

          <RowRight>
            <Button bgColor="transparent" onClick={handleAddProduct}>
              Add Item
            </Button>
            <PrintIcon src={printIcon} alt="print-icon.png" />
          </RowRight>
        </HeaderRow>

        <Table>
          <Thead>
            <TableRow>
              <TableHead width={"6%"}></TableHead>
              <TableHead width={"25%"}>
                <Text color="text-normal" fontWeight="500">
                  {" "}
                  Product Name
                </Text>
              </TableHead>
              <TableHead width={"13%"}>
                <Text color="text-normal" fontWeight="500">
                  Brand
                </Text>
              </TableHead>
              <TableHead width={"13%"}>
                <Text color="text-normal" fontWeight="500">
                  Price
                </Text>
              </TableHead>
              <TableHead width={"13%"}>
                <Text color="text-normal" fontWeight="500">
                  Quantity
                </Text>
              </TableHead>
              <TableHead width={"9%"}>
                <Text color="text-normal" fontWeight="500">
                  Total
                </Text>
              </TableHead>
              <TableHead width={"12%"}>
                <Text color="text-normal" fontWeight="500">
                  Status
                </Text>
              </TableHead>
              <TableHead width={"10%"}></TableHead>
            </TableRow>
          </Thead>

          {products?.map((product: Iproduct, index: number) => {
            return (
              <TableRow
                key={product.productId}
                isLast={index === products.length - 1}
              >
                <TableData
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ProductImg src={avacado} alt="product-img" />
                </TableData>

                <TableData>
                  <Text color="text-strong" size="tiny">
                    {product.productName}
                  </Text>
                </TableData>

                <TableData>
                  <Text color="text-strong" size="tiny">
                    {product.brand}
                  </Text>
                </TableData>

                <TableData>
                  <Text color="text-strong" size="tiny">
                    {product.price}
                  </Text>
                </TableData>

                <TableData>
                  <Text color="text-strong" size="tiny">
                    <span style={{ color: "#4d5059", fontWeight: "800" }}>
                      {product.quantity}
                    </span>{" "}
                    x 6 * Lb
                  </Text>
                </TableData>

                <TableData>
                  <Text color="text-strong" size="tiny">
                    {product.total}
                  </Text>
                </TableData>

                <TableData isLast>
                  <CenterDiv>
                    {product.status ? <Tag type={product.status} /> : null}
                  </CenterDiv>
                </TableData>

                <TableData isLast>
                  <ActionRow>
                    {product.status !== "approved" ? (
                      <ActionImg
                        src={tickBlack}
                        alt="tick.png"
                        onClick={() => handleApprove(product.productId)}
                      />
                    ) : (
                      product.status === "approved" && (
                        <ActionImg src={tickGreen} alt="tick-green.png" />
                      )
                    )}
                    {product.status !== "missing" &&
                    product.status !== "missing-urgent" ? (
                      <ActionImgClose
                        src={wrongBlack}
                        alt="close.png"
                        onClick={() => handelOpenModal(product.productId)}
                      />
                    ) : (
                      <ActionImgClose
                        src={wrongRed}
                        alt="close.png"
                        onClick={() => handelOpenModal(product.productId)}
                      />
                    )}
                    <Text size="tiny" color="text-normal">
                      Edit
                    </Text>
                  </ActionRow>
                </TableData>
              </TableRow>
            );
          })}
        </Table>
      </OrderTableOuterConatiner>

      {isModalOpen ? <Modal /> : null}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isOrderApproved: state.App.isOrderApproved,
    products: state.App.products,
    isModalOpen: state.App.isModalOpen,
  };
};
const mapDispatchToProps = {
  addProduct: () => addProduct(),
  openModal: (productId: number) => openModal(productId),
  updateStatus: (productId: number, status: tagType) =>
    updateStatus(productId, status),
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
