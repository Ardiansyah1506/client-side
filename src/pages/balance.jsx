import Card from "../component/elements/card";
import MainLayout from "../component/layout/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start */}
      <div className="text-lg text-gray-02 mb-2">Title</div>
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
      </div>
      {/* top content end */}
      {/* bottom content start */}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
        <div className="sm:w-1/3">
          <div className="sm:w-1/3 md:w-full">
            <Card label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque eveniet inventore at natus, voluptate culpa eaque optio voluptas necessitatibus dicta in eius hic veritatis laborum iste, magnam voluptatum voluptatem?" />
          </div>
        </div>
      </div>
      {/* bottom content end */}
    </MainLayout>
  );
};

export default BalancePage;
