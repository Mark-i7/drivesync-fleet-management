import styled from 'styled-components';

import DurationChart from 'features/dashboard/DurationChart';
import SalesChart from 'features/dashboard/SalesChart';
import Stats from 'features/dashboard/Stats';
import TodayActivity from 'features/check-in-out/TodayActivity';
import Spinner from 'ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  return (
    <StyledDashboardLayout>
      <Stats/>
      <TodayActivity />
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
