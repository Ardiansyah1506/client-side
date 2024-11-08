/* eslint-disable react/prop-types */

const CardTitle = (props) => {
  const { title } = props;

  return <div className="text-lg text-gray-02 mb-2">{title}</div>;
};

export default CardTitle;
