import Card from "../elements/card/card";
import CardTitle from "../elements/card/title";

const CardGoals = () => {
  return (
    <>
      <CardTitle title="Expenses By Category" />
      <div className="mb-8 grid grid-row-1  md:grid-cols-3 gap-6">
        <div className="sm:w-1/3 md:w-full">
          <Card label="" />
        </div>
        <div className="sm:w-1/3 md:w-full">
          <Card label="" />
        </div>
        <div className="sm:w-1/3 md:w-full">
          <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
        </div>
        <div className="sm:w-1/3 md:w-full">
          <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
        </div>
        <div className="sm:w-1/3 md:w-full">
          <Card label="" />
        </div>
        <div className="sm:w-1/3 md:w-full">
          <Card label="" />
        </div>
      </div>
    </>
  );
};

export default CardGoals;
