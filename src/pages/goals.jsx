import CardGoals from "../component/fragments/CardGoals";
import MainLayout from "../component/layout/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goal">
      <CardGoals />
    </MainLayout>
  );
};

export default GoalsPage;
