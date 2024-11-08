/* eslint-disable react/prop-types */

const Card = (props) => {
  const { label } = props;
  return (
    <>
      <div
        className={`bg-white rounded-lg px-6 py-5 shadow-xl flex flex-col h-full  w-full `}
      >
        <p className="text-gray-700 mb-4"> {label} </p>
      </div>
    </>
  );
};

export default Card;
