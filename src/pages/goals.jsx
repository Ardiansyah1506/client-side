import CardCategoryGoals from "../component/fragments/CardCategoryGoals";
import CardGoals from "../component/fragments/CardGoals";
import MainLayout from "../component/layout/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goal">
      <CardCategoryGoals />
      <CardGoals />
    </MainLayout>
  );
};

export default GoalsPage;
