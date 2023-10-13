import Text from "../uielements/text";
import { OrderInfoItem, OrderInfoRowConatiner } from "./order_info_row.style";

const OrderInfoRow = () => {
  return (
    <>
      <OrderInfoRowConatiner>
        <OrderInfoItem>
          <Text size="small" color="text-normal" fontWeight="600">
            Supplier
          </Text>
          <Text color="text-strong" fontWeight="800">
            East coast fruits & vegitables
          </Text>
        </OrderInfoItem>

        <OrderInfoItem>
          <Text size="small" color="text-normal" fontWeight="600">
            Shipping Date
          </Text>
          <Text color="text-strong" fontWeight="800">
            Thu, Feb 10
          </Text>
        </OrderInfoItem>

        <OrderInfoItem>
          <Text size="small" color="text-normal" fontWeight="600">
            Total
          </Text>
          <Text color="text-strong" fontWeight="800">
            $ 15,000.26
          </Text>
        </OrderInfoItem>

        <OrderInfoItem>
          <Text size="small" color="text-normal" fontWeight="600">
            Category
          </Text>
          <Text color="text-strong" fontWeight="800">
            some icons
          </Text>
        </OrderInfoItem>

        <OrderInfoItem>
          <Text size="small" color="text-normal" fontWeight="600">
            DepartMent
          </Text>
          <Text color="text-strong" fontWeight="800">
            300-444-263
          </Text>
        </OrderInfoItem>

        <OrderInfoItem isLast>
          <Text size="small" color="text-normal" fontWeight="600">
            Status
          </Text>
          <Text color="text-strong" fontWeight="800">
            Awaiting your approval
          </Text>
        </OrderInfoItem>
      </OrderInfoRowConatiner>
    </>
  );
};

export default OrderInfoRow;
