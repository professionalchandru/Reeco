import { TagElement } from "./tag.style";

export type tagType = "approved" | "missing" | "missing-urgent" | "";
type TagProps = {
  type: tagType | string;
};

const Tag = (props: TagProps) => {
  const { type } = props;
  return (
    <TagElement type={type}>
      {type === "approved"
        ? "Approved"
        : type === "missing"
        ? "Missing"
        : type === "missing-urgent"
        ? "Missing-Urgent"
        : ""}
    </TagElement>
  );
};

export default Tag;
