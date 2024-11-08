import Card from "../elements/card/card";
import CardTitle from "../elements/card/title";

const CardCategoryGoals = () => {
  return (
    <div>
      <CardTitle title="Goals" />
      <div className="mb-8 flex flex-col min-h-[150px]  md:flex-row  gap-6">
        <div className="w-full md:w-2/3">
          <Card label="" />
        </div>
        <div className="">
          <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
        </div>
      </div>
    </div>
  );
};

export default CardCategoryGoals;
