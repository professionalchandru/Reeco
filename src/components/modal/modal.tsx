/* eslint-disable react-refresh/only-export-components */
import wrongBlack from "../../assets/images/png/asset_close_black_png.png";
import {
  BackgroundOverLay,
  ModalBodyRow,
  ModalContainer,
  ModalFooter,
  ModalHeaderRow,
} from "./modal.style";
import Text from "../uielements/text";
import { ActionImgClose } from "../order_table/order_table.style";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import { closeModal, updateStatus } from "../../redux/actions/app_actions";
import { tagType } from "../uielements/tag";
import { Iproduct } from "../../redux/types";

interface ImodalProps {
  products: Iproduct[];
  modalProductId: number;
  closeModal: () => void;
  updateStatus: (id: number, status: tagType) => void;
}

const Modal = (props: ImodalProps) => {
  const { products, modalProductId, closeModal, updateStatus } = props;

  const handleClickYes = () => {
    updateStatus(modalProductId, "missing-urgent");
    closeModal();
  };

  const handleClickNo = () => {
    updateStatus(modalProductId, "missing");
    closeModal();
  };

  return (
    <>
      <BackgroundOverLay>
        <ModalContainer>
          <ModalHeaderRow>
            <Text color="text-strong" fontWeight="800">
              Missing product
            </Text>
            <ActionImgClose
              src={wrongBlack}
              alt="close.png"
              onClick={closeModal}
            />
          </ModalHeaderRow>
          <ModalBodyRow>
            <Text size="tiny" color="text-strong" fontWeight="500">
              is{" "}
              <span style={{ fontWeight: 500 }}>
                {`'`}
                {
                  products.find((item) => item.productId === modalProductId)
                    ?.productName
                }
                {`'`}
              </span>{" "}
              urgent?
            </Text>
          </ModalBodyRow>
          <ModalFooter>
            <Text
              color="text-strong"
              size="tiny"
              fontWeight="800"
              onClick={handleClickNo}
            >
              No
            </Text>
            <Text
              color="text-strong"
              size="tiny"
              fontWeight="800"
              onClick={handleClickYes}
            >
              yes
            </Text>
          </ModalFooter>
        </ModalContainer>
      </BackgroundOverLay>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    modalProductId: state.App.modalProductId,
    products: state.App.products,
    isModalOpen: state.App.isModalOpen,
  };
};
const mapDispatchToProps = {
  closeModal: () => closeModal(),
  updateStatus: (productId: number, status: tagType) =>
    updateStatus(productId, status),
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
